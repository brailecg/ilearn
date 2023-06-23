import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-10 sm:py-15">
      <div className="max-w-7xl px-5 mx-auto space-y-4 text-font-greydark">
        <div className="flex justify-around sm:justify-between ">
          <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>Home</li>
            <li>Textbook</li>
            <li>Statistics</li>
            <li>Sprint</li>
            <li>Audio-call</li>
          </ul>
          <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>Alex</li>
            <li>Gabriel</li>
            <li>Marcus</li>
          </ul>
        </div>

        <Image
          src="/images/icons/footer-line.svg"
          alt="footer line"
          width="1280"
          height="2"
          style={{ width: "1280px", height: "auto" }}
        />
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="flex space-x-8">
            <Image
              src="/images/icons/icon-github.svg"
              width={26}
              height={20}
              alt="github icon"
            />
            <Image
              src="/images/icons/icon-gt.svg"
              width={26}
              height={20}
              alt="gt icon"
            />
            <Image
              src="/images/icons/icon-youtube.svg"
              width={26}
              height={20}
              alt="youtube icon"
            />
          </div>
          <p>&copy;2021 GlobalTalk. Project for GlobalTalk.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
