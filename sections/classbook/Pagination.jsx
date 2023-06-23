import React, { useMemo, useState, useEffect } from "react";

const SvgComponentArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}>
    <path
      fill="#5996A5"
      d="M3.44 10 .48 5.48 3.44.96h2.7L3.42 5.48 6.14 10h-2.7Zm-.6-3.42V4.4H10v2.18H2.84Z"
    />
  </svg>
);

const SvgComponentArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={11}
    fill="none"
    {...props}>
    <path
      fill="#5996A5"
      d="m6.56.98 2.96 4.5-2.96 4.54h-2.7l2.72-4.54L3.86.98h2.7Zm.6 3.42v2.18H0V4.4h7.16Z"
    />
  </svg>
);
const DOTS = "...";
const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalCount = 98, siblingCount = 1, pageSize = 4 } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const onPageChange = (page) => setCurrentPage(page);
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (isFirstPage) => {
    if (!isFirstPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = (isLastPage) => {
    if (!isLastPage) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex space-x-3 justify-center py-4">
      <li
        onClick={() => onPrevious(currentPage === 1)}
        className={`flex justify-center items-center  border-2 border-component-cyan rounded-full w-8 h-8 ${
          currentPage === 1 ? " cursor-default" : "cursor-pointer"
        }`}>
        <SvgComponentArrowLeft />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={`flex justify-center  items-center border-2 border-component-cyan rounded-full w-8 h-8 text-xs font-semibold  ${
              currentPage === pageNumber
                ? "text-white bg-component-cyan cursor-default"
                : " bg-white text-component-cyan cursor-pointer"
            }`}>
            {pageNumber}
          </li>
        );
      })}

      <li
        onClick={() => onNext(currentPage === lastPage)}
        className={`flex justify-center items-center cursor-pointer border-2 border-component-cyan rounded-full w-8 h-8 ${
          currentPage === lastPage ? " cursor-default" : "cursor-pointer"
        }`}>
        <SvgComponentArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;

const range = (start, end) => {
  let length = end - start + 1;
  /*
    Create an array of certain length and set the elements within it from
    start value to end value.
    */
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
          Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
          Case 2: No left dots to show, but rights dots to be shown
      */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
          Case 3: No right dots to show, but left dots to be shown
      */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
          Case 4: Both left and right dots to be shown
      */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
