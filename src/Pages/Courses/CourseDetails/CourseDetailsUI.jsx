import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";

const CourseDetailsUI = ({ course }) => {
  const { _id, course_title, image_url, course_description, price } = course;
  return (
    <div className="  sm:mx-auto sm:max-w-sm lg:max-w-full  ">
      <div className="overflow-hidden rounded bg-white  shadow-[-1px_0px_10px_2px_rgba(0,0,0,0.5)] transition-shadow duration-300">
        <div className="m-2 shadow-[0px_0px_6px_2px_rgba(0,0,0,0.3)]">
          <img
            src={image_url}
            className=" h-40 w-80 object-fill p-2 sm:h-40 sm:w-60 sm:object-contain "
            alt=""
          />
        </div>
        <div className="grid border border-t-0 p-5">
          <h2 className="mb-3 inline-block text-[16px] font-bold leading-5 transition-colors duration-200">
            {course_title}
          </h2>
          <h4 className="mb-3 text-[14px] text-gray-500">
            {course_description.length > 45 ? (
              <p>{course_description.slice(0, 45) + "..."}</p>
            ) : (
              <p>{course_description}</p>
            )}
          </h4>
          <div className="flex justify-between">
            <div>
              <Link
                to={`/course-content/${_id}`}
                aria-label=""
                className="inline-flex items-center font-bold text-gray-900 transition-colors duration-200 hover:text-[#a78bfa]"
              >
                Course Details <FaArrowRight className="pt-1 pl-1" />
              </Link>
            </div>
            <div className="mt-1 inline-flex items-center text-[12px] font-bold text-gray-500 transition-colors duration-200">
              <FaDollarSign />
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsUI;
