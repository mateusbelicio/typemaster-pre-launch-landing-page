import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const defaultVariant =
  'py-2.5 px-3.5 sm:px-[1.625rem] sm:py-4 uppercase text-base font-bold duration-300 transition-colors rounded-lg whitespace-nowrap';

const variants = {
  primary: 'text-secondary-100 bg-primary-400 hover:bg-primary-300',
  secondary: 'text-secondary-400 bg-secondary-200 hover:text-secondary-100 hover:bg-secondary-400',
};

function Button({ children, variant, className }: ButtonProps) {
  return (
    <button className={twMerge(defaultVariant, variants[variant], className)}>{children}</button>
  );
}

export default Button;
