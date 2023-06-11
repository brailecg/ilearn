import Link from "next/link";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", id: "home" },
  { title: "TextBook", id: "textbook" },
  { title: "Statistics", id: "statistics" },
];

const navLinksMobile = [
  { title: "Home", id: "home" },
  { title: "TextBook", id: "textbook" },
  { title: "Statistics", id: "statistics" },
  { title: "Spring", id: "sprint" },
  { title: "Audio-call", id: "audiocall" },
];

const Nav = () => {
  const [games, setGame] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [navIcon, setNavIcon] = useState(true);

  return (
    <nav className="border-b">
      <div className="hidden px-5 md:flex justify-between h-20 max-w-7xl mx-auto">
        <div className="flex space-x-4 items-center">
          <Link href="/" aria-label="Go to Home">
            <span className="uppercase heading">GlobalTalk</span>
          </Link>
          <div className=" text-component-greymedium">|</div>
          <div className="flex space-x-4 text-font-greydark">
            {navLinks.map((link, index) => {
              return (
                <Link key={index} href={link.id}>
                  {link.title}
                </Link>
              );
            })}
            <div className="relative">
              <button
                onClick={() => setGame((prev) => !prev)}
                className="flex items-center space-x-1">
                <span> Games</span> <ChevronDownIcon className="w-4 h-4" />
              </button>

              <div
                className={`${
                  games
                    ? "flex flex-col space-y-2 p-5 bg-white rounded-lg absolute w-36"
                    : "hidden"
                }`}>
                <Link
                  href="/"
                  aria-label="link to sprint game"
                  className="flex items-center">
                  <span> Sprint</span>
                  <ArrowSmallRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  aria-label="link to sprint game"
                  className="flex items-center">
                  <span> Audio-call</span>
                  <ArrowSmallRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-8 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-component-cyanlight text-font-cyandark w-8 h-8 rounded-full flex justify-center items-center font-semibold">
              A
            </span>
            <span className="text-font-greydark"> Alex</span>
          </Link>
          <Link
            href="/"
            aria-label="sign out"
            className="font-semibold space-x-1 flex items-center">
            <span> Sign out</span>
            <ArrowSmallRightIcon className="w-4 h-4 font-semibold" />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center px-5 py-2 md:hidden">
        <div className="flex items-center">
          <button onClick={() => setNavIcon((prev) => !prev)}>
            <Bars3BottomLeftIcon
              className={`${navIcon ? "block" : "hidden"} h-8 w-8`}
            />
            <XMarkIcon className={`${navIcon ? "hidden" : "block"} h-8 w-8`} />
          </button>
        </div>
        <Link href="/" aria-label="Go to Home">
          <span className="uppercase heading text">GlobalTalk</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setUserDropdown((prev) => !prev)}
            className="flex items-center space-x-1">
            <span className="bg-component-cyanlight text-font-cyandark w-8 h-8 rounded-full flex justify-center items-center font-semibold text-xs">
              A
            </span>
            <span className="text-font-greydark"> Alex</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <div
            className={`${
              userDropdown
                ? "text-xs p-2 bg-white rounded-lg absolute"
                : "hidden"
            }`}>
            <Link
              href="/"
              aria-label="sign out"
              className="font-semibold space-x-1 flex items-center">
              <span> Sign out</span>
              <ArrowSmallRightIcon className="w-4 h-4 font-semibold" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex absolute md:hidden flex-col justify-center items-center space-y-6 w-full min-h-screen overflow-hidden transition-all bg-bg-greylight z-30 ${
          navIcon ? "right-full" : "right-0"
        }`}>
        {navLinksMobile.map((link, index) => {
          return (
            <Link key={index} href={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
