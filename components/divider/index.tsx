import React from 'react';

function Divider({
  height = 2,
  color = 'white'
}: {
  height?: number;
  color?: string;
}) {
  return <div className={`h-${height} bg-${color} w-full absolute left-0`}></div>;
}

export default Divider;
