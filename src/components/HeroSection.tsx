import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';

function HeroSection() {
  return (
    <section className="py-10 md:pb-[4.5rem] md:pt-6 lg:pt-[1.875rem]">
      <div className="main-container main-grid">
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

        <div className="relative mt-6 h-[20.6875rem] sm:col-start-8 sm:mt-0 sm:h-[26.5625rem] lg:col-start-7">
          <div className="absolute left-0 h-full w-[23.25rem] rounded-3xl bg-red-400 lg:w-full"></div>
        </div>

        <div className="relative -mt-4 h-[12.0625rem] sm:mt-0 sm:h-80 lg:col-span-8">
          <div className="sm:main-grid absolute right-0 flex h-full gap-6 sm:w-full sm:gap-x-[1.875rem] lg:grid-cols-8">
            <div className="h-full w-[8.0625rem] rounded-3xl bg-red-400 sm:col-span-4 sm:w-full lg:col-span-3"></div>
            <div className="h-full w-[13.75rem] rounded-3xl bg-red-400 sm:col-span-8 sm:w-full lg:col-span-5"></div>
          </div>
        </div>

        <div className="mt-9 grid items-center justify-items-center gap-y-6 text-center sm:row-start-3 sm:mt-8 sm:grid-cols-[inherit] sm:justify-items-start sm:gap-x-[inherit] sm:text-left lg:col-start-10 lg:col-end-[-1] lg:row-start-2 lg:grid-cols-1 lg:gap-y-7">
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
