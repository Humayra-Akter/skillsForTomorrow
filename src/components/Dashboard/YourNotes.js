import React from "react";
import pdf1 from "../../images/pdf1.png";
import pdf2 from "../../images/pdf2.png";
import pdf3 from "../../images/pdf3.png";
import pdf4 from "../../images/pdf4.png"; // Note: Correct the import path for pdf4
import pdf5 from "../../images/pdf5.png";

const YourNotes = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-red-300">
      {/* Mini view */}
      <div className="w-1/6 bg-gray-800 p-4 overflow-y-auto flex flex-col justify-center items-center">
        {/* Miniature representation of PDF */}
        <div className="w-32 h-80 bg-white mb-4 flex items-center justify-center">
          {" "}
          <img src={pdf1} alt="PDF 1" className="max-w-full max-h-full" />
        </div>
        <div className="w-32 h-40 bg-white mb-4 flex items-center justify-center">
          {" "}
          <img src={pdf2} alt="PDF 2" className="max-w-full max-h-full" />
        </div>
        <div className="w-32 h-40 bg-white mb-4 flex items-center justify-center">
          {" "}
          <img src={pdf3} alt="PDF 3" className="max-w-full max-h-full" />
        </div>
        <div className="w-32 h-40 bg-white mb-4 flex items-center justify-center">
          {" "}
          <img src={pdf4} alt="PDF 4" className="max-w-full max-h-full" />
        </div>
        <div className="w-32 h-40 bg-white mb-4 flex items-center justify-center">
          {" "}
          <img src={pdf5} alt="PDF 5" className="max-w-full max-h-full" />
        </div>
      </div>

      {/* PDF viewer */}
      <div className="w-2/3 p-4">
        {/* Full PDF view */}
        <img
          src={pdf1}
          alt="PDF"
          className="w-full h-full object-contain border-2 border-white"
        />
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
  );
};

export default YourNotes;
