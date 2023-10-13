import Button from '@/ui/Button';

import logo from '@/assets/shared/logo.svg';

function Header() {
  return (
    <header className="py-6 sm:py-10 lg:py-[3.375rem]">
      <div className="main-container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Typemaster keyboard logo" />
          <Button variant="secondary">Pre-order now</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
