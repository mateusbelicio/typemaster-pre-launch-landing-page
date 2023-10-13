import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ResponsiveImageProps extends React.HTMLAttributes<HTMLImageElement> {
  imagesSet: {
    mobile: string;
    tablet: string;
    desktop: string;
    fallback: string;
  };
  alt: string;
  containerClassName?: string | undefined;
}

function ResponsiveImage({
  imagesSet,
  className,
  containerClassName,
  ...props
}: ResponsiveImageProps) {
  return (
    <picture
      className={twMerge(
        'h-full overflow-hidden rounded-3xl',
        containerClassName,
      )}
    >
      <source srcSet={imagesSet.desktop} media="(min-width: 1190px)" />
      <source srcSet={imagesSet.tablet} media="(min-width: 640px)" />
      <source srcSet={imagesSet.mobile} media="(min-width: 250px)" />
      <img
        className={twMerge('h-full w-full object-cover', className)}
        src={imagesSet.fallback}
        {...props}
      />
    </picture>
  );
}

export default ResponsiveImage;
