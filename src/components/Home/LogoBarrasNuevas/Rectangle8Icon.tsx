import { memo, SVGProps } from 'react';

const Rectangle8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H20.1384V71.6031L0 79.0617V0Z' fill='#FD8204' />
  </svg>
);
const Memo = memo(Rectangle8Icon);
export { Memo as Rectangle8Icon };
