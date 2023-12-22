import React, { useState, useEffect } from "react";
import { validateReviewForm } from "./auxiliary";
import SVGRightArrow from "../icons/svgRightArrow";
import dynamic from "next/dynamic";
import { Community } from "@/types/common";

const ThankYouPop = dynamic(() => import("../thank-you-pop"));

export interface FormDataType {
  reviewer_name: string | null;
  review_text: string | null;
  email: string | null;
  relationship: string | null;
  rating_value: number | null;
}

interface ErrorsType {
  rating_value: string | null;
  reviewer_name: string | null;
  email: string | null;
  review_text: string | null;
  relationship: string | null;
}

const AddReviewForm = ({
  handleShowModal,
  community,
}: {
  handleShowModal: () => void;
  community: Community;
}) => {
  const [rating, setRating] = useState(0);
  const [highlightedStars, setHighlightedStars] = useState(0);
  const [showPop, setShowPop] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsType>({
    rating_value: null,
    reviewer_name: null,
    email: null,
    review_text: null,
    relationship: null,
  });

  const [formData, setFormData] = useState<FormDataType>({
    reviewer_name: "",
    review_text: "",
    email: "",
    relationship: "",
    rating_value: 0,
  });

  // Define handlers for each section
  const removeHighlight = () => {
    setHighlightedStars(0);
  };

  const handleRatingHover = (value: number) => {
    setHighlightedStars(value);
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
    setHighlightedStars(value);
    setFormData((prev) => ({
      ...prev,
      rating_value: value,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  const handleShowPop = () => {
    setShowPop((showModal) => !showModal);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateReviewForm(formData);

    const haveError = errors.some((error) => !error.valid);

    if (haveError) {
      errors.forEach((error) => {
        if (!error.valid)
          setErrors((prev) => ({
            ...prev,
            [error.field]: error.message,
          }));
      });
      return;
    }

    const body = {
      reviewer_name: formData.reviewer_name,
      review_text: formData.review_text,
      rating_value: formData.rating_value,
      source: "original",
      review_uuid: "e7bca5be-e7c0-4171-9612-92693f6fe0b8",
      email: formData.email,
      relationship: formData.relationship,
    };

    fetch("/fam-communities/community/submit-review", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(() => {
        handleShowPop();
      })
      .catch((err) => {
        alert("A problem has occurred, please try again later");
      });
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
      setShowPop(false);
    };
  }, []);
  return (
    <>
      <div className="fixed inset-0 flex flex-col z-50 w-full h-full bg-white overflow-auto">
        <div className="bg-link py-4">
          <div className="container flex justify-between items-center px-4">
            <h5 className="text-3xl leading-8 font-semibold text-background1 m-0">
              Submit a Review
            </h5>
            <button onClick={handleShowModal}>
              <svg
                fill="#F8F8F8"
                height="26px"
                width="26px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 460.775 460.775"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        {showPop ? (
          <ThankYouPop onCloseModal={handleShowModal} community={community} />
        ) : (
          <div className="flex flex-col container mx-auto  p-4">
            <div>
              <h2 className="font-bold text-5xl leading-[59px] text-primary m-0 mb-2">
                {community.name}
              </h2>
              <div>
                <p className="text-faDimGray font-openSans underline text-sm md:text-base md:no-underline">
                  {community.address_1}, {community.city} {community.state},{" "}
                  {community.zip}{" "}
                </p>
              </div>

              <div className="text-base font-semibold leading-7 text-link">
                Assisted Living
              </div>
              <hr className="border-solid border-faSilver my-3 p-0" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr,1fr]">
              <form
                className="flex flex-col font-montserrat text-primary"
                onSubmit={handleSubmit}
              >
                <RatingComponent
                  rating={rating}
                  highlightedStars={highlightedStars}
                  onOutHover={removeHighlight}
                  onStarHover={handleRatingHover}
                  onStarClick={handleRatingClick}
                  error={errors.rating_value}
                />
                <ReviewSection
                  review={formData.review_text}
                  onInputChange={handleInputChange}
                  error={errors.review_text}
                />
                <RelationshipSection
                  relationship={formData.relationship}
                  onRadioChange={handleInputChange}
                  error={errors.relationship}
                />
                <PersonalInfoSection
                  formData={formData}
                  onInputChange={handleInputChange}
                  errors={errors}
                />
                <div className="mb-4">
                  <p className="text-sm leading-5 font-normal">
                    By submitting this review I certify that this review is
                    based on my own experience and is my genuine opinion of
                    Symphony at Stuart, or I have been granted authority to post
                    this review on behalf of a geniuine experience or opinon of
                    another.
                  </p>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="flex p-4 items-center justify-center text-[#fff] transition-all duration-[0.4s] ease bg-secondary rounded font-semibold text-base leading-[26px] min-w-[300px] hover:bg-primary "
                  >
                    Submit Review
                    <SVGRightArrow width={16} height={12} stroke={"#fff"} />
                  </button>
                </div>
              </form>
              <div className="text-primary font-montserrat tracking-[0.46px]">
                <div>
                  <h4 className="text-2xl leading-[33px] font-bold m-0 mb-2">
                    Tips for writing a helpful review:
                  </h4>
                  <p className="text-base leading-[21px] font-normal font-openSans mb-4">
                    Please include as much detail as possible to help
                    prospective family members evaluating (Community Name).
                    Topics to discuss may include:
                  </p>
                  <ul className="list-disc pl-[25px]">
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      What made you choose (Comunity Name) over others?{" "}
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      How are the staff interactions with residents?{" "}
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      What activities or amenities are offered that residents
                      enjoy the most?
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      What are the room sizes and decor like?{" "}
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      What made you choose (Comunity Name) over others?{" "}
                    </li>
                  </ul>
                  <h4 className="text-2xl leading-[33px] font-bold m-0 mb-2">
                    Review Policies
                  </h4>
                  <ul className="list-disc pl-[25px]">
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      If you leave a review without contact information, we may
                      remove it.
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      If you leave a review, and the property contests the
                      content of the review, we will send you an email asking
                      for proof of residence. A copy of a bill would be an
                      example of appropriate proof of residence.
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      If we do not hear back from your within five business
                      days, we will remove contested reviews.
                    </li>
                    <li className="text-base leading-[21px] font-normal font-openSans mb-[5px]">
                      If you mention an individual by name, use inappropriate
                      language, or create a review that is not helpful for
                      potential residents/customers, we may remove it.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddReviewForm;
type RatingComponentProps = {
  rating: number;
  highlightedStars: number;
  onOutHover: () => void;
  onStarHover: (index: number) => void;
  onStarClick: (index: number) => void;
  error: string | null;
};

const RatingComponent: React.FC<RatingComponentProps> = ({
  rating,
  highlightedStars,
  onOutHover,
  onStarHover,
  onStarClick,
  error,
}) => (
  <div className="flex flex-col">
    <label className="text-primary font-semibold text-[22px] leading-[26px]">
      Your overall rating of this community
    </label>
    <div onMouseOut={onOutHover}>
      <div className="py-4 flex gap-1">
        {[1, 2, 3, 4, 5].map((index) => {
          const colorActive =
            highlightedStars !== 0
              ? highlightedStars >= index
                ? "#F4B30A"
                : "#F0F0F0"
              : rating >= index
              ? "#F4B30A"
              : "#F0F0F0";

          return (
            <div
              className="cursor-pointer text-[30px]"
              key={index}
              onMouseEnter={() => onStarHover(index)}
              onClick={() => onStarClick(index)}
              style={{
                color: colorActive,
                textShadow: `0px 0px 1px ${colorActive}`,
              }}
            >
              ★
            </div>
          );
        })}
      </div>
    </div>

    {error && <p className="text-red-500">{error}</p>}
  </div>
);

type ReviewSectionProps = {
  review: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string | null;
};

const ReviewSection: React.FC<ReviewSectionProps> = ({
  review = "",
  onInputChange,
  error,
}) => {
  const [textLength, setTextLength] = useState(0);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { value } = e.target;

    if (value.length > 150) {
      // Truncar el texto a 150 caracteres
      value = value.slice(0, 150);
    }

    setTextLength(value.length);

    // Llamar a la función proporcionada por el padre para manejar el cambio de texto
    onInputChange({
      ...e,
      target: {
        ...e.target,
        value,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="review_text"
        className="text-primary font-semibold text-[34px] leading-[36px] mb-2"
      >
        Write your review <span className="text-red-500">*</span>
      </label>
      <textarea
        id="review_text"
        className="border-solid border-[#ced4da] border-[1px] rounded-[0.25rem] p-4 focus:border-[#86b7fe] focus:outline-none focus:shadow-[0_0px_0px_0.25rem_rgba(13,110,253,.25)]"
        placeholder="Write your review here"
        name="review_text"
        onChange={(e) => {
          onInputChange(e);
          handleTextChange(e);
        }}
        onBlur={onInputChange}
        value={review ?? ""}
        maxLength={150}
      />
      <span className="text-end">{textLength}/150</span>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

type RelationshipSectionProps = {
  relationship: string | null;
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
};

const RelationshipSection: React.FC<RelationshipSectionProps> = ({
  relationship = "",
  onRadioChange,
  error,
}) => {
  const relationshipOptions = [
    "Resident",
    "Friend of Resident",
    "Employee",
    "Visitor",
    "Family Member of Resident",
    "Local Referral Partner",
    "Professional Partner",
    "Other",
  ];

  return (
    <div className="flex flex-col mb-4">
      <label className="text-primary font-semibold text-[22px] leading-[26px] mb-2">
        What’s your relationship to Assisted Living Retirement Home I?{" "}
        <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 font-normal text-[18px] leading-7 mt-5">
        {relationshipOptions.map((option) => (
          <div key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="relationship"
              id={option}
              value={option}
              checked={relationship === option}
              className="appearance-none cursor-pointer rounded-full border-[1px] border-solid border-link w-4 h-4 checked:border-link checked:bg-link "
              onChange={onRadioChange}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")`,
              }}
            />
            <label
              className="cursor-pointer font-openSans text-lg leading-7 text-primary"
              htmlFor={option}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

type PersonalInfoSectionProps = {
  formData: FormDataType;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    reviewer_name: string | null;
    email: string | null;
  };
};

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  onInputChange,
  errors,
}) => (
  <div className="grid grid-cols-1 gap-6 mb-4 md:grid-cols-2">
    <div className="flex flex-col">
      <label
        htmlFor="reviewer_name"
        className="text-primary font-semibold text-[22px] leading-[26px] mb-2"
      >
        Your Name <span className="text-red-500">*</span>
      </label>
      <input
        className="py-[6px] px-3 h-[50px] border-solid border-[#ced4da] border-[1px] rounded-[0.25rem] p-4 focus:border-[#86b7fe] focus:outline-none focus:shadow-[0_0px_0px_0.25rem_rgba(13,110,253,.25)]"
        type="text"
        value={formData.reviewer_name ?? ""}
        name="reviewer_name"
        id="reviewer_name"
        onChange={onInputChange}
        onBlur={onInputChange}
      />
      {errors.reviewer_name && (
        <p className="text-red-500">{errors.reviewer_name}</p>
      )}
    </div>
    <div className="flex flex-col">
      <label
        htmlFor="email"
        className="text-primary font-semibold text-[22px] leading-[26px] mb-2"
      >
        Your Email Address <span className="text-red-500">*</span>
      </label>
      <input
        className="py-[6px] px-3 h-[50px] border-solid border-[#ced4da] border-[1px] rounded-[0.25rem] p-4 focus:border-[#86b7fe] focus:outline-none focus:shadow-[0_0px_0px_0.25rem_rgba(13,110,253,.25)]"
        value={formData.email ?? ""}
        id="email"
        type="email"
        name="email"
        onChange={onInputChange}
        onBlur={onInputChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
    </div>
  </div>
);
