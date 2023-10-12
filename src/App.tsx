import Button from './ui/Button';
import Paragraph from './ui/Paragraph';
import Heading from './ui/Heading';

import logo from './assets/shared/logo.svg';

function App() {
  return (
    <>
      <header className="py-6 md:py-10 lg:py-14">
        <div className="main-container">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Typemaster keyboard logo" />
            <Button variant="secondary">Pre-order now</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-10 md:py-6 lg:pt-7 lg:pb-[1.875rem]">
          <div className="main-container grid gap-y-8">
            <Heading variant="h1">Typemaster keyboard</Heading>

            <Paragraph>
              Improve your productivity and gaming without breaking the bank. Upgrade to a high
              quality mechanical typing experience.
            </Paragraph>

            <div className="flex items-center gap-8">
              <Button variant="primary">Pre-order now</Button>
              <Paragraph asElement="span" className="uppercase font-bold text-secondary-300">
                Release on 5/27
              </Paragraph>
            </div>
          </div>
        </section>

        <section className="text-center sm:text-left">
          <div className="main-container">
            <div className="flex flex-col items-center gap-6 lg:gap-7 sm:flex-row sm:justify-between lg:flex-col lg:justify-center">
              <Heading variant="h2" asElement="h2">
                Mechanical wireless keyboard
              </Heading>
              <Paragraph>
                The Typemaster keyboard boasts top-notch build and practical design. It offers a
                wide variety of switches and keycaps, along with reliable wireless connectivity.
              </Paragraph>
            </div>
          </div>
        </section>

        <section className="text-center sm:text-left">
          <div className="main-container">
            <ul className="list-none grid justify-items-center gap-16 sm:gap-y-[4.5rem] sm:grid-cols-2 lg:grid-cols-4">
              <li className="flex flex-col gap-6">
                <span>Icon</span>
                <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
                  Highly compatible
                </Heading>
                <Paragraph>
                  Easy to use and works well with all major computer brands, gaming consoles and
                  mobile devices. Plug & play, no installation or driver needed.
                </Paragraph>
              </li>

              <li className="flex flex-col gap-6">
                <span>Icon</span>
                <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
                  Wireless with bluetooth
                </Heading>
                <Paragraph>
                  Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to
                  30ft away. Simply plug the unifying receiver into your computer.
                </Paragraph>
              </li>

              <li className="flex flex-col gap-6">
                <span>Icon</span>
                <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
                  High capacity battery
                </Heading>
                <Paragraph>
                  Equipped with a long-lasting built-in battery, you’ll never have to spend a dime
                  on replaceable ones. Enjoy 40 hours of usage time between charges.
                </Paragraph>
              </li>

              <li className="flex flex-col gap-6">
                <span>Icon</span>
                <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
                  RGB backlit modes
                </Heading>
                <Paragraph>
                  Choose from 4 backlight brightness levels and adjustable breathing speed. Each key
                  glows intensely in the dark and helps you type in low light conditions.
                </Paragraph>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="main-container">Typemaster 2021 | All Rights Reserved</div>
      </footer>
    </>
  );
}

export default App;
