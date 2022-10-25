import React from "react";
import { Outlet } from "react-router-dom";
import CourseCategoryBar from "../CourseCategoryBar/CourseCategoryBar";

const CourseItem = () => {
  return (
    <div className="grid grid-cols-2">
      <CourseCategoryBar />
      <Outlet />
    </div>
  );
};

export default CourseItem;
