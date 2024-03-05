import React from "react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center text-primary font-bold mb-8">
          About Us
        </h1>
        {/* Large text section */}
        <div className="text-lg text-justify mx-28 mb-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
            massa pellentesque vulputate. Integer nec urna gravida, sollicitudin
            enim vel, faucibus purus. Vivamus suscipit tellus felis, a dictum
            dolor tincidunt eget. Curabitur ac urna non justo malesuada
            volutpat. Sed dignissim libero ut nisl condimentum, a suscipit lacus
            scelerisque. Nam fermentum, risus id fermentum varius, ligula velit
            convallis odio, at lobortis purus urna vitae mi. Nulla efficitur
            urna id neque finibus, ac congue lorem interdum. Sed suscipit, justo
            at rutrum venenatis, ex nunc fringilla ligula, nec bibendum felis
            nunc at ipsum.
          </p>
        </div>
        {/* Image and text rows */}
        <div className="grid grid-cols-1 mx-16 p-10 gap-8">
          {/* First row */}
          <div
            data-aos="fade-right"
            className="grid bg-pink-200 h-80 p-10 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg overflow-hidden items-center justify-center flex sm:mb-0">
              <img src={img1} alt="Image 1" className="h-auto w-96" />
            </div>
            <div className="text-justify items-center justify-center ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
                massa pellentesque vulputate. Integer nec urna gravida,
                sollicitudin enim vel, faucibus purus. Vivamus suscipit tellus
                felis, a dictum dolor tincidunt eget. Curabitur ac purus urna
                vitae mi. Nulla efficitur urna id neque finibus, ac congue lorem
                interdum. Sed suscipit, justo at rutrum venenatis, ex nunc
                fringilla ligula, nec bibendum felis nunc at ipsum.
              </p>
            </div>
          </div>
          {/* Second row */}
          <div
            data-aos="fade-left"
            className="grid bg-green-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
                massa pellentesque vulputate. Integer nec urna gravida,
                sollicitudin enim vel, faucibus purus. Vivamus suscipit tellus
                felis, a dictum dolor tincidunt eget. Curabitur ac purus urna
                vitae mi. Nulla efficitur urna id neque finibus, ac congue lorem
                interdum. Sed suscipit, justo at rutrum venenatis, ex nunc
                fringilla ligula, nec bibendum felis nunc at ipsum.
              </p>
            </div>
            <div className="rounded-lg items-center justify-center flex overflow-hidden">
              <img src={img2} alt="Image 2" className="w-96 h-auto" />
            </div>
          </div>
          {/* Third row */}
          <div
            data-aos="fade-right"
            className="grid bg-amber-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg  items-center justify-center flex overflow-hidden mb-4 sm:mb-0">
              <img src={img3} alt="Image 3" className="w-96 h-auto" />
            </div>
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
                massa pellentesque vulputate. Integer nec urna gravida,
                sollicitudin enim vel, faucibus purus. Vivamus suscipit tellus
                felis, a dictum dolor tincidunt eget. Curabitur ac purus urna
                vitae mi. Nulla efficitur urna id neque finibus, ac congue lorem
                interdum. Sed suscipit, justo at rutrum venenatis, ex nunc
                fringilla ligula, nec bibendum felis nunc at ipsum.
              </p>
            </div>
          </div>
          {/* Fourth row */}
          <div
            data-aos="fade-left"
            className="grid bg-fuchsia-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
                massa pellentesque vulputate. Integer nec urna gravida,
                sollicitudin enim vel, faucibus purus. Vivamus suscipit tellus
                felis, a dictum dolor tincidunt eget. Curabitur ac purus urna
                vitae mi. Nulla efficitur urna id neque finibus, ac congue lorem
                interdum. Sed suscipit, justo at rutrum venenatis, ex nunc
                fringilla ligula, nec bibendum felis nunc at ipsum.
              </p>
            </div>
            <div className="rounded-lg items-center justify-center flex overflow-hidden">
              <img src={img4} alt="Image 4" className="w-96 h-auto" />
            </div>
          </div>
          {/* Fifth row */}
          <div
            data-aos="fade-right"
            className="grid bg-sky-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg  items-center justify-center flex overflow-hidden mb-4 sm:mb-0">
              <img src={img5} alt="Image 5" className="w-96 h-auto" />
            </div>
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies suscipit consectetur. Sed quis ex dolor. Cras a ex eu
                massa pellentesque vulputate. Integer nec urna gravida,
                sollicitudin enim vel, faucibus purus. Vivamus suscipit tellus
                felis, a dictum dolor tincidunt eget. Curabitur ac purus urna
                vitae mi. Nulla efficitur urna id neque finibus, ac congue lorem
                interdum. Sed suscipit, justo at rutrum venenatis, ex nunc
                fringilla ligula, nec bibendum felis nunc at ipsum.
              </p>
            </div>
          </div>
        </div>
        {/* Form section */}
        <div className="m-20">
          <h2 className="text-3xl text-accent text-center font-bold mb-7">
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
    </div>
  );
};

export default About;
