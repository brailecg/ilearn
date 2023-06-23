import React from "react";
import Layout from "../../components/Layout";
import BookSectionItem from "./BookSectionItem";
import Pagination from "./Pagination";
import DictionarySectionItem from "./DictionarySectionItem";

const BookSection = ({ book, showWords, showButton }) => {
  return (
    <>
      {book === "textbook" ? (
        <>
          <div
            className={`${
              showWords
                ? "grid  grid-cols-1 justify-items-center w-full mx-auto  gap-x-1 gap-y-4 md:grid-cols-2  lg:grid-cols-3"
                : "flex flex-col justify-center  mx-auto space-y-4"
            } max-w-5xl `}>
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
            <BookSectionItem showWords={showWords} showButton={showButton} />
          </div>
          <div>
            <Pagination />
          </div>
        </>
      ) : (
        <div>
          <DictionarySectionItem />
        </div>
      )}
    </>
  );
};

export default BookSection;
