import { classNames } from "@/lib/utils";

export default function Linkedin(props: React.ComponentProps<"svg">) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "ml-2 icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 0.169922C8.28273 0.169922 0 8.45265 0 18.6699C0 28.8872 8.28273 37.1699 18.5 37.1699C28.7173 37.1699 37 28.8872 37 18.6699C37 8.45265 28.7173 0.169922 18.5 0.169922ZM8.88126 15.4924H13.0738V28.0892H8.88126V15.4924ZM13.3499 11.5958C13.3227 10.3606 12.4394 9.41992 11.0052 9.41992C9.57098 9.41992 8.63333 10.3606 8.63333 11.5958C8.63333 12.8053 9.54327 13.7731 10.9508 13.7731H10.9776C12.4394 13.7731 13.3499 12.8053 13.3499 11.5958ZM23.3664 15.1966C26.1252 15.1966 28.1935 16.9974 28.1935 20.8666L28.1934 28.0892H24.001V21.3499C24.001 19.6571 23.3943 18.5021 21.8766 18.5021C20.7184 18.5021 20.0285 19.2808 19.7255 20.0329C19.6146 20.3024 19.5874 20.678 19.5874 21.0544V28.0895H15.3944C15.3944 28.0895 15.4497 16.6748 15.3944 15.4928H19.5874V17.277C20.1438 16.4193 21.1404 15.1966 23.3664 15.1966Z"
        fill="white"
      />
    </svg>
  );
}