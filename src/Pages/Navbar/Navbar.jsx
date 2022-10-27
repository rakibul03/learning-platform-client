import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import avatarImg from "../../assets/avatar.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogut = () => {
    logOut()
      .then(toast.warning("Log Out"))
      .catch((error) => toast(error));
  };

  return (
    <div className="sticky top-0 z-10 bg-gray-500 py-1 sm:shadow-lg">
      <div className="mx-auto w-[96%] px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative grid grid-cols-2 items-center lg:grid-cols-3">
          <ul className="hidden items-center space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                aria-label="Our courses"
                title="Our courses"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-[#0ea5e9]"
                    : "font-medium text-gray-100"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-item"
                aria-label="Our courses"
                title="Our courses"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-[#0ea5e9]"
                    : "font-medium text-gray-100"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="faq"
                title="faq"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-[#0ea5e9]"
                    : "font-medium text-gray-100"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="blog"
                title="blog"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-[#0ea5e9]"
                    : "font-medium text-gray-100"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="inline-flex items-center lg:mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="text-teal-accent-400 w-8"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
            <span className="ml-2 text-sm font-bold uppercase tracking-wide text-gray-100 md:text-xl">
              Edu Online
            </span>
          </Link>
          <ul className="ml-auto hidden items-center space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <img
                  alt=""
                  aria-label={user?.displayName}
                  title={user?.displayName}
                  className="h-8 w-8 rounded-md shadow-[-1px_0px_10px_2px_rgba(0,0,0,0.5)] ring-2 ring-violet-400 ring-offset-4 ring-offset-gray-800 dark:bg-gray-500"
                  src={user?.photoURL ? user.photoURL : avatarImg}
                />
                <li>
                  <Link
                    onClick={handleLogut}
                    className="btn btn-color hover:btn-color focus:shadow-outline  inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white  shadow-lg transition duration-200 focus:outline-none"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="btn btn-color hover:btn-color  focus:shadow-outline inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="btn btn-color hover:btn-color  focus:shadow-outline inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}

            {/* Toogle dark mode */}
            <li>
              <label
                htmlFor="Toggle1"
                className="inline-flex cursor-pointer items-center space-x-4 text-gray-100"
              >
                <span className="relative">
                  <input
                    onClick={() => setIsDark(!isDark)}
                    id="Toggle1"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <div className="h-6 w-10 rounded-full bg-gray-400 shadow-inner peer-checked:bg-violet-400"></div>
                  <div className="absolute inset-y-0 left-0 m-1 h-4 w-4 rounded-full bg-gray-800 shadow peer-checked:right-0 peer-checked:left-auto"></div>
                </span>
                <p>
                  {isDark ? (
                    <span className="text-sm">Dark</span>
                  ) : (
                    <span className="text-sm">Light</span>
                  )}
                </p>
              </label>
            </li>
          </ul>
          <div className="ml-auto lg:hidden">
            <ul className="flex items-center">
              {/* Toogle dark mode */}
              <li className="pr-4">
                <label
                  htmlFor="Toggle1"
                  className="inline-flex cursor-pointer items-center space-x-[4px] text-gray-100"
                >
                  <p className="mb-[2px]">
                    {isDark ? (
                      <span className="text-sm">Dark</span>
                    ) : (
                      <span className="text-sm">Light</span>
                    )}
                  </p>
                  <span className="relative">
                    <input
                      onClick={() => setIsDark(!isDark)}
                      id="Toggle1"
                      type="checkbox"
                      className="peer hidden"
                    />
                    <div className="h-6 w-10 rounded-full bg-gray-400 shadow-inner peer-checked:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 m-1 h-4 w-4 rounded-full bg-gray-800 shadow peer-checked:right-0 peer-checked:left-auto"></div>
                  </span>
                </label>
              </li>
              <li>
                <button
                  className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
              </li>
            </ul>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="rounded border bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <a href="/" className="inline-flex items-center">
                        <svg
                          className="text-deep-purple-accent-400 w-8"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                          Edu Online
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        className="focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium text-[#0ea5e9]"
                              : "hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/course-item"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium text-[#0ea5e9]"
                              : "hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                          }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium text-[#0ea5e9]"
                              : "hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                          }
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium text-[#0ea5e9]"
                              : "hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      {user?.email ? (
                        <div className="flex items-center justify-center gap-6">
                          <img
                            alt=""
                            aria-label={user?.displayName}
                            title={user?.displayName}
                            className="h-8 w-8 rounded-md ring-2 ring-violet-400 ring-offset-4 ring-offset-gray-800 dark:bg-gray-500"
                            src={user?.photoURL ? user.photoURL : avatarImg}
                          />
                          <li>
                            <Link
                              onClick={handleLogut}
                              className="btn btn-color hover:btn-color  focus:shadow-outline inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                            >
                              Logout
                            </Link>
                          </li>
                        </div>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/signin"
                              className="btn btn-color hover:btn-color bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-black shadow-md transition duration-200 focus:outline-none"
                            >
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signup"
                              className="btn btn-color hover:btn-color bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-black shadow-md transition duration-200 focus:outline-none"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
