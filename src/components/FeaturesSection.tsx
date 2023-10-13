import Feature from './Feature';

function FeaturesSection() {
  return (
    <section className="py-[4.5rem] text-center sm:text-left lg:pt-24">
      <div className="main-container">
        <ul className="main-grid list-none justify-items-center gap-y-16">
          <Feature title="Highly compatible" icon="compatible">
            Easy to use and works well with all major computer brands, gaming
            consoles and mobile devices. Plug & play, no installation or driver
            needed.
          </Feature>

          <Feature title="Wireless with bluetooth" icon="bluetooth">
            Powerful 2.4G RF technology allows you to connect the cordless
            keyboard from up to 30ft away. Simply plug the unifying receiver
            into your computer.
          </Feature>

          <Feature title="High capacity battery" icon="battery">
            Equipped with a long-lasting built-in battery, you’ll never have to
            spend a dime on replaceable ones. Enjoy 40 hours of usage time
            between charges.
          </Feature>

          <Feature title="RGB backlit modes" icon="light">
            Choose from 4 backlight brightness levels and adjustable breathing
            speed. Each key glows intensely in the dark and helps you type in
            low light conditions.
          </Feature>
        </ul>
      </div>
    </section>
  );
}

export default FeaturesSection;
