import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, signInWithGithu } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Sign up using pass and mail
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const profilePhoto = event.target.profilePhoto.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration Completed Please Signin");

        // Update user name and user profile image
        updateUserProfile(name, profilePhoto)
          .then()
          .catch((error) => {
            toast.error(error.message);
          });
        event.target.reset();
        navigate("/signin");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Sign in with Google
  const handlGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/signin");
        toast.success(`SignUp Successful ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // Github sign in
  const handlGithubSignUp = () => {
    signInWithGithu()
      .then((result) => {
        const user = result.user;
        toast.success(`SignUp Successful ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="my-5 mx-auto w-80 max-w-md rounded-md bg-gray-700 p-4 text-gray-100 shadow sm:p-8 md:w-full">
      <h2 className="mb-3 text-center text-3xl font-semibold">Signup</h2>
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-gray-200 hover:underline focus:underline"
        >
          Sign in
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          onClick={handlGoogleSignUp}
          aria-label="Login with Google"
          type="button"
          className="flex w-full items-center justify-center space-x-4 rounded-md border border-gray-400 p-4 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-5 w-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Signup with Google</p>
        </button>
        <button
          onClick={handlGithubSignUp}
          aria-label="Login with GitHub"
          type="button"
          className="flex w-full items-center justify-center space-x-4 rounded-md border border-gray-400 p-4 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-5 w-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
          <p>Signup with GitHub</p>
        </button>
      </div>
      <div className="my-4 flex w-full items-center">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="ng-untouched ng-pristine ng-valid space-y-8"
        data-bitwarden-watching="1"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Captain America"
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 focus:border-violet-400"
              data-temp-mail-org="2"
              autoComplete="off"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="profilePhoto" className="block text-sm">
              Photo Url
            </label>
            <input
              type="url"
              name="profilePhoto"
              id="profilePhoto"
              placeholder="Profile Image link"
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 focus:border-violet-400"
              data-temp-mail-org="2"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="avengers@marvel.com"
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 focus:border-violet-400"
              data-temp-mail-org="2"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link to="#" className="text-xs text-gray-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-violet-400 px-8 py-3 font-semibold text-gray-900"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
