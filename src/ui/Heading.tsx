import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  asElement?: React.JSX.ElementType;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
}

const variants = {
  h1: 'text-xl',
  h2: 'text-lg',
  h3: 'text-md',
  h4: 'text-base',
};

function Heading({ children, asElement, variant, className }: HeadingProps) {
  const Component = asElement ? asElement : 'h1';

  <p className=""></p>;

  return (
    <Component
      className={twMerge('font-black text-secondary-400 uppercase', variants[variant], className)}
    >
      {children}
    </Component>
  );
}

export default Heading;
