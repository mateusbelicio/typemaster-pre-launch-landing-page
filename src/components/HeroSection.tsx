import { useEffect, useRef } from 'react';
import { useInView, animate, AnimationSequence } from 'framer-motion';
import { stagger } from 'framer-motion/dom';

import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';
import ResponsiveImage from '@/ui/ResponsiveImage';

import { images } from '@/assets/images';

const animationSequence: AnimationSequence = [
  [
    '.content-1',
    { opacity: [0, 1], y: [100, 0] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut' },
  ],
  [
    'picture',
    { opacity: [0, 1], scale: [0, 1] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut' },
  ],
  [
    '.content-2',
    { opacity: [0, 1], y: [100, 0] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut' },
  ],
];

function HeroSection() {
  const ref = useRef(null);
  const wasAnimated = useRef(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !wasAnimated.current) {
      wasAnimated.current = true;
      animate(animationSequence);
    }
  }, [isInView]);

  const keyboardImages = {
    fallback: images.keyboardMobile,
    mobile: images.keyboardMobile,
    tablet: images.keyboardTablet,
    desktop: images.keyboardDesktop,
  };

  const keyboardAndGlassImages = {
    fallback: images.keyboardAndGlassMobile,
    mobile: images.keyboardAndGlassMobile,
    tablet: images.keyboardAndGlassTablet,
    desktop: images.keyboardAndGlassDesktop,
  };

  const keyboardAndPhoneImages = {
    fallback: images.keyboardAndPhoneMobile,
    mobile: images.keyboardAndPhoneMobile,
    tablet: images.keyboardAndPhoneTablet,
    desktop: images.keyboardAndPhoneDesktop,
  };

  return (
    <section
      ref={ref}
      className="py-10 md:pb-[4.5rem] md:pt-6 lg:pt-[1.875rem]"
    >
      <div className="main-container main-grid lg:hero-pattern lg:hero-pattern--right">
        <div className="flex flex-col gap-8 sm:col-span-6 sm:mt-[3.75rem] lg:col-span-5 lg:gap-6">
          <Heading variant="h1" className="content-1">
            Typemaster <br /> keyboard
          </Heading>

          <Paragraph className="content-1 lg:text-[1.125rem]">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </Paragraph>

          <div className="content-1 mt-2 flex items-center gap-8 lg:mt-4">
            <Button variant="primary">Pre-order now</Button>
            <Paragraph
              asElement="span"
              className="font-bold uppercase text-secondary-300"
            >
              Release on 5/27
            </Paragraph>
          </div>
        </div>

        <div className="relative mt-6 h-[20.6875rem] sm:col-start-8 sm:mt-0 sm:h-[26.5625rem] lg:col-start-7 lg:h-[30rem]">
          <ResponsiveImage
            alt="Typemaster keyboard"
            imagesSet={keyboardImages}
            containerClassName="absolute left-0 w-[23.25rem] sm:w-[max(23.25rem,_100%)] lg:w-full"
          />
        </div>

        <div className="relative -mt-4 h-[12.0625rem] sm:mt-0 sm:h-80 lg:col-span-8 lg:h-[30rem]">
          <div className="sm:main-grid lg:hero-pattern lg:hero-pattern--left absolute right-0 flex h-full gap-6 sm:w-full sm:gap-x-[1.875rem] lg:grid-cols-8">
            <ResponsiveImage
              alt="A keyboard and a phone on the side"
              imagesSet={keyboardAndPhoneImages}
              containerClassName="w-[8.0625rem] sm:col-span-4 sm:w-full lg:col-span-3 bg-primary-400"
              className="opacity-75 mix-blend-multiply"
            />
            <ResponsiveImage
              alt="A keyboard and a glass of water next to it"
              imagesSet={keyboardAndGlassImages}
              containerClassName="w-[13.75rem] sm:col-span-8 sm:w-full lg:col-span-5"
            />
          </div>
        </div>

        <div className="mt-9 grid items-center justify-items-center gap-y-6 text-center sm:row-start-3 sm:mt-8 sm:grid-cols-[inherit] sm:justify-items-start sm:gap-x-[inherit] sm:text-left lg:col-start-10 lg:col-end-[-1] lg:row-start-2 lg:mt-0 lg:grid-cols-1 lg:gap-y-7 lg:self-center">
          <Heading
            variant="h2"
            asElement="h2"
            className="content-2 sm:col-span-4 lg:col-span-1"
          >
            Mechanical <br /> wireless <br /> keyboard
          </Heading>
          <Paragraph className="content-2 sm:col-start-6 sm:col-end-[-1] lg:col-span-1">
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
