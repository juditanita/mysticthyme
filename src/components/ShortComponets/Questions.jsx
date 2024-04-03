import React, { useState } from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="  shadow-md my-8 focus:border-4  focus:border-t-pink-500 group  ">
        <div className="bg-white p-2 border-l-8 border-pink-200 ">
      <header className="flex text-wrap ">
        <button
          className="text-base sm:text-xl md:text-2xl mr-10 p-2 text-pink-800 font-bolder hover:bg-gray-200 active:bg-red-100  hover:text-pink-800  transition duration-300 ease-in-out cursor-pointer focus:outline-none "
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FaAngleUp className=" focus:outline-none hover:text-3xl "/> : <FaAngleRight className=" focus:outline-none " />}
        </button>
        <h4 className="mb-4  font-semibold text-base sm:text-base sm:text-xl hover:tracking-wide hover:leading-relaxed ">
          {title}
        </h4>
      </header>
      {showInfo && (
        <p className=" border-2 border-pink-500 rounded-md p-2 shadow-md sm:border-0 sm:shadow-none answer-faq md:w-10/12 sm:px-10 sm:mx-12 text-balance md:text-pretty text-base/loose font-light md:font-normal mt-4 mb-2 ">
          {info}
        </p>
      )}
      </div>
    </article>
  );
};

export default Question;
