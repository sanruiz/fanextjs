import { classNames } from "@/lib/utils";

export default function ChevronUpCircle(props: React.ComponentProps<"svg">) {
  const { width, height, stroke } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <ellipse
        cx="15.5"
        cy="15.5"
        rx="13.5"
        ry="13.5"
        transform="rotate(-90 15.5 15.5)"
        stroke={stroke ?? "#F8F8F8"}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
      <path
        d="M8.78711 18.453C11.4232 15.817 12.9011 14.339 15.5371 11.703L22.2871 18.453"
        stroke={stroke ?? "#F8F8F8"}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
    </svg>
  );
}
