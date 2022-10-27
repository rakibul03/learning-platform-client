import React from "react";

const FAQ = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col justify-center p-4 md:p-8">
        <h2 className="mb-12 text-center text-4xl font-bold leading-none sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          <details>
            <summary className="cursor-pointer py-2 outline-none">
              Q. Who should take an Online Course?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Students join our online courses for a variety of reasons and
                come from diverse backgrounds, professions, and age groups. With
                online courses, you can Advance your skill-set or begin a career
                change. Take the next step in your formal education. Ease the
                transition before entering a full-time academic program. Enjoy
                learning a new topic.
              </p>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer py-2 outline-none ">
              Q. Are there prerequisites or language requirements?
            </summary>
            <div className="px-4 pb-4">
              <p>
                There are no prerequisites. Our courses are open to students of
                all backgrounds who are 18 years of age and older. All courses
                are conducted in English.
              </p>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer py-2 outline-none ">
              Q. Can I take more than one course at a time?
            </summary>
            <div className="space-y-2 px-4 pb-4">
              <p>
                If you are new to online learning, we recommend that you begin
                with one course. As our courses are offered frequently
                throughout the year, you can always come back and continue your
                studies with one or more topics.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
