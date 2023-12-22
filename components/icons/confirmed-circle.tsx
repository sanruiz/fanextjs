import { classNames } from "@/lib/utils";

export default function ConfirmedCircle(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "ml-2 icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        id="Confirmed Icon"
        d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM8 15.5L3 10.5L4.41 9.09L8 12.67L15.59 5.08L17 6.5L8 15.5Z"
        fill="#33B899"
      />
    </svg>
  );
}
