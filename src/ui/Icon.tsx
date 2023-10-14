import React from 'react';
import { twMerge } from 'tailwind-merge';

import icons from '@/assets/shared/icons.svg';

export type IconType = 'battery' | 'bluetooth' | 'compatible' | 'light';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconType;
}

function Icon({ name, className }: IconProps) {
  return (
    <span
      className={twMerge(
        'flex h-[4.0625rem] w-[4.0625rem] items-center justify-center rounded-2xl bg-primary-400 p-4',
        className,
      )}
    >
      <svg className="h-full" aria-hidden="true">
        <use xlinkHref={`${icons}#icon-${name}`} />
      </svg>
    </span>
  );
}

export default Icon;
