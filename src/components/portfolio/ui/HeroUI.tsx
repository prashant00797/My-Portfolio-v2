import {
  DesktopOrbit,
  HeroCopy,
  MobileOrbit,
  TabletOrbit,
} from "./HeroUIIcons";
const Hero = () => {
  return (
    <section className="card relative mb-20 ml-0 mr-4 w-auto max-w-full overflow-hidden px-5 py-10 sm:px-6 md:mx-auto md:px-8 md:py-12 xl:h-110 xl:px-0 xl:py-0">
      <div className="hidden xl:absolute xl:left-1/2 xl:top-0 xl:block xl:h-110 xl:w-280 xl:-translate-x-1/2">
        <DesktopOrbit />
        <HeroCopy className="absolute left-1/2 top-1/2 max-w-130 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <TabletOrbit />
      <MobileOrbit />
    </section>
  );
};

export default Hero;
