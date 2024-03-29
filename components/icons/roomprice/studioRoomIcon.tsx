import { classNames } from "@/lib/utils";

export default function StudioRoomIcon({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700 ml-2",
        className || ""
      )}
    >
      <path
        d="M53.9674 54.4158V5.21851C53.9674 3.65173 52.6953 2.38086 51.127 2.38086H4.72225C3.15394 2.38086 1.88184 3.65173 1.88184 5.21851V51.5781C1.88184 53.1449 3.15394 54.4158 4.72225 54.4158H35.1604"
        fill="white"
      />
      <path
        d="M53.9676 55.9961C53.0942 55.9961 52.3854 55.2879 52.3854 54.4154V5.21814C52.3854 4.52517 51.8208 3.96118 51.1272 3.96118H4.72244C4.02879 3.96118 3.46425 4.52517 3.46425 5.21814V51.5778C3.46425 52.2707 4.02879 52.8347 4.72244 52.8347H35.1606C36.034 52.8347 36.7429 53.5429 36.7429 54.4154C36.7429 55.2879 36.034 55.9961 35.1606 55.9961H4.72244C2.28328 55.9961 0.299805 54.0145 0.299805 51.5778V5.21814C0.299805 2.78135 2.28328 0.799805 4.72244 0.799805H51.1272C53.5663 0.799805 55.5498 2.78135 55.5498 5.21814V54.4154C55.5498 55.2879 54.841 55.9961 53.9676 55.9961Z"
        fill="#525252"
      />
    </svg>
  );
}
