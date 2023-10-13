import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';

import ResponsiveImage from './ResponsiveImage';

import imageKeyboardMobile from '@/assets/mobile/image-keyboard.jpg';
import imageKeyboardTablet from '@/assets/tablet/image-keyboard.jpg';
import imageKeyboardDesktop from '@/assets/desktop/image-keyboard.jpg';

import imageKeyboardAndGlassMobile from '@/assets/mobile/image-glass-and-keyboard.jpg';
import imageKeyboardAndGlassTablet from '@/assets/tablet/image-glass-and-keyboard.jpg';
import imageKeyboardAndGlassDesktop from '@/assets/desktop/image-glass-and-keyboard.jpg';

import imageKeyboardAndPhoneMobile from '@/assets/mobile/image-phone-and-keyboard.jpg';
import imageKeyboardAndPhoneTablet from '@/assets/tablet/image-phone-and-keyboard.jpg';
import imageKeyboardAndPhoneDesktop from '@/assets/desktop/image-phone-and-keyboard.jpg';

function HeroSection() {
  const keyboardImages = {
    fallback: imageKeyboardMobile,
    mobile: imageKeyboardMobile,
    tablet: imageKeyboardTablet,
    desktop: imageKeyboardDesktop,
  };

  const keyboardAndGlassImages = {
    fallback: imageKeyboardAndGlassMobile,
    mobile: imageKeyboardAndGlassMobile,
    tablet: imageKeyboardAndGlassTablet,
    desktop: imageKeyboardAndGlassDesktop,
  };

  const keyboardAndPhoneImages = {
    fallback: imageKeyboardAndPhoneMobile,
    mobile: imageKeyboardAndPhoneMobile,
    tablet: imageKeyboardAndPhoneTablet,
    desktop: imageKeyboardAndPhoneDesktop,
  };

  return (
    <section className="py-10 md:pb-[4.5rem] md:pt-6 lg:pt-[1.875rem]">
      <div className="main-container main-grid lg:hero-pattern lg:hero-pattern--right">
        <div className="flex flex-col gap-8 sm:col-span-6 sm:self-center lg:col-span-5 lg:gap-6">
          <Heading variant="h1">
            Typemaster <br /> keyboard
          </Heading>

          <Paragraph>
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </Paragraph>

          <div className="mt-2 flex items-center gap-8 lg:mt-4">
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
            alt="Image"
            imagesSet={keyboardImages}
            containerClassName="absolute left-0 w-[max(23.25rem,_100%)] lg:w-full"
          />
        </div>

        <div className="relative -mt-4 h-[12.0625rem] sm:mt-0 sm:h-80 lg:col-span-8 lg:h-[30rem]">
          <div className="sm:main-grid lg:hero-pattern lg:hero-pattern--left absolute right-0 flex h-full gap-6 sm:w-full sm:gap-x-[1.875rem] lg:grid-cols-8">
            <ResponsiveImage
              alt="Image"
              imagesSet={keyboardAndPhoneImages}
              containerClassName="w-[8.0625rem] sm:col-span-4 sm:w-full lg:col-span-3 bg-primary-400"
              className="mix-blend-multiply"
            />
            <ResponsiveImage
              alt="Image"
              imagesSet={keyboardAndGlassImages}
              containerClassName="w-[13.75rem] sm:col-span-8 sm:w-full lg:col-span-5"
            />
          </div>
        </div>

        <div className="mt-9 grid items-center justify-items-center gap-y-6 text-center sm:row-start-3 sm:mt-8 sm:grid-cols-[inherit] sm:justify-items-start sm:gap-x-[inherit] sm:text-left lg:col-start-10 lg:col-end-[-1] lg:row-start-2 lg:mt-0 lg:grid-cols-1 lg:gap-y-7 lg:self-center">
          <Heading
            variant="h2"
            asElement="h2"
            className="sm:col-span-4 lg:col-span-1"
          >
            Mechanical <br /> wireless <br /> keyboard
          </Heading>
          <Paragraph className="sm:col-start-6 sm:col-end-[-1] lg:col-span-1">
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
