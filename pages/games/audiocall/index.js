import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../../components/Layout";
import paths from "../../../paths";
import { sprintLevel } from "../sprint";

const AudioCall = () => {
  const [level, setLevel] = useState("");
  return (
    <Layout>
      <div className="flex flex-col items-center sm:items-start sm:flex-row mx-2 sm:mx-8 lg:mx-auto max-w-5xl  bg-bg-white my-8 py-4 sm:py-0 rounded-3xl relative">
        <div className="hidden sm:p-4 sm:flex sm:w-1/3">
          <Image
            src="/images/games/audiocall/game-audiocall.png"
            width={254}
            height={408}
            className="w-full h-auto md:py-12 md:px-8"
            alt="audiocall image"
          />
        </div>
        <div className="flex w-20 h-20 p-2 bg-component-cyandark mb-4 sm:hidden rounded-full">
          <Image
            src="/images/home/home-mic.svg"
            width={80}
            height={80}
            className=" "
            alt="audiocall mic"
          />
        </div>
        <div className="w-full sm:w-2/3 my-auto">
          <div className="flex justify-center sm:justify-start items-center space-x-4">
            <h3 className="heading text-xl md:text-5xl font-bold">
              Audio-call
            </h3>
            <Link
              href={paths.audiocalltask}
              className=" text-font-cyandark font-semibold bg-component-cyanlight text-xs md:text-base px-2 sm:px-4 py-2 rounded-xl">
              Audtion Task
            </Link>
          </div>
          <p className="text-center px-2 sm:px-0 text-xs sm:text-base sm:text-left text-font-greydark mt-4 mb-8 max-w-lg mx-auto sm:mx-0">
            The Audio-Call training develops vocabulary and improves listening
            comprehension.
          </p>
          <div>
            <p className="text-center sm:text-start md:px-0 text-font-greydark mb-4">
              Choose Level:
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 md:space-x-6 mb-8">
              {sprintLevel.map((lvl) => {
                return (
                  <button
                    onClick={() => setLevel(lvl.id)}
                    key={lvl.id}
                    className={`text-xs sm:text-base border-2 sm:border-4 p-4 sm:p-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex justify-center items-center font-semibold ${
                      level === lvl.id ? lvl.bg : "bg-white"
                    } ${level === lvl.id ? "text-white" : lvl.textColor} ${
                      lvl.borderColor
                    }`}>
                    {lvl.id}
                  </button>
                );
              })}
            </div>
          </div>
          {level !== "" ? (
            <div className="flex justify-center sm:justify-start">
              <Link
                disabled
                href={`${paths.audiocall}/${level.toLocaleLowerCase()}`}
                className="p-2 sm:p-3 md:p-4 bg-component-cyan rounded-full text-white font-semibold">
                Get Started
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AudioCall;
