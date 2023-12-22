import { classNames } from "@/lib/utils";

export default function SVGHospitals(props: React.ComponentProps<"svg">) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        "icon ease-in-out duration-700",
        props.className || ""
      )}
    >
      <g clipPath="url(#clip0_1_2720)">
        <path d="M14.0459 10.8624C14.184 10.6199 14.4427 10.47 14.7231 10.47C15.0035 10.47 15.2622 10.6199 15.4003 10.8624L16.5742 12.9265L19.9178 7.04616C20.0558 6.8036 20.3146 6.65376 20.595 6.65376C20.8754 6.65376 21.1341 6.8036 21.2722 7.04616L24.5413 12.7954C25.7411 10.596 25.4056 7.78928 23.5347 5.93031C21.2547 3.66488 17.5577 3.66488 15.2778 5.93031L14.47 6.7329L13.6623 5.93031C11.3823 3.66488 7.68532 3.66488 5.40538 5.93031C3.47511 7.84688 3.17821 10.7716 4.51376 12.9986H12.831L14.0454 10.8629L14.0459 10.8624Z" fill="#525252" />
        <path d="M17.2504 14.8772C17.1124 15.1198 16.8536 15.2696 16.5732 15.2696C16.2928 15.2696 16.0341 15.1198 15.896 14.8772L14.7221 12.8132L13.9615 14.151C13.8234 14.3935 13.5647 14.5434 13.2843 14.5434H5.81583L14.4691 23.1415L23.5224 14.1458L20.5945 8.99687L17.2509 14.8772H17.2504Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_1_2720">
          <rect width="21.5492" height="18.9105" fill="white" transform="translate(3.69385 4.23058)" />
        </clipPath>
      </defs>
    </svg>
  );
}
