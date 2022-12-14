import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import CourseItem from "../Pages/Courses/CourseItem/CourseItem";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CourseContentDetails from "../Pages/Courses/CourseDetails/CourseContentDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoutes from "./PrivateRoutes";
import AllCourses from "../Pages/Courses/AllCourses/AllCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
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
            path: "/course-item",
            loader: () =>
              fetch(`https://learning-platform-server-one.vercel.app/`),
            element: <AllCourses />,
          },
          {
            path: "/course-item/course-details/:id",
            loader: ({ params }) =>
              fetch(
                `https://learning-platform-server-one.vercel.app/course-item/course-details/${params.id}`
              ),
            element: <CourseDetails />,
          },
        ],
      },
      {
        path: "/course-content/:id",
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-server-one.vercel.app/course-content/${params.id}`
          ),
        element: <CourseContentDetails />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-server-one.vercel.app/course-content/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
