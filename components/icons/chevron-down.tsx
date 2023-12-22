import { classNames } from "@/lib/utils";

export default function ChevronDown(props: React.ComponentProps<"svg">) {
  const { width, height, color } = props;
  return (
    <svg
      width="25"
      height="25"
      viewBox="-3 -4 19 16" // Ajustado para centrar la imagen en una caja de 25x25
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        d="M12 1C9.85212 2.95262 8.64788 4.04738 6.5 6L1 1"
        stroke={color}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
    </svg>
  );
}
