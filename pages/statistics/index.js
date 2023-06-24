import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import paths from "../../paths";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Statistics = () => {
  const [forButton, setForButton] = useState("day");

  return (
    <Layout>
      <div className=" max-w-7xl mx-auto px-2 2xl:px-0">
        <div className="flex justify-center space-x-4 py-6 heading text-lg md:text-2xl min-w-fit">
          <button
            onClick={() => setForButton("day")}
            className={`transition-all ease-in-out delay-150  ${
              forButton === "day"
                ? " border-b-2 border-black opacity-100"
                : " opacity-50"
            }`}>
            For the Day
          </button>
          <button
            onClick={() => setForButton("time")}
            className={`transition-all ease-in-out delay-150 ${
              forButton === "time"
                ? "border-b-2 border-black  opacity-100"
                : " opacity-50"
            }`}>
            For all Time
          </button>
        </div>
        <div className="flex flex-col items-center md:items-stretch space-y-4 md:space-y-0 md:flex-row py-4 md:space-x-4">
          <div className=" max-w-md min-w-fit  bg-white p-2 md:p-8 space-y-4 rounded-xl">
            <div>
              <h2 className="heading text-lg md:text-2xl">
                Today's Statistics
              </h2>
              <p className=" text-font-greydark">
                Your Statisticss on all activities
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="heading text-4xl">
                  0<span className=" text-font-cyandark">+</span>
                </div>

                <p className=" text-font-greydark">words studied</p>
              </div>
              <div>
                <Image
                  src={`images/icons/vertical.svg`}
                  width={2}
                  height={50}
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="heading text-4xl">
                  0<span className=" text-font-cyandark">%</span>
                </div>

                <p className=" text-font-greydark">correct answers</p>
              </div>
            </div>

            <div className="flex">
              <Image
                src={`/images/games/sprint/game-hero-one.png`}
                width={100}
                height={150}
              />
              <div className="">
                <div className="flex flex-wrap justify-start items-center mb-2">
                  <h3 className="heading text-lg md:text-xl font-bold mr-2">
                    Sprint
                  </h3>
                  <Link
                    href={paths.speedtask}
                    className=" text-font-cyandark font-semibold bg-component-cyanlight text-xs md:text-sm px-2 sm:px-2 py-1 rounded-xl">
                    Speed Task
                  </Link>
                </div>
                <div>
                  <p className=" font-semibold text-sm">
                    0 <span className=" text-font-greydark">words studied</span>
                  </p>
                  <p className=" font-semibold text-sm">
                    0%{" "}
                    <span className=" text-font-greydark">correct answers</span>
                  </p>
                  <p className=" font-semibold text-sm">
                    0{" "}
                    <span className=" text-font-greydark">
                      best series of correct answers
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-component-greyicon h-[1px] w-full"></div>
            <div className="flex">
              <Image
                src={`/images/games/audiocall/game-audiocall.png`}
                width={100}
                height={150}
              />
              <div className="">
                <div className="flex flex-wrap justify-start items-center mb-2">
                  <h3 className="heading text-lg md:text-xl font-bold mr-2">
                    Audiocall
                  </h3>
                  <Link
                    href={paths.speedtask}
                    className=" text-font-cyandark font-semibold bg-component-cyanlight text-xs md:text-sm px-2 sm:px-2 py-1 rounded-xl">
                    Audio Task
                  </Link>
                </div>
                <div>
                  <p className=" font-semibold text-sm">
                    0 <span className=" text-font-greydark">words studied</span>
                  </p>
                  <p className=" font-semibold text-sm">
                    0%{" "}
                    <span className=" text-font-greydark">correct answers</span>
                  </p>
                  <p className=" font-semibold text-sm">
                    0{" "}
                    <span className=" text-font-greydark">
                      best series of correct answers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-md min-w-fit bg-white rounded-xl p-2 md:p-8 grow shrink md:max-w-full ">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
