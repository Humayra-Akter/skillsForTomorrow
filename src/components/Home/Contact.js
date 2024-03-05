import React from "react";
import img1 from "../../images/1.jpg";

const Contact = () => {
  return (
    <div>
      {/* Form section */}
      <div className="m-20">
        <h2 className="text-3xl text-primary text-center font-bold mb-7">
          Contact Us
        </h2>
        <div className="flex flex-col gap-12 bg-gradient-to-r from-primary to-secondary p-10 sm:flex-row items-center">
          <div className="rounded-lg overflow-hidden mb-4 sm:mb-0">
            <img src={img1} alt="Contact Image" className="w-full h-auto" />
          </div>
          <div className="w-full sm:w-3/4">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md py-2 px-4 bg-gray-100"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="question" className="block text-lg mb-2">
                  Your Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows="4"
                  className="w-full rounded-md py-2 px-4 bg-gray-100"
                  placeholder="Enter your question here"
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-primary w-40 font-bold text-white py-2 px-4 uppercase rounded-md hover:bg-secondary hover:text-black transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
