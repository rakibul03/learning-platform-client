import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = () => {
  const checkoutItem = useLoaderData();
  const { course_title, image_url, author, price } = checkoutItem;

  return (
    <div className="mx-auto mt-14 max-w-3xl flex-col space-y-4 rounded-md bg-gray-900 p-5 text-gray-100 sm:p-10 md:flex">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className=" flex flex-col divide-y divide-gray-700">
        <li className="flex-col py-6 sm:flex-row sm:justify-between md:flex">
          <div className="grid w-full space-x-2 sm:flex sm:space-x-4">
            <div>
              <img
                className="h-48 w-96 flex-shrink-0 rounded border-transparent bg-gray-500  object-cover outline-none sm:h-32 sm:w-32"
                src={image_url}
                alt="Set of travel chargers"
              />
            </div>
            <div className="flex w-full flex-col justify-between pb-4 pr-2 pt-2">
              <div className="flex w-full justify-between  pb-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {course_title}
                  </h3>
                  <p className="text-sm text-gray-400">Author: {author.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">Price: {price} $</p>
                </div>
              </div>
              <div className="flex justify-between divide-x text-sm sm:justify-start">
                <button
                  type="button"
                  className="flex items-center space-x-1 px-2 py-1 pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-1 px-2 py-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Add to favorites</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount: <span className="font-semibold">{price} $</span>
        </p>
        <p className="text-sm text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-violet-400 px-6 py-2"
        >
          <span>
            <Link to="/course-item">Back to Courses</Link>
          </span>
        </button>
        <button
          type="button"
          className="rounded-md border border-violet-400 bg-violet-400 px-6 py-2 text-gray-900"
        >
          <span onClick={() => toast.success("Congratulation")}>
            Continue to Checkout
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
