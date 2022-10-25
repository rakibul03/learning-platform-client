import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseCategoryBar = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-server-one.vercel.app/course_category")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <div>
      <h1>Total course: {courseCategories.length}</h1>
      {courseCategories.map((courseCategory) => (
        <p key={courseCategory.id}>
          <Link to={`/course-item/${courseCategory.id}`}>
            {/* <Link to="/course-item/course-details"> */}
            {courseCategory.course_category}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CourseCategoryBar;
