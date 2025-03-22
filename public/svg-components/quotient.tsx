import * as React from "react";
import { SVGProps } from "react";
const Quotient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      fill="#6938EF"
      fillRule="evenodd"
      d="M22 34.467c6.885 0 12.467-5.582 12.467-12.467 0-6.885-5.582-12.467-12.467-12.467-6.885 0-12.467 5.582-12.467 12.467 0 6.885 5.582 12.467 12.467 12.467ZM22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22Z"
      clipRule="evenodd"
    />
    <path
      fill="#F670C7"
      d="M22.252 22.482a5.867 5.867 0 0 1 8.296 0L41.956 33.89a5.867 5.867 0 0 1-8.296 8.296L22.252 30.778a5.867 5.867 0 0 1 0-8.296Z"
    />
    <path
      fill="#6519BA"
      d="m25.455 33.982 7.245 7.245a22.106 22.106 0 0 0 8.36-8.233l-7.186-7.186a12.495 12.495 0 0 1-8.419 8.174Z"
    />
  </svg>
);
export default Quotient;
