import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/Layout";
import styles from "./level.module.css";
import paths from "../../../paths";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const SvgCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
    <circle
      cx={180}
      cy={180}
      r={175}
      strokeWidth={10}
      fill="none"
      stroke={props.strokeOne}
    />
    <circle
      className={styles.circle}
      cx={180}
      cy={180}
      r={175}
      strokeWidth={10}
      fill="none"
      stroke={props.strokeTwo}
      strokeDasharray={props.strokeDashArray}
      strokeDashoffset={props.strokeDashOffset}
    />
  </svg>
);

const SvgIconNote = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21}>
    <path
      {...props}
      d="M15.732 1.62A1.2 1.2 0 0 0 14.19.67l-8.4 2.625a1.2 1.2 0 0 0-.842 1.146V14.2a3 3 0 1 0 1.2 2.4V8.042l8.4-2.626v3.412c.412.036.814.111 1.2.22V1.816c0-.067-.006-.132-.016-.197Zm3.616 13.78a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0Zm-2.716-.522-3.592-1.98a.6.6 0 0 0-.89.524v3.96a.6.6 0 0 0 .89.526l3.592-1.98a.6.6 0 0 0 0-1.05Z"
    />
  </svg>
);

const knowList = [
  { id: 1, word: "lone", meaning: "solitaire" },
  { id: 2, word: "anniversary", meaning: "anniversaire" },
  { id: 3, word: "lone", meaning: "solitaire" },
  { id: 4, word: "anniversary", meaning: "anniversaire" },
  { id: 5, word: "lone", meaning: "solitaire" },
];

const WordListComponent = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col space-y-12 sm:space-y-0 sm:flex-row bg-bg-white lg:w-1/2 p-8">
      <div className=" sm:w-1/2 space-y-5">
        <div className="flex justify-start items-center space-x-4">
          <h3 className="heading text-base 2lg:text-lg xl:text-xl font-bold">
            I Know
          </h3>
          <Link
            href={paths.speedtask}
            className=" text-font-cyandark font-semibold bg-component-cyanlight text-xs md:text-sm px-2 py-1 rounded-xl">
            15 words
          </Link>
        </div>
        <div className="space-y-5">
          {knowList.map((know) => {
            return (
              <div key={know.id} className="flex items-center space-x-3">
                <button
                  onClick={() => setSelected(know.id)}
                  className={`p-3 rounded-lg ${
                    selected === know.id
                      ? "bg-component-cyandark"
                      : "bg-component-greylight"
                  } `}>
                  <SvgIconNote
                    fill={`${selected === know.id ? "white" : "#BABABA"} `}
                  />
                </button>
                <div className=" inline-block sm:flex flex-row lg:flex-col 2lg:flex-row   grow text-sm xl:text-base space-x-1">
                  <span>{know.word} </span>
                  <span className=" text-font-greydark">
                    {" - "}
                    {know.meaning}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" sm:w-1/2 space-y-5 ">
        <div className="flex justify-start items-center space-x-4">
          <h3 className="heading text-base 2lg:text-lg xl:text-xl font-bold">
            I Don't Know
          </h3>
          <Link
            href={paths.speedtask}
            className=" text-component-pink font-semibold bg-component-pinklight text-xs md:text-sm px-2 py-1 rounded-xl">
            15 words
          </Link>
        </div>
        <div className="space-y-5">
          {knowList.map((know) => {
            return (
              <div key={know.id} className="flex items-center space-x-3">
                <button
                  onClick={() => setSelected(know.id)}
                  className={`p-3 rounded-lg ${
                    selected === know.id
                      ? "bg-component-cyandark"
                      : "bg-component-greylight"
                  } `}>
                  <SvgIconNote
                    fill={`${selected === know.id ? "white" : "#BABABA"} `}
                  />
                </button>
                <div className=" inline-block sm:flex flex-row lg:flex-col 2lg:flex-row grow text-sm xl:text-base space-x-1">
                  <span>{know.word} </span>
                  <span className=" text-font-greydark">
                    {" - "}
                    {know.meaning}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  return (
    <Layout>
      <div className="py-10 sm:py-16">
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row max-w-[90rem] lg:mx-auto px-5 lg:space-x-4">
          <div className="flex flex-col bg-bg-white lg:w-1/2 px-5 py-4">
            <div className="flex flex-col sm:flex-row">
              <div className="hidden sm:flex justify-center items-center w-2/5">
                <Image
                  src="/images/games/sprint/game-grad-cap.png"
                  width={281}
                  height={200}
                  alt="grad cap"
                />
              </div>
              <div className="flex sm:hidden justify-center items-center ">
                <Image
                  src="/images/games/sprint/game-grad-cap-sm.png"
                  width={75}
                  height={75}
                  alt="grad cap"
                />
              </div>
              <div className="space-y-4 sm:w-3/5">
                <h2 className="heading text-center sm:text-start text-3xl">
                  Your Sprint
                </h2>
                <p className=" font-semibold text-center sm:text-start text-font-greydark">
                  You did pretty good!
                </p>
                <div className="flex space-x-2 justify-start   w-full">
                  <div className="flex justify-center w-full relative">
                    <div className="absolute w-full h-full flex flex-col justify-center items-center">
                      <p className=" font-semibold  ">retrieved</p>
                      <p className="heading text-2xl sm:text-4xl ">240</p>
                      <p className=" text-font-greydark">points</p>
                    </div>
                    <SvgCircle
                      strokeOne="#C3DCE3"
                      strokeTwo="#5996A5"
                      strokeDashArray={1000}
                      strokeDashOffset={300}
                    />
                  </div>
                  <div className="flex justify-center w-full relative">
                    <div className="absolute w-full h-full flex flex-col justify-center items-center">
                      <p className=" font-semibold  ">40/</p>
                      <p className="heading text-2xl sm:text-4xl ">50</p>
                      <p className=" text-font-greydark">words</p>
                    </div>
                    <SvgCircle
                      strokeOne="#C3DCE3"
                      strokeTwo="#639B6D"
                      strokeDashArray={1000}
                      strokeDashOffset={500}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 space-x-6 py-4">
              <button className="flex items-center text-sm sm:text-base font-semibold space-x-0 sm:space-x-2">
                <ArrowUturnLeftIcon className="w-6 h-6" />
                <p>Play it again</p>
              </button>
              <button className=" bg-component-cyanlight text-sm sm:text-base text-font-cyandark font-semibold px-4 py-2 rounded-full ">
                Go to Textbook
              </button>
            </div>
          </div>
          <WordListComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
