import { useEffect } from 'react';
import { animate, AnimationSequence } from 'framer-motion';

import Button from '@/ui/Button';

import logo from '@/assets/shared/logo.svg';

const animationSequence: AnimationSequence = [
  [
    '.logo',
    { opacity: [0, 1], x: [-100, 0] },
    { duration: 0.5, ease: 'easeOut' },
  ],
  [
    '.button',
    { opacity: [0, 1], x: [100, 0] },
    { duration: 0.5, ease: 'easeOut', at: 0 },
  ],
];

function Header() {
  useEffect(() => {
    animate(animationSequence);
  }, []);

  return (
    <header className="py-6 sm:py-10 lg:py-[3.375rem]">
      <div className="main-container">
        <div className="flex items-center justify-between">
          <img className="logo" src={logo} alt="Typemaster keyboard logo" />
          <Button className="button" variant="secondary">
            Pre-order now
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
