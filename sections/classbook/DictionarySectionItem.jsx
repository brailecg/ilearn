import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import paths from "../../paths";

const DictionarySectionItem = () => {
  const [level, setLevel] = useState("");
  return (
    <div className="flex flex-col items-center sm:items-start sm:flex-row mx-2 sm:mx-8 lg:mx-auto max-w-5xl  bg-bg-white my-8 py-4 sm:py-0 rounded-3xl relative">
      <div className="hidden sm:flex sm:w-1/3">
        <Image
          src="/images/textbook/dictionary-one.png"
          width={200}
          height={200}
          className="w-full h-auto md:py-12 md:px-8"
          alt="sprint image"
        />
      </div>

      <div className="w-full sm:w-2/3 my-auto">
        <div className="flex justify-center sm:justify-start items-center space-x-4">
          <h3 className="heading text-xl md:text-4xl font-bold">
            No words in this section yet
          </h3>
        </div>
        <p className="text-center px-2 sm:px-0 text-xs sm:text-base sm:text-left text-font-greydark mt-4 mb-8 max-w-lg mx-auto sm:mx-0">
          To save difficult words for further study, go to the textbook and
          select 'add to dictionary'
        </p>
        <div className=""></div>

        <div className="flex justify-center sm:justify-start">
          <Link
            disabled
            href={`${paths.classbook}/${level.toLocaleLowerCase()}`}
            className="p-2 sm:p-3 md:p-4 bg-component-cyan rounded-full text-white font-semibold">
            To Textbook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DictionarySectionItem;
