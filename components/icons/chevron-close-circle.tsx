import { classNames } from "@/lib/utils";

export default function ChevronCloseCircle(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <circle strokeLinejoin="round" strokeWidth="2.08134" stroke="#525252" r="16.6361" cy="18.5" cx="18.5" />
      <path d="m10.79167,10.79167l15.41666,15.41666" opacity="undefined" strokeLinejoin="round" strokeWidth="2.08134" stroke="#525252" fill="none" />
      <path transform="rotate(90 18.5 18.5)" id="svg_5" d="m10.79167,10.79167l15.41666,15.41666" opacity="undefined" strokeLinejoin="round" strokeWidth="2.08134" stroke="#525252" fill="none" />
    </svg>
  );
}
