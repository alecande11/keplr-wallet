import * as React from "react";
import { SVGProps } from "react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5.5C4.978.5.5 4.978.5 10.5c0 4.418 2.865 8.167 6.84 9.49.498.092.66-.218.66-.482v-1.861c-2.782.605-3.36-1.18-3.36-1.18-.456-1.156-1.112-1.464-1.112-1.464-.907-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.34 1.087 2.91.832.09-.646.348-1.088.635-1.337-2.22-.254-4.556-1.112-4.556-4.943a3.87 3.87 0 0 1 1.03-2.684c-.103-.252-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025a9.59 9.59 0 0 1 2.503-.337 9.62 9.62 0 0 1 2.505.337c1.91-1.294 2.747-1.026 2.747-1.026.545 1.378.202 2.396.099 2.647.641.7 1.029 1.593 1.029 2.684 0 3.841-2.34 4.687-4.566 4.934.358.31.686.919.686 1.852v2.744c0 .266.16.579.668.48A10.003 10.003 0 0 0 20.5 10.5c0-5.522-4.477-10-10-10Z"
      fill="#95A1B4"
    />
  </svg>
);

// eslint-disable-next-line import/no-default-export
export default GithubIcon;
