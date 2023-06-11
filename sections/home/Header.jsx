import Image from "next/image";

import Button from "../../components/Button";

const Header = () => {
  return (
    <div className="py-10 sm:py-20">
      <div className="max-w-7xl px-5 mx-auto flex flex-col sm:flex-row space-x-4">
        <div className="space-y-8 text-center sm:text-left sm:w-1/2">
          <p className="uppercase text-font-cyandark font-semibold">
            e-course platform
          </p>
          <div className="space-y-4 text-3xl leading-[0.75] md:text-4xl lg:text-5xl lg:leading-none font-bold heading">
            <h3>Learning and</h3>
            <h3>teaching online,</h3>
            <h3>made easy.</h3>
          </div>
          <p className=" text-font-greydark">
            Practice your English and learn new things with the platform.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button text="About Platform" />
          </div>
          <div className="flex justify-center sm:justify-start">
            <div className="flex items-start space-x-2">
              <div className="  relative">
                <Image
                  src="images/icons/icon-bolt.svg"
                  width={24}
                  height={31}
                  alt="icon bolt"
                />
              </div>
              <div>
                <span className="header leading-none text-3xl xl:text-4xl font-extrabold">
                  600<span className="text-font-cyandark">+</span>
                </span>
                <p className="text-sm lg:text-base">Popular words</p>
              </div>
            </div>
            <Image
              src="images/icons/vertical.svg"
              width="2"
              height="50"
              alt="vertical divider"
              className="mx-12 w-auto h-auto"
            />

            <div className="flex items-start space-x-2">
              <Image
                src="images/icons/icon-controller.svg"
                width="19"
                height="31"
                alt="icon controller"
              />

              <div>
                <span className="header leading-none text-3xl xl:text-4xl font-extrabold">
                  2<span className="text-font-cyandark">+</span>
                </span>
                <p className="text-sm lg:text-base">Mini-games</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" min-h-[50vh] sm:w-1/2 flex items-center relative">
          <Image
            src="/images/home/home-hero-guy.png"
            className="sm:absolute z-10 min-h-fit"
            width={747}
            height={623}
            alt="home hero guy"
            priority
          />

          <Image
            src="/images/home/home-hero-plant-one.png"
            width="500"
            height="500"
            alt="home hero plant one"
            className="absolute z-20 right-0 bottom-0 w-[50vw] sm:w-[25vw] max-w-xs"
          />
          <Image
            src="/images/home/home-hero-plant-two.png"
            width="500"
            height="500"
            alt="home hero plant two"
            className="hidden sm:flex absolute -z-10 top-24 w-[25vw] max-w-[8rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
