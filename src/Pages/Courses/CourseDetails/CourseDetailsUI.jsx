import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CourseDetailsUI = ({ course }) => {
  const { course_title, image_url, course_description } = course;
  console.log(course);
  return (
    <div className="  sm:mx-auto sm:max-w-sm lg:max-w-full  ">
      <div className="overflow-hidden rounded bg-white  shadow-[-1px_0px_10px_2px_rgba(0,0,0,0.5)] transition-shadow duration-300">
        <div className="m-2 shadow-[0px_0px_6px_2px_rgba(0,0,0,0.3)]">
          <img
            src={image_url}
            className=" h-40 w-60 object-cover p-2 "
            alt=""
          />
        </div>
        <div className="grid border border-t-0 p-5">
          <h2 className="mb-3 inline-block text-[16px] font-bold leading-5 transition-colors duration-200">
            {course_title}
          </h2>
          <h4 className="mb-3 text-[14px] text-gray-500">
            {course_description.length > 56 ? (
              <p>{course_description.slice(0, 56) + "..."}</p>
            ) : (
              <p>{course_description}</p>
            )}
          </h4>
          <Link
            to="/"
            aria-label=""
            className="inline-flex items-center font-bold text-gray-900 transition-colors duration-200 hover:text-[#0ea5e9]"
          >
            Course Details <FaArrowRight className="pt-1 pl-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsUI;
