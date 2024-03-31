import { memo, SVGProps } from 'react';

const LogoBarrasNuevasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.48373 0H8.94184V30.0733L0.48373 33.2059V0Z' fill='#FD8204' />
    <path d='M22.099 62.9659H13.6409V32.8926L22.099 29.76V62.9659Z' fill='#FD8204' />
    <path d='M35.256 62.9659H26.7979V28.9207L35.256 25.3743V62.9659Z' fill='#FD8204' />
    <path d='M8.94194 62.9659H0.483827V36.8646L8.94194 34.1457V62.9659Z' fill='#FD8204' />
    <path d='M13.6408 0H22.0989V26.1013L13.6408 28.8202V0Z' fill='#FD8204' />
  </svg>
);
const Memo = memo(LogoBarrasNuevasIcon);
export { Memo as LogoBarrasNuevasIcon };
