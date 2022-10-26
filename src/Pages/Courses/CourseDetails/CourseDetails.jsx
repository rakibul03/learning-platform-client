import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetailsUI from "./CourseDetailsUI";

const CourseDetails = () => {
  const allCourse = useLoaderData();

  return (
    <div className="mx-auto grid gap-8 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:grid-cols-3 lg:px-8 lg:py-20 ">
      {allCourse.map((course) => (
        <CourseDetailsUI key={course._id} course={course}></CourseDetailsUI>
      ))}
    </div>
    // <section className="my-10 rounded-lg p-4 text-gray-100 shadow-md md:h-72 lg:p-4">
    //   <div className="container mx-auto space-y-12  ">
    //     <div className="grid grid-cols-1 rounded-lg shadow-sm md:flex md:flex-col lg:flex-row">
    //       <img
    //         src="https://source.unsplash.com/640x480/?1"
    //         alt=""
    //         className="bg-gray-500 md:h-64 md:w-[40%]"
    //       />
    //       <div className="flex flex-1 flex-col justify-center bg-gray-900 p-6">
    //         <span className="text-xs uppercase text-gray-400">
    //           Join, it's free
    //         </span>
    //         <h3 className="text-3xl font-bold">
    //           We're not reinventing the wheel
    //         </h3>
    //         <p className="my-6 text-gray-400">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    //           aliquam possimus quas, error esse quos.
    //         </p>
    //         <button type="button" className="self-start">
    //           Action
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default CourseDetails;
