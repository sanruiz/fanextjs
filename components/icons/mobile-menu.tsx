import { classNames } from "@/lib/utils";

export default function MobileMenu(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        d="M0 20H30V16.6667H0V20ZM0 11.6667H30V8.33333H0V11.6667ZM0 0V3.33333H30V0H0Z"
        fill="#525252"
      />
    </svg>
  );
}
