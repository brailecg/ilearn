import Image from "next/image";
import Link from "next/link";

import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
const Learn = () => {
  return (
    <div className="bg-bg-white py-10 sm:py-20">
      <div className="max-w-7xl px-5 mx-auto  flex flex-col sm:flex-row">
        <div className=" min-h-0 min-w-0">
          <Image
            src="/images/home/home-hero-two.png"
            width={581}
            height={446}
            className="min-h-0"
            alt="home hero two"
          />
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left sm:w-1/2 ">
          <div className="space-y-4 text-3xl leading-[0.75] md:text-4xl lg:text-5xl lg:leading-none font-bold heading">
            <h3>Learn a language</h3>
            <h3>in a playful way</h3>
          </div>
          <p className=" text-font-greydark mt-6 mb-16">
            Make learning words mor dun win mini-games
          </p>
          <div className="flex space-x-10 justify-center sm:justify-start">
            <Link
              href="/"
              className="flex flex-col items-center justify-end bg-component-pinklight relative h-28 w-32 rounded-xl">
              <Image
                src="/images/home/home-shoes.svg"
                width={132}
                height={106}
                className="absolut -top-8"
                alt="home shoes"
              />

              <p className="flex items-center space-x-1 text-component-pinkdark font-semibold mb-2">
                <span>Sprint</span> <ArrowSmallRightIcon className=" h-4 w-4" />
              </p>
            </Link>
            <Link
              href="/"
              className="flex flex-col items-center justify-end bg-component-cyanlight relative h-28  w-44 rounded-xl">
              <Image
                src="/images/home/home-mic.svg"
                width={92}
                height={107}
                className="absolut -top-8"
                alt="home mic"
              />

              <p className="flex items-center space-x-1 text-font-cyandark font-semibold mb-2">
                <span>Audio-call</span>{" "}
                <ArrowSmallRightIcon className=" h-4 w-4" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
