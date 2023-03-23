import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Size } from './types';

/**
 * The size attribute of the input tag has poor compatibility and will not be used
 * @see https://caniuse.com/?search=input%20size
 * */
interface Props
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
  size?: Size;
}

const SIZE_STYLE: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-xs rounded',
  md: 'px-3 py-1.5 text-sm rounded-md',
  lg: 'px-4 py-2 text-md rounded-lg',
};

const BASE_STYLE = clsx(
  'caret-default focus:outline-none',
  'bg-slate-100 dark:bg-slate-900',
  'text-slate-900 dark:text-slate-200 ',
  'ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-theme-500 dark:focus:ring-theme-500'
);

const Index = forwardRef<HTMLInputElement, Props>(({ size = 'md', className, ...props }, ref) => (
  <input ref={ref} className={clsx(SIZE_STYLE[size], BASE_STYLE, className)} {...props} />
));

export default Index;
