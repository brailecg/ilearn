import React from "react";
import Layout from "../../components/Layout";
import BookSectionItem from "./BookSectionItem";
import Pagination from "./Pagination";

const BookSection = ({ showWords, showButton }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto space-y-4">
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
