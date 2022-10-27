import React from "react";
import { Link, NavLink } from "react-router-dom";

const CourseCategoryPanel = ({ courseCategory }) => {
  const { id, course_category } = courseCategory;

  return (
    <div>
      <ul className="pt-2 pb-2 text-sm">
        <li className="flex items-center  rounded-md bg-gray-700 p-3 text-gray-50">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#a78bfa]" : "text-gray-50"
            }
            to={`/course-item/course-details/${id}`}
          >
            <button>{course_category}</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CourseCategoryPanel;
