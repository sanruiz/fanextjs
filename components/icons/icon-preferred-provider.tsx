import { classNames } from "@/lib/utils";

export default function IconPreferredProvider(
  props: React.ComponentProps<"svg">
) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <path
        d="M12.7649 1.79218L16.3417 0.24329L18.5208 3.49989L22.3584 4.14998L22.4498 8.08006L25.3296 10.7235L23.3029 14.0786L24.312 17.8757L20.8107 19.5921L19.6273 23.3375L15.7641 22.8684L12.7649 25.3727L9.76569 22.8684L5.90245 23.3375L4.7191 19.5921L1.2178 17.8757L2.22688 14.0786L0.200195 10.7235L3.07996 8.08006L3.17136 4.14998L7.00902 3.49989L9.18803 0.24329L12.7649 1.79218Z"
        fill="#00D1FF"
      />
      <path
        d="M10.8947 17.5945L6.78125 13.3251L8.7502 11.2815L10.8947 13.5073L16.1804 8.02136L18.1493 10.0649L10.8947 17.5945Z"
        fill="#F8F8F8"
      />
    </svg>
  );
}
