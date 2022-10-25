import React from "react";
import { Outlet } from "react-router-dom";
import CourseCategoryBar from "../CourseCategoryBar/CourseCategoryBar";

const CourseItem = () => {
  return (
    <div className=" mx-auto  grid w-[96%] px-4 py-2 sm:mt-8 sm:max-w-xl sm:grid-cols-[3fr_7fr] md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <CourseCategoryBar />
      <Outlet />
    </div>
  );
};

export default CourseItem;
