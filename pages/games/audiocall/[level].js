import React, { useState } from "react";
//import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const SvgIconNoteLg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={51} {...props}>
    <path d="M38.961 3.048a3 3 0 0 0-3.855-2.37l-21 6.56A3 3 0 0 0 12 10.105V34.5a7.5 7.5 0 1 0 3 6V19.104l21-6.564v8.529c1.029.09 2.034.279 3 .552V3.54c0-.168-.015-.33-.039-.492ZM48 37.5a13.5 13.5 0 1 1-27 0 13.5 13.5 0 0 1 27 0Zm-6.789-1.305-8.982-4.95a1.5 1.5 0 0 0-2.226 1.31v9.9a1.5 1.5 0 0 0 2.226 1.315l8.982-4.95a1.5 1.5 0 0 0 0-2.625Z" />
  </svg>
);

const SvgIconHeart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={24} fill="none">
    <path
      {...props}
      d="M19.112.608a6.29 6.29 0 0 1 3.104.8c.981.512 1.77 1.29 2.368 2.336.597 1.045.896 2.304.896 3.776 0 1.941-.48 3.925-1.44 5.952-.939 2.027-2.347 3.936-4.224 5.728-1.877 1.77-4.139 3.264-6.784 4.48-2.667-1.216-4.939-2.71-6.816-4.48-1.877-1.77-3.296-3.659-4.256-5.664C1.021 11.531.552 9.546.552 7.584c0-1.493.299-2.763.896-3.808s1.387-1.835 2.368-2.368a6.47 6.47 0 0 1 3.136-.8c1.365 0 2.57.459 3.616 1.376 1.067.896 1.888 2.144 2.464 3.744.555-1.6 1.365-2.848 2.432-3.744 1.088-.917 2.304-1.376 3.648-1.376Z"
    />
  </svg>
);

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating flex space-x-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <SvgIconHeart
              fill={index <= (hover || rating) ? "#A95151" : "#F2D4DC"}
            />
          </button>
        );
      })}
    </div>
  );
};

const AudioCallButtonsSection = () => {
  const [btnHighlight, setBtnHighlight] = useState(0);
  const buttonTextList = [
    { id: 1, text: "pret hypothecaire" },
    { id: 2, text: "correct" },
    { id: 3, text: "selon laquelle" },
    { id: 4, text: "citer" },
    { id: 5, text: "nourriture" },
  ];

  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
      {buttonTextList.map((btn) => {
        return (
          <button
            onClick={() => setBtnHighlight(btn.id)}
            key={btn.id}
            className={`border-2 ${
              btnHighlight === btn.id
                ? "border-component-greydark text-component-greydark"
                : "border-component-greyicon text-component-greyicon "
            } rounded-full text-sm md:text-base  py-2 px-2 md:px-4`}>
            {btn.text}
          </button>
        );
      })}
    </div>
  );
};
const AudioCallLevel = () => {
  //const router = useRouter(); // get values from the url or the route
  const [iconColor, setIconColor] = useState(true);

  return (
    <Layout>
      <div className="py-8 flex flex-col space-y-4 items-center justify-center ">
        <button
          onClick={() => setIconColor((prev) => !prev)}
          className={`flex flex-col items-center justify-center border-4 ${
            iconColor ? "bg-white" : "bg-component-cyandark"
          } border-component-cyandark rounded-full w-36 h-36 min-w-fit min-h-fit`}>
          <SvgIconNoteLg fill={iconColor ? "#2B788B" : "white"} />
          <p
            className={`text-center ${
              iconColor ? "text-font-cyandark" : "text-white"
            }  font-semibold`}>
            Play
          </p>
        </button>

        <StarRating />
        <AudioCallButtonsSection />
        <button className=" bg-component-cyanlight text-font-cyandark py-2 px-4 rounded-full font-semibold">
          I don't know
        </button>
      </div>
    </Layout>
  );
};

export default AudioCallLevel;
