import { classNames } from "@/lib/utils";

export default function Facebook(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "ml-2 icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        d="M33.9166 18.6701C33.9166 10.1601 27.0099 3.25342 18.4999 3.25342C9.98992 3.25342 3.08325 10.1601 3.08325 18.6701C3.08325 26.1318 8.38659 32.3447 15.4166 33.7784V23.2951H12.3333V18.6701H15.4166V14.8159C15.4166 11.8405 17.837 9.42008 20.8124 9.42008H24.6666V14.0451H21.5833C20.7353 14.0451 20.0416 14.7388 20.0416 15.5868V18.6701H24.6666V23.2951H20.0416V34.0097C27.827 33.2388 33.9166 26.6713 33.9166 18.6701Z"
        fill="#F4F5F8"
      />
    </svg>
  );
}
