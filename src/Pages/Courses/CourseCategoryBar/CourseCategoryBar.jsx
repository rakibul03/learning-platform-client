import React, { useEffect, useState } from "react";
import CourseCategoryPanel from "./CourseCategoryPanel";

const CourseCategoryBar = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-server-one.vercel.app/course_category")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <div className=" mx-auto mt-10 h-[460px] w-72 rounded-lg bg-gray-500 px-5 pt-5 text-gray-100 shadow-[-1px_0px_10px_2px_rgba(0,0,0,0.5)] sm:sticky sm:top-24 sm:mx-0 sm:mt-0">
      {courseCategories.map((courseCategory) => (
        <CourseCategoryPanel
          key={courseCategory.id}
          courseCategory={courseCategory}
        ></CourseCategoryPanel>
      ))}
    </div>
  );
};

export default CourseCategoryBar;
