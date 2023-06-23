import React, { useState } from "react";

import Layout from "../../components/Layout";
import HeaderSettings from "../../sections/classbook/HeaderSettings";
import HeaderLevel from "../../sections/classbook/HeaderLevel";
import BookSection from "../../sections/classbook/BookSection";

const Classbook = () => {
  const [showWords, setShowWords] = useState(false);
  const [showButton, setShowButtons] = useState(false);

  const [book, setBook] = useState("textbook");

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
        <HeaderSettings
          showButton={showButton}
          setShowButtons={setShowButtons}
          showWords={showWords}
          setShowWords={setShowWords}
          changeTextbookOrDictionary={setBook}
        />
        <HeaderLevel />
        <BookSection
          book={book}
          showWords={showWords}
          showButton={showButton}
        />
      </div>
    </Layout>
  );
};

export default Classbook;
