import { classNames } from "@/lib/utils";

export default function ChevronLeftCircle(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
  <ellipse cx="18" cy="18" rx="18" ry="18" transform="matrix(-1 2.62268e-07 2.62268e-07 1 38 1.75244)" stroke="#525252" strokeWidth="2.08134" strokeLinejoin="round"/>
  <path d="M23.9375 10.8021C20.4228 14.3168 18.4522 16.2874 14.9375 19.8021L23.9375 28.8021" stroke="#525252" strokeWidth="2.08134" strokeLinejoin="round"/>
</svg>
  );
}
