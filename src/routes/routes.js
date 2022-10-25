import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import CourseItem from "../Pages/Courses/CourseItem/CourseItem";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/course-item",
        element: <CourseItem />,
        children: [
          {
            path: "/course-item/course-details/:id",
            element: <CourseDetails />,
          },
        ],
      },
    ],
  },
]);
