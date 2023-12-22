import { classNames } from "@/lib/utils";

export default function Heart({
  width,
  height,
  className,
  ...props
}: {
  width?: number|string;
  height?: number|string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        className || ""
      )}
    >
      <path
        d="M17.6318 1.50141C15.6981 -0.396304 12.5621 -0.396304 10.6284 1.50141L9.94141 2.17567L9.25437 1.50141C7.3207 -0.396304 4.18471 -0.396304 2.25104 1.50141C0.317363 3.39913 0.317363 6.4768 2.25104 8.37451L9.94141 15.9219L14.0138 11.9253L17.6318 8.37451C19.5654 6.4768 19.5654 3.39913 17.6318 1.50141Z"
        fill="#4F6CC4"
      />
    </svg>
  );
}
