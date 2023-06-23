import Image from "next/image";
import React from "react";

import { SvgIconNote } from "../../pages/games/audiocall/tasks";

const BookSectionItem = ({ showWords, showButton }) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-md">
      <Image
        className="-z-1 mx-auto"
        src={"/images/textbook/book-one.png"}
        width={300}
        height={100}
        alt="book one"
      />
      <div className="p-8 grow bg-white space-y-2">
        <div className="flex justify-between">
          <div className="flex heading text-3xl space-x-2">
            <h2>remark </h2>
            <p>/</p>
            <h2 className=" text-component-greydark">note</h2>
          </div>
          <div className=" bg-component-greylight p-2 rounded-lg">
            <SvgIconNote width={20} height={20} fill="#757575" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p>[rimɑ́ːrk]</p>
          <button
            type="button"
            className=" bg-component-red px-2 py-1 text-white rounded-lg">
            compound
          </button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            et.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            voluptate.
          </p>
        </div>
        <div className="border"></div>
        <div className=" text-font-greydark">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            et.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            voluptate.
          </p>
        </div>
        <div
          className={`${
            showButton ? "flex" : "hidden"
          }  space-x-0 space-y-2 flex-col md:space-y-0 md:flex-row md:space-x-2`}>
          <button
            className={`${
              true
                ? " bg-[#c1d7c5] text-component-green"
                : "bg-component-green text-white"
            } px-3 py-2 rounded-full font-semibold`}>
            Remove from learned
          </button>
          <button
            className={`${
              true
                ? " bg-[#ecc4bb] text-component-orange"
                : " bg-component-orange text-white"
            } px-3 py-2 rounded-full font-semibold`}>
            Add to dictionary
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSectionItem;
