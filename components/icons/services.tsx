import { classNames } from "@/lib/utils";

export default function SVGServices(props: React.ComponentProps<"svg">) {
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
        <g clipPath="url(#clip0_31_138)">
          <path d="M43.9648 8.59389C39.1416 3.80138 31.3229 3.80138 26.4997 8.59389L24.7911 10.2914L23.0825 8.59389C18.2593 3.80138 10.4406 3.80138 5.61742 8.59389C0.794193 13.3864 0.794193 21.1561 5.61742 25.9478L24.7911 45.0001L34.9441 34.9114L43.9648 25.9478C48.788 21.1553 48.788 13.3856 43.9648 8.59389ZM34.329 28.0779H28.5734V33.8018H21.0088V28.0779H15.2532V20.5551H21.0088V14.8321H28.5734V20.556H34.329V28.0787V28.0779Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_31_138">
            <rect width="45.5814" height="40" fill="white" transform="translate(2 5)" />
          </clipPath>
        </defs>
      </svg>
  );
}
