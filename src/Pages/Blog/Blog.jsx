import React from "react";

const Blog = () => {
  return (
    <>
      {/*Cors */}
      <div className=" pt-8 text-gray-100">
        <div className="container mx-auto max-w-4xl rounded-lg bg-gray-900 px-10 py-6  shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Jun 1, 2020</span>
            <p className="rounded bg-violet-400 px-2 py-1 font-bold text-gray-900">
              Cors
            </p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold ">What is Cors?</p>
            <p className="mt-2">
              “CORS” stands for Cross-Origin Resource Sharing. CORS is a
              protocol and security standard for browsers that helps to maintain
              the integrity of a website and secure it from unauthorized access.
              It enables JavaScripts running in browsers to connect to APIs and
              other web resources like fonts, and stylesheets from multiple
              different providers.
            </p>
          </div>
        </div>
      </div>

      {/* Firebase Authentication? */}
      <div className=" pt-8 text-gray-100">
        <div className="container mx-auto max-w-4xl rounded-lg bg-gray-900 px-10 py-6  shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Apr 3, 2021</span>
            <p className="rounded bg-violet-400 px-2 py-1 font-bold text-gray-900">
              Firebase Auth
            </p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold ">
              Why we use firebase authentication?
            </p>
            <p className="mt-2">
              We use Firebase Authentication that allow users to sign in to our
              app using one or more sign-in methods, including email address and
              password sign-in, and federated identity providers such as Google
              Sign-in and Github Login.
            </p>
          </div>
        </div>
      </div>

      {/* Other Auth Option */}
      <div className=" pt-8 text-gray-100">
        <div className="container mx-auto max-w-4xl rounded-lg bg-gray-900 px-10 py-6  shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Aug 3, 2021</span>
            <p className="rounded bg-violet-400 px-2 py-1 font-bold text-gray-900">
              Other Auth option
            </p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold ">
              What other options do you have to implement authentication?
            </p>
            <p className="mt-2">
              Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
              alternatives and competitors to Firebase Authentication.
            </p>
          </div>
        </div>
      </div>

      {/* Private Route */}
      <div className=" pt-8 text-gray-100">
        <div className="container mx-auto max-w-4xl rounded-lg bg-gray-900 px-10 py-6  shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Oct 10, 2021</span>
            <p className="rounded bg-violet-400 px-2 py-1 font-bold text-gray-900">
              Private Route
            </p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold ">
              How does the private route work?
            </p>
            <p className="mt-2">
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
        </div>
      </div>

      {/* Explain Node */}
      <div className=" pt-8 text-gray-100">
        <div className="container mx-auto max-w-4xl rounded-lg bg-gray-900 px-10 py-6  shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Nov 3, 2021</span>
            <p className="rounded bg-violet-400 px-2 py-1 font-bold text-gray-900">
              Node
            </p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold ">Explain Node.</p>
            <p className="mt-2">
              <strong>What is Node JS?</strong>
              <br />
              Node.js came into existence when the original developers of
              JavaScript extended it from something you could only run in the
              browser to something you could run on your machine as a standalone
              application.
            </p>

            <p className="mt-2">
              <strong>How does Node work?</strong>
              <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
