import { classNames } from "@/lib/utils";

export default function Filter(props: React.ComponentProps<"svg">) {
  const { width, height, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path fill={fill} d="m10.7157,18.5945l4.0909,0l0,-2l-4.0909,0l0,2zm-7.15906,-12.00002l0,2l18.40906,0l0,-2l-18.40906,0zm3.06818,7.00002l12.27268,0l0,-2l-12.27268,0l0,2z" />
    </svg>
  );
}
