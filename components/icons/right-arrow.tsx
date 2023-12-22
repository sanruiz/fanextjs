import { classNames } from "@/lib/utils";

export default function RightArrow(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "ml-2 icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        className="ease-in-out duration-700"
        d="M13.7383 7L0.221478 7"
        strokeLinejoin="round"
        strokeWidth="2.08134"
      />
      <path
        className="ease-in-out duration-700"
        d="M8.53955 0.762194C10.9758 3.19849 12.3418 4.56443 14.7781 7.00073L8.53955 13.2393"
        strokeLinejoin="round"
        strokeWidth="2.08134"
      />
    </svg>
  );
}
