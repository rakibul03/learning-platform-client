import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import avatarImg from "../../assets/avatar.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogut = () => {
    logOut()
      .then(toast.warning("Log Out"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#5DA7DB]">
      <div className="w-85 sticky mx-auto px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative grid grid-cols-2 items-center lg:grid-cols-3">
          <ul className="hidden items-center space-x-8 lg:flex">
            <li>
              <Link
                to="/course-item"
                aria-label="Our courses"
                title="Our courses"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="faq"
                title="faq"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="blog"
                title="blog"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-auto"
          >
            <svg
              className="text-teal-accent-400 w-8"
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
            <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-100">
              Edu Online
            </span>
          </Link>
          <ul className="ml-auto hidden items-center space-x-8 lg:flex">
            {user?.email ? (
              <>
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
                    aria-label="Logout"
                    title="Logout"
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
                    aria-label="Sign in"
                    title="Sign in"
                    className="btn btn-color hover:btn-color  focus:shadow-outline inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="btn btn-color hover:btn-color  focus:shadow-outline inline-flex h-10 items-center justify-center rounded px-5 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="rounded border bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
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
                        aria-label="Close Menu"
                        title="Close Menu"
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
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/signin"
                          aria-label="Sign in"
                          title="Sign in"
                          className="btn btn-color hover:btn-color bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-black shadow-md transition duration-200 focus:outline-none"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signup"
                          className="btn btn-color hover:btn-color bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-black shadow-md transition duration-200 focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
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
