import { classNames } from "@/lib/utils";

export default function LoadingIcon({
  width,
  height,
  className,
  stroke = "white",
  ...props
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700 ml-2",
        className || ""
      )}
    >
      <path
        d="M13.7383 7L0.221478 7"
        stroke={stroke ?? "white"}
        strokeLinejoin="round"
        strokeWidth="2.08134"
      />
      <path
        d="M8.53955 0.762194C10.9758 3.19849 12.3418 4.56443 14.7781 7.00073L8.53955 13.2393"
        stroke={stroke ?? "white"}
        strokeLinejoin="round"
        strokeWidth="2.08134"
      />
    </svg>
  );
}
