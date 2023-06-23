import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const levelsList = [
  {
    id: 1,
    text: "A1",
    level: "Easy",
    bg: " bg-component-green",
  },
  {
    id: 2,
    text: "A2",
    level: "Easy",
    bg: " bg-component-green",
  },
  {
    id: 3,
    text: "B1",
    level: "Medium",
    bg: "bg-component-yellow",
  },
  {
    id: 4,
    text: "B2",
    level: "Medium",
    bg: "bg-component-yellow",
  },
  {
    id: 5,
    text: "C1",
    level: "Hard",
    bg: "bg-component-orange",
  },
  {
    id: 6,
    text: "C2",
    level: "Hard",
    bg: "bg-component-orange",
  },
];

const HeaderLevel = () => {
  const [selectedLvl, setSelectedLvl] = useState(1);
  return (
    <div className="max-w-5xl mx-auto py-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}>
        {levelsList.map((lvl) => {
          return (
            <SwiperSlide key={lvl.id} className=" !mx-auto">
              <button
                onClick={() => setSelectedLvl(lvl.id)}
                className={`${
                  selectedLvl === lvl.id ? "opacity-100" : "opacity-50"
                }  !w-full space-x-2 flex items-center justify-center `}>
                <span className="heading font-semibold text-base sm:text-xl">
                  {lvl.text}
                </span>
                <span className={`text-white p-1 rounded-lg ${lvl.bg}`}>
                  {lvl.level}
                </span>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderLevel;
