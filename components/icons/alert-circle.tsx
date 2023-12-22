import React from 'react';
import { classNames } from "@/lib/utils";

function AlertCircle({ width, height, className, ...props }:{width?:number, height?:number, className?:string}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames("ml-2 icon ease-in-out duration-700", className || "")}
    >
      <g id="Group 438">
        <circle id="Unconfirmed Icon" cx="10" cy="10" r="10" fill="#4F6CC4" />
        <g id="Group 437">
          <rect id="Rectangle 154" x="9" y="4" width="2" height="9" fill="white" />
          <rect id="Rectangle 155" x="9" y="14" width="2" height="2" rx="1" fill="white" />
        </g>
      </g>
    </svg>
  );
}

export default AlertCircle;