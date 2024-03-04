import React, { useState } from "react";
import Slider from "react-slick";
import pdf1 from "../../images/pdf1.png";
import pdf2 from "../../images/pdf2.png";
import pdf3 from "../../images/pdf3.png";
import pdf4 from "../../images/pdf4.png"; // Note: Correct the import path for pdf4
import pdf5 from "../../images/pdf5.png";

const YourNotes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const pdfImages = [pdf1, pdf2, pdf3, pdf4, pdf5]; // Array of PDF images

  return (
    <div>
      <h1 className="text-center bg-gray-800 p-10 text-4xl text-primary font-bold">
        Microsoft Word Class Notes
      </h1>
      <h1 className="text-center bg-gray-800 pb-10 text-2xl text-accent font-bold">
        Content of note 1
      </h1>
      <div className="flex h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-red-300">
        {/* Mini view */}
        <div className="w-1/6 bg-gray-800 p-4 overflow-y-auto flex flex-col justify-center items-center">
          {/* Miniature representation of PDF */}
          {pdfImages.map((pdfImage, index) => (
            <div
              key={index}
              className={`w-32 h-40 bg-white mb-4 flex items-center justify-center ${
                currentSlide === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={pdfImage}
                alt={`PDF ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>

        {/* PDF viewer */}
        <div className="w-2/3 p-4  flex justify-center items-center">
          {/* Full PDF view */}
          <div className="max-w-full max-h-full">
            <Slider {...settings}>
              {pdfImages.map((pdfImage, index) => (
                <div key={index}>
                  <img
                    src={pdfImage}
                    alt={`PDF ${index + 1}`}
                    className="w-auto h-full object-contain border-2 border-white flex items-center justify-center"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Tools */}
        <div className="w-1/6 bg-gray-800 p-4">
          <div className="flex flex-col gap-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">
              Highlight
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Underline
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Add Note
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourNotes;
