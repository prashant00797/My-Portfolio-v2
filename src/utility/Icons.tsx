//  Email Icon
export const Email = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="3"></rect>
      <path d="M3 7l9 6 9-6"></path>
    </svg>
  );
};

//GitHub Icon

export const Github = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
};

//LinkedIn
export const LinkedIn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8.5h4.54V24H.22V8.5zM7.98 8.5h4.35v2.11h.06c.61-1.16 2.09-2.38 4.3-2.38 4.6 0 5.45 3.03 5.45 6.97V24h-4.54v-7.9c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.19V24H7.98V8.5z" />
    </svg>
  );
};

export const ReactIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 228"
      className={className}
    >
      <circle cx="128" cy="114" r="14" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="10" fill="none">
        <ellipse cx="128" cy="114" rx="110" ry="45" />
        <ellipse
          cx="128"
          cy="114"
          rx="110"
          ry="45"
          transform="rotate(60 128 114)"
        />
        <ellipse
          cx="128"
          cy="114"
          rx="110"
          ry="45"
          transform="rotate(120 128 114)"
        />
      </g>
    </svg>
  );
};

export const JSIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 630 630"
      className={className}
    >
      <rect width="630" height="630" fill="#F7DF1E" />
      <path d="M423 492c13 21 30 36 60 36 25 0 41-12 41-29 0-20-16-27-43-39l-15-6c-44-19-73-43-73-94 0-47 36-83 92-83 40 0 69 14 90 50l-49 31c-11-19-23-27-41-27-19 0-31 12-31 27 0 19 12 26 40 39l15 6c51 22 80 44 80 96 0 55-43 85-101 85-57 0-94-27-112-62zM227 497c10 18 19 33 41 33 21 0 34-8 34-41V277h64v213c0 65-38 94-94 94-50 0-79-26-94-57z" />
    </svg>
  );
};

export const TailwindIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="#38bdf8"
          fillRule="evenodd"
          d="M27 0Q16.2 0 13.5 10.8q4.05-5.4 9.45-4.05c2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0M13.5 16.2Q2.7 16.2 0 27q4.05-5.4 9.45-4.05c2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HtmlIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <path fill="#e65100" d="M41 5H7l3 34 14 4 14-4z" />
      <path fill="#ff6d00" d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path
        fill="#fff"
        d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5zm8.9-8 .3-4H24v4z"
      />
      <path
        fill="#eee"
        d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6z"
      />
    </svg>
  );
};

export const CssIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
    >
      <path
        fill="#1572b6"
        d="M18.814 114.123 8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"
      />
      <path
        fill="#33a9dc"
        d="m64.001 117.062 36.559-10.136 8.601-96.354h-45.16z"
      />
      <path
        fill="#fff"
        d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"
      />
      <path
        fill="#ebebeb"
        d="m64.083 87.349-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"
      />
      <path
        fill="#fff"
        d="m81.127 64.675-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"
      />
      <path
        fill="#ebebeb"
        d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"
      />
    </svg>
  );
};

