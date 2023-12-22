export default function SVGStar({
  width,
  height,
  className,
  fill = "#4F6CC4",
  ...props
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
  props?: React.ComponentProps<"svg">;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fill}
      {...props}
      className={className}
    >
      <path
        d="M12 17.7124L18.18 21.4424L16.54 14.4124L22 9.68238L14.81 9.07238L12 2.44238L9.19 9.07238L2 9.68238L7.46 14.4124L5.82 21.4424L12 17.7124Z"
        fill={fill}
      />
    </svg>
  );
}
