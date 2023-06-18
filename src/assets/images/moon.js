import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 4"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={2.596}
        x2={24.406}
        y1={7.594}
        y2={29.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8e2de2" />
        <stop offset={1} stopColor="#4a00e0" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M30.706 19.721a1 1 0 0 0-1.042-.234A13.423 13.423 0 0 1 12.513 2.335a1 1 0 0 0-1.276-1.278A15.214 15.214 0 0 0 5.51 4.68a15.422 15.422 0 0 0 21.81 21.81 15.213 15.213 0 0 0 3.623-5.728 1 1 0 0 0-.237-1.041Zm-4.8 5.355A13.422 13.422 0 1 1 10.047 3.764a15.514 15.514 0 0 0 4.2 13.985 15.51 15.51 0 0 0 13.985 4.2 13.357 13.357 0 0 1-2.326 3.127Z"
    />
  </svg>
);
export default SvgComponent;
