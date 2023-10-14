import { useEffect, useRef } from 'react';
import { useInView, animate, AnimationSequence } from 'framer-motion';
import { stagger } from 'framer-motion/dom';

import Feature from './Feature';
import Heading from '@/ui/Heading';

const animationSequence: AnimationSequence = [
  [
    '.features span',
    { opacity: [0, 1], scale: [0, 1] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut' },
  ],
  [
    '.features h3',
    { opacity: [0, 1], y: [100, 0] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut', at: 0 },
  ],
  [
    '.features p',
    { opacity: [0, 1], y: [100, 0] },
    { duration: 0.5, delay: stagger(0.1), ease: 'easeOut', at: 0 },
  ],
];

function FeaturesSection() {
  const ref = useRef(null);
  const wasAnimated = useRef(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !wasAnimated.current) {
      wasAnimated.current = true;
      animate(animationSequence);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="features py-[4.5rem] text-center sm:text-left lg:pt-24"
    >
      <div className="main-container">
        <Heading variant="h2" asElement="h2" className="sr-only py-8">
          Features
        </Heading>

        <ul className="main-grid list-none justify-items-center gap-y-16">
          <Feature icon="compatible">
            <Feature.Title>
              Highly <br /> compatible
            </Feature.Title>
            <Feature.Description>
              Easy to use and works well with all major computer brands, gaming
              consoles and mobile devices. Plug & play, no installation or
              driver needed.
            </Feature.Description>
          </Feature>

          <Feature icon="bluetooth">
            <Feature.Title>
              Wireless <br /> with bluetooth
            </Feature.Title>
            <Feature.Description>
              Powerful 2.4G RF technology allows you to connect the cordless
              keyboard from up to 30ft away. Simply plug the unifying receiver
              into your computer.
            </Feature.Description>
          </Feature>

          <Feature icon="battery">
            <Feature.Title>
              High capacity <br /> battery
            </Feature.Title>
            <Feature.Description>
              Equipped with a long-lasting built-in battery, you’ll never have
              to spend a dime on replaceable ones. Enjoy 40 hours of usage time
              between charges.
            </Feature.Description>
          </Feature>

          <Feature icon="light">
            <Feature.Title>
              RGB backlit <br /> modes
            </Feature.Title>
            <Feature.Description>
              Choose from 4 backlight brightness levels and adjustable breathing
              speed. Each key glows intensely in the dark and helps you type in
              low light conditions.
            </Feature.Description>
          </Feature>
        </ul>
      </div>
    </section>
  );
}

export default FeaturesSection;
