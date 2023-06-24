import React, { useEffect, useRef, useState } from "react";

import {
  AcademicCapIcon,
  BookOpenIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const HeaderSettings = ({
  showWords,
  setShowWords,
  showButton,
  setShowButtons,
  changeTextbookOrDictionary,
}) => {
  const [settingBook, setSettingBook] = useState("textbook");
  const [showCheckbox, setShowCheckbox] = useState(false);
  const dropDownRef = useRef();

  const changeBook = (book) => {
    setSettingBook(book);
    changeTextbookOrDictionary(book);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setShowCheckbox(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  });

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row sm:justify-between bg-white px-2 sm:px-4 py-4 rounded-xl shadow-md">
      <div className="flex items-center space-x-4 px-2 sm:px-0">
        <button
          onClick={() => changeBook("textbook")}
          className={`flex items-center space-x-2 ${
            settingBook === "textbook" ? "" : "text-component-greyicon"
          }`}>
          <AcademicCapIcon className="w-6 h-6" />
          <p className="heading text-sm sm::text-base lg:text-xl">Textbook</p>
        </button>
        <div className=" text-component-greyicon">|</div>
        <button
          onClick={() => changeBook("dictionary")}
          className={`flex items-center space-x-2 ${
            settingBook === "dictionary" ? "" : "text-component-greyicon"
          }`}>
          <BookOpenIcon className="w-6 h-6" />
          <p className="heading text-sm sm::text-base lg:text-xl">Dictionary</p>
        </button>
      </div>
      <div className="flex items-center space-x-2 relative">
        <button className=" overflow-hidden w-24 sm:w-28 lg:w-36 flex items-center bg-component-pinklight p-2 relative justify-center rounded-xl">
          <Image
            className="absolute -left-2"
            src={"/images/home/home-shoes.svg"}
            width={36}
            height={36}
            alt="shoes image"
          />
          <p className=" font-semibold text-sm sm:text-base text-component-pinkdark">
            Sprint
          </p>
        </button>
        <button className=" overflow-hidden w-32  sm:w-36 flex items-center bg-component-cyanlight p-2 relative justify-center rounded-xl">
          <Image
            className="absolute -left-2"
            src={"/images/home/home-mic.svg"}
            width={36}
            height={36}
            alt="mic image"
          />
          <p className=" font-semibold text-sm sm:text-base text-component-cyandark">
            Audio-call
          </p>
        </button>
        <button
          ref={dropDownRef}
          onClick={() => setShowCheckbox((prev) => !prev)}
          className="p-2 rounded-xl bg-component-cyandark">
          <Cog8ToothIcon className="w-4 sm:w-6 h-4 sm:h-6" fill="white" />
        </button>
        <div
          ref={dropDownRef}
          className={`${
            showCheckbox ? "flex" : "hidden"
          } flex-col absolute py-2 right-0 -bottom-20 px-2 rounded-xl bg-white shadow-md space-y-2 z-10`}>
          <div className="flex space-x-2">
            <input
              onChange={() => setShowWords((prev) => !prev)}
              type="checkbox"
              name="showwordslist"
              id="showwordslist"
              value={false}
              className=" accent-component-cyandark appearance-none w-5 h-5 border-2 rounded-md border-solid border-component-cyandark outline-none checked:bg-component-cyandark checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.30rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-['']"
            />
            <label
              htmlFor="showwordslist"
              className={`text-sm ${
                showWords ? "text-font-black" : "text-font-greydark"
              } `}>
              Show words in a list
            </label>
          </div>
          <div className="flex space-x-2">
            <input
              onChange={() => setShowButtons((prev) => !prev)}
              type="checkbox"
              name="addremovebtn"
              id="addremovebtn"
              value={""}
              className=" accent-component-cyandark appearance-none w-5 h-5 border-2 rounded-md border-solid border-component-cyandark outline-none checked:bg-component-cyandark checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.30rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-['']"
            />
            <label
              htmlFor="addremovebtn"
              className={`text-sm ${
                showButton ? "text-font-black" : "text-font-greydark"
              } `}>
              Display the 'Add' and 'Remove' buttons
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSettings;
