import React, { createRef } from "react";
import ReactToPdf from "react-to-pdf";
import { Link, useLoaderData } from "react-router-dom";

const ref = createRef();

const CourseContentDetails = () => {
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [12, 12],
  };
  const courseContent = useLoaderData();

  const {
    _id,
    course_title,
    course_description,
    image_url,
    total_purchase,
    author,
  } = courseContent;

  return (
    <>
      <div
        ref={ref}
        className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
      >
        <div className="mb-10 grid max-w-xl justify-between space-y-8 sm:flex sm:space-y-0 sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <ReactToPdf
              targetRef={ref}
              filename="course_details.pdf"
              options={options}
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <Link className="rounded bg-violet-400 px-8 py-3 font-semibold text-gray-900">
                    Generate pdf
                  </Link>
                </button>
              )}
            </ReactToPdf>
          </div>
          <div>
            <Link
              to="/course-item"
              className="rounded bg-violet-400 px-8 py-3 font-semibold text-gray-900"
            >
              Back to Coursepage
            </Link>
          </div>
        </div>
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {course_title}
          </h2>
          <h4 className="mx-auto grid justify-between space-y-1 px-12 md:flex md:px-20 ">
            <p className="text-base text-gray-700 md:text-lg ">
              Created by: {author.name}
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              Total Student: {total_purchase}
            </p>
          </h4>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className=" w-full ">
            <img
              className="h-56 w-full rounded border-2 object-contain shadow-md sm:h-64 md:h-80 lg:h-96"
              src={image_url}
              alt=""
            />
          </div>
        </div>
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <p className="pt-8 text-base text-gray-700 sm:pt-10 md:text-lg">
            {course_description}
          </p>
        </div>
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <Link
            className="rounded bg-violet-400 px-8 py-3 font-semibold text-gray-900"
            to={`/checkout/${_id}`}
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseContentDetails;
