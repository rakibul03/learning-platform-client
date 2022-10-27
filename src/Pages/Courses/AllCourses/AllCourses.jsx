import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourseUI from "./AllCourseUI";

const AllCourses = () => {
  const allCourse = useLoaderData();
  return (
    <div className="mx-auto grid gap-8 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:grid-cols-3 lg:px-8 lg:py-20 ">
      {allCourse.map((course) => (
        <AllCourseUI key={course._id} course={course}></AllCourseUI>
      ))}
    </div>
  );
};

export default AllCourses;
