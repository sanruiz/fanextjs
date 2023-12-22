import { classNames } from "@/lib/utils";

export default function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "ml-2 icon ease-in-out duration-700",
        props.className || ""
      )}
      viewBox="0 0 16 16"
    >
      <circle cx="7.93025" cy="8.00007" r="7.14314" fill="#4E4E4E" />
      <path
        d="M6.82942 11.4682L3.84961 8.51603L5.27592 7.10295L6.82942 8.64205L10.6584 4.84863L12.0847 6.26171L6.82942 11.4682Z"
        fill="#F8F8F8"
      />
    </svg>
  );
}
