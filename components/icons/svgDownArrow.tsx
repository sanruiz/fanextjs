import { classNames } from "@/lib/utils";

export default function SVGDownArrow({
  width,
  height,
  className,
  ...props
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames("icon ease-in-out duration-700", className || "")}
    >
      <circle
        cx="9"
        cy="9"
        r="9"
        transform="matrix(1.31134e-07 1 1 -1.31134e-07 2 2)"
        stroke="#4F6CC4"
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
      <path
        d="M6.5249 9.03125C8.28226 10.7886 9.26754 11.7739 11.0249 13.5312L15.5249 9.03125"
        stroke="#4F6CC4"
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
    </svg>
  );
}
