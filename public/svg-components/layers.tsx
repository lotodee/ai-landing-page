import * as React from "react";
import { SVGProps } from "react";
const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={45}
    height={44}
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#7B00F4" d="M3.682 15h5.659L15 6.766H9.634L3.682 15z" />
    <path fill="#B627FF" d="M8 1h5.658l-3.98 5.766H15l-3.143 4.57H1L8 1z" />
    <path fill="#000" d="m5.275 12.818 6.35-1.482H6.322l-1.048 1.482z" />
  </svg>
);
export default Layers;
