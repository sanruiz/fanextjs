import { classNames } from "@/lib/utils";

export default function SVGSafety(props: React.ComponentProps<"svg">) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
        <g clipPath="url(#clip0_324_2340)">
          <path d="M24.5191 6.0814C24.5054 6.06737 24.4946 6.05333 24.4809 6.0393C24.4673 6.02526 24.4564 6.01403 24.4455 6C21.2605 9.39643 15.152 11.788 8 12.122C8.4768 26.7912 11.0706 38.8612 24.4809 44.9916C24.4864 44.9944 24.4946 44.9972 24.5 45C24.5054 44.9972 24.5136 44.9944 24.5191 44.9916C37.9294 38.8612 40.5205 26.794 41 12.1248C33.8589 11.816 27.7422 9.45257 24.5191 6.0814ZM21.3068 32.7532L15.8304 27.1112L18.5277 24.3323L21.3068 27.1954L30.4723 17.7528L33.1696 20.5317L21.3068 32.7532Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_324_2340">
            <rect width="33" height="39" fill="white" transform="translate(8 6)" />
          </clipPath>
        </defs>
      </svg>
  );
}
