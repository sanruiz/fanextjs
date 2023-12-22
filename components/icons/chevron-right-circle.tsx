import { classNames } from "@/lib/utils";

export default function ChevronRightCircle(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
  <circle cx="19" cy="19" r="19" transform="matrix(1 -1.74846e-07 -1.74846e-07 -1 2 39.7524)"  strokeWidth="2.08134" strokeLinejoin="round"/>
  <path d="M16.8438 30.2001C20.5537 26.4901 22.6338 24.41 26.3437 20.7001L16.8437 11.2001"  strokeWidth="2.08134" strokeLinejoin="round"/>
</svg>
  );
}
