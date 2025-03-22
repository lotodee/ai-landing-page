import * as React from "react";
import { SVGProps } from "react";
const Sisyphus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="#039855" d="M.25 19.2h9.6v9.6H.25z" />
    <path fill="#027A48" d="M29.05 28.8h-9.6v-9.6h9.6z" />
    <path fill="#A6F4C5" d="m9.85 19.2 9.6-9.6v9.6l-9.6 9.6v-9.6Z" />
    <path fill="#6CE9A6" d="m19.45 28.8-9.6 9.6v-9.6l9.6-9.6v9.6Z" />
    <path fill="#32D583" d="M.25 19.2 19.45 0v9.6l-9.6 9.6H.25Z" />
    <path fill="#12B76A" d="M29.05 28.8 9.85 48v-9.6l9.6-9.6h9.6Z" />
  </svg>
);
export default Sisyphus;
