import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const Button = ({ isButton = true, text, arrowImageShow = false }) => {
  return (
    <>
      {isButton ? (
        <button className="flex  items-center space-x-1  text-font-cyandark font-semibold bg-component-cyanlight px-4 py-2 rounded-full">
          <span>{text}</span>
          {arrowImageShow ? (
            <ArrowSmallRightIcon className=" h-4 w-4" />
          ) : (
            <></>
          )}
        </button>
      ) : (
        <Link
          href="/"
          className="flex  items-center space-x-1  text-font-cyandark font-semibold bg-component-cyanlight px-4 py-2 rounded-full">
          <span>{text}</span>
          {arrowImageShow ? (
            <ArrowSmallRightIcon className=" h-4 w-4" />
          ) : (
            <></>
          )}
        </Link>
      )}
    </>
  );
};

export default Button;
