import { classNames } from "@/lib/utils";

export default function SVGChurches(props: React.ComponentProps<"svg">) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
        <g clipPath="url(#clip0_1_2752)">
          <path d="M17.551 25.2409H23.7383C24.0164 25.2409 24.2423 25.0161 24.2423 24.7394V15.0679C24.2423 14.9094 24.1676 14.7607 24.0402 14.6658L15.905 8.6181C15.7236 8.48332 15.4757 8.48511 15.2961 8.62213L8.20258 14.0469V7.99793C8.20258 7.91017 8.17918 7.8233 8.13508 7.74717L5.61517 3.40374C5.52517 3.24881 5.35868 3.15298 5.17868 3.15298C4.99869 3.15298 4.83219 3.24836 4.7422 3.40374L2.22228 7.74717C2.17818 7.8233 2.15479 7.90972 2.15479 7.99793V24.7394C2.15479 25.0161 2.38068 25.2409 2.65877 25.2409H17.551Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_1_2752">
            <rect width="22.0879" height="22.0879" fill="white" transform="translate(2.15479 3.15298)" />
          </clipPath>
        </defs>
      </svg>
  );
}
