import React from "react";
import Layout from "../../components/Layout";
import BookSectionItem from "./BookSectionItem";
import Pagination from "./Pagination";

const BookSection = ({ showWords, showButton }) => {
  return (
    <>
      <div
        className={`${
          showWords
            ? "grid gap-x-1 gap-y-4 grid-cols-3 w-full mx-auto"
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
  );
};

export default BookSection;