export const ReduxIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        fill="#7e57c2"
        d="M23 4c-6.617 0-12 7.27-12 16.205 0 4.834 1.582 9.169 4.078 12.136A3 3 0 0 0 15 33a3 3 0 1 0 3-3 3 3 0 0 0-.897.152C15.206 27.731 14 24.175 14 20.205 14 12.924 18.037 7 23 7c3.837 0 7.111 3.547 8.404 8.518 1.122.346 2.237.782 3.33 1.308C33.579 9.508 28.759 4 23 4"
      />
      <path
        fill="#7e57c2"
        d="M35.507 20.084c-3.947-2.392-8.374-3.442-12.182-2.959A2.98 2.98 0 0 0 21 16a3 3 0 1 0 0 6 2.995 2.995 0 0 0 2.789-1.912c3.118-.379 6.812.531 10.163 2.563 6.403 3.881 9.67 10.569 7.282 14.911-.827 1.504-2.286 2.572-4.218 3.09-2.286.611-5.007.394-7.727-.528a24.5 24.5 0 0 1-2.725 2.168c2.552 1.117 5.196 1.704 7.669 1.704 1.24 0 2.438-.147 3.559-.447 2.741-.733 4.841-2.304 6.071-4.542 3.153-5.731-.596-14.22-8.356-18.923"
      />
      <path
        fill="#7e57c2"
        d="M35 28.992C35 27.34 33.657 26 32 26s-3 1.34-3 2.992c0 .669.228 1.281.6 1.779-1.279 2.802-3.744 5.567-7.062 7.578-3.865 2.344-8.185 3.202-11.555 2.302-1.932-.518-3.391-1.586-4.218-3.09-1.702-3.094-.521-7.376 2.61-10.988a23 23 0 0 1-.706-3.575c-5.07 4.797-7.109 11.323-4.532 16.009 1.23 2.238 3.33 3.809 6.071 4.542 1.121.3 2.318.447 3.559.447 3.346 0 7.007-1.068 10.326-3.08 3.836-2.325 6.683-5.577 8.209-8.962C33.815 31.801 35 30.541 35 28.992"
      />
    </svg>
  );
};

export const NextJSIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width="180"
      height="180"
      className={className}
    >
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1V69.597L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1)" />
      </g>
      <defs>
        <linearGradient
          id="paint0"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TSIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width="400"
      height="400"
      className={className}
    >
      <rect width="400" height="400" fill="#3178c6" />
      <path fill="#fff" d="M0 200v-200h400v400h-400z" fillOpacity="0" />
      <path
        fill="#fff"
        d="M227.9 394.5v-31.2c8.1 4.2 17.8 7.4 26.6 9.1 8.8 1.7 17 2.6 24.5 2.6 4 0 7.7-.3 11.1-.8 3.4-.5 6.3-1.4 8.7-2.6 2.4-1.2 4.3-2.8 5.6-4.8 1.3-2 2-4.4 2-7.3 0-3.5-.9-6.6-2.8-9.3-1.9-2.7-4.5-5.2-7.8-7.5-3.3-2.3-7.3-4.5-11.8-6.6-4.6-2.1-9.5-4.3-14.9-6.6-14.9-6.3-26-13.9-33.3-22.8-7.3-8.9-11-19.6-11-32.1 0-9.9 1.9-18.4 5.8-25.6 3.9-7.2 9.2-13.1 15.9-17.9 6.7-4.8 14.6-8.3 23.5-10.7 8.9-2.4 18.5-3.5 28.7-3.5 9.5 0 18.2.6 26.1 1.9 7.9 1.3 15.4 3.1 22.4 5.5v29.7c-6.5-3.7-13.5-6.5-21-8.4-7.5-1.9-15-2.9-22.6-2.9-3.7 0-7.1.4-10.3 1.1-3.2.7-6 1.8-8.3 3.2-2.3 1.4-4.2 3.2-5.5 5.3-1.3 2.1-2 4.6-2 7.4 0 3.1.8 5.9 2.3 8.3 1.5 2.4 3.8 4.7 6.7 6.8 2.9 2.1 6.5 4.2 10.7 6.2 4.2 2 9 4.1 14.4 6.4 7.6 3.2 14.4 6.6 20.3 10.3 5.9 3.7 10.9 7.8 15 12.4 4.1 4.6 7.2 9.7 9.3 15.5 2.1 5.8 3.1 12.4 3.1 19.8 0 10.6-1.9 19.5-5.8 26.8-3.9 7.3-9.2 13.3-16 18-6.8 4.7-14.8 8.1-24 10.3-9.2 2.2-19.1 3.2-29.7 3.2-10.3 0-20.1-.8-29.3-2.5-9.3-1.7-17.3-4.1-24.1-7.2zM152.3 274.3h-56.6v-29.5h146.3v29.5h-56.4v151.2h-33.3z"
      />
    </svg>
  );
};
