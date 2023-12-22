import { FormDataType } from ".";

export function validateReviewForm(review_payload: any) {
  let validation_logs = [];
  const reviewer_name = review_payload["reviewer_name"];

  const source = review_payload["source"];

  const review_text = review_payload["review_text"];
  const rating_value = review_payload["rating_value"];

  const review_uuid = review_payload["review_uuid"];

  const relationship = review_payload["relationship"];
  const email = review_payload["email"];
  const name_regex = /^[ a-zA-Z\-\’]+$/;
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const name_valid = name_regex.test(reviewer_name);

  const review_text_valid = review_text.trim().length <= 150 ? false : true;

  const email_valid = email.trim().length > 0 && email_regex.test(email);
  const rating_valid = !isNaN(rating_value) && rating_value > 0;
  const relation_valid = relationship ? true : false;
  validation_logs.push({
    field: "rating_value",
    valid: rating_valid,
    message: "Please select a rating value",
  });
  validation_logs.push({
    field: "relationship",
    valid: relation_valid,
    message: "Please select a relationship",
  });
  validation_logs.push({
    field: "reviewer_name",
    valid: name_valid,
    message: "Please enter a valid name",
  });
  validation_logs.push({
    field: "email",
    valid: email_valid,
    message: "Please enter a valid email",
  });
  return validation_logs;
}
