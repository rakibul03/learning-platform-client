import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative mx-auto flex w-[96%] flex-col-reverse py-16 lg:flex-col lg:pt-0 lg:pb-0">
      <div className="inset-y-0 top-0 right-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
        <svg
          className="absolute left-0 hidden h-full -translate-x-1/2 transform text-white lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
          src="https://bit.ly/3gL1rDE"
          alt=""
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-8">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Everything you <br className="hidden md:block" />
            can imagine{" "}
            <span className="text-deep-purple-accent-400 inline-block">
              is real
            </span>
          </h2>
          <p className="mb-5 pr-5 text-base text-gray-700 md:text-lg">
            Starting learning for free with a wide range of free online courses
            covering different subjects. Edu Online is an online learning and
            teaching marketplace with many courses.
          </p>
          <div className="flex items-center">
            <Link
              to="/course-item"
              className="btn btn-color mr-6 inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
            >
              Get Course
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center  font-semibold transition-colors duration-200 hover:text-[#0ea5e9]"
            >
              Learn more <FaAngleDoubleRight className="pt-[4px] pl-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
