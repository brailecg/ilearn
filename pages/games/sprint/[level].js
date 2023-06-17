import React, { useState } from "react";

import Layout from "../../../components/Layout";
import styles from "./level.module.css";
import Image from "next/image";

const CIRCLE_DASHARRAY = 1500;

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
    <path
      fill={props.fill}
      d="M10.338 20.592c-.39-2.236-1.976-5.044-4.992-7.306-1.482-1.118-2.99-1.846-4.472-2.158v-1.092c2.938-.702 5.824-2.678 7.67-5.356.936-1.352 1.534-2.678 1.794-4.056h1.092c.442 2.626 2.47 5.538 5.226 7.488 1.352.962 2.756 1.612 4.186 1.924v1.092c-2.886.598-6.24 3.172-7.904 5.798-.832 1.326-1.326 2.548-1.508 3.666h-1.092Z"
    />
  </svg>
);

const Level = ({ gameScore = 0 }) => {
  const gameTotal = 266;
  const multiplierUnit = CIRCLE_DASHARRAY / gameTotal;

  const [score, setScore] = useState(
    CIRCLE_DASHARRAY - gameScore * multiplierUnit
  );

  return (
    <Layout>
      <div className="flex flex-col relative items-center p-6 sm:p-12 ">
        <div className="loading relative w-full max-w-lg h-[24rem] min-h-[24rem]">
          <div className="flex flex-col h-full justify-center space-y-1 sm:space-y-3">
            <div className="flex justify-center items-center space-x-4">
              <div className="flex flex-col items-center">
                <span className="heading text-base sm:text-3xl">x2</span>
                <span className=" text-font-greydark text-xs sm:text-base">
                  multiplier
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/icons/vertical.svg"
                  width="1"
                  height="12"
                  alt="vertical svg"
                  style={{ width: 1, height: 12 }}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="heading text-base sm:text-3xl">30</span>
                <span className=" text-font-greydark text-xs sm:text-base">
                  points
                </span>
              </div>
            </div>
            <div className="flex space-x-3 justify-center">
              <SvgComponent fill="#2b788b" />
              <SvgComponent fill="#C3DCE3" />
              <SvgComponent fill="#C3DCE3" />
            </div>
            <div className=" flex flex-col items-center">
              <p className="heading text-base  sm:text-4xl">negative</p>
              <p className="heading text-base sm:text-4xl text-font-cyandark">
                perdre
              </p>
            </div>
            <div className="flex justify-center space-x-2 sm:space-x-4">
              <div className=" bg-component-cyanlight text-component-cyan w-fit text-xs sm:text-md px-2 py-1 rounded-full">
                Right
              </div>
              <div className=" bg-component-pinklight text-component-pink w-fit text-xs sm:text-md px-2 py-1 rounded-full">
                Wrong
              </div>
            </div>
          </div>
          <svg
            className="absolute h-full w-full inline-block top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500">
            <circle
              className="circle-loading"
              cx="250"
              cy="250"
              r="245"
              fill="none"
              stroke="#C3DCE3"
              strokeWidth="6px"></circle>
            <circle
              className={styles.circle}
              cx="250"
              cy="250"
              r="245"
              fill="none"
              stroke="#5996A5"
              strokeWidth="6px"
              strokeLinecap="round"
              strokeDasharray={CIRCLE_DASHARRAY}
              strokeDashoffset={score}></circle>
          </svg>

          <p className=" text-font-greydark text-xs text-center mt-4">
            *You can also use the
            <span className=" text-font-greydark bg-bg-white px-2 py-1 rounded-lg">
              &larr;&rarr;
            </span>
            keys on the keyboard
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Level;
