import { memo, SVGProps } from 'react';

const Rectangle12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M20.791 89.9189H0.652683V8.85884L20.791 0.415087V89.9189Z' fill='#FD8204' />
  </svg>
);
const Memo = memo(Rectangle12Icon);
export { Memo as Rectangle12Icon };
