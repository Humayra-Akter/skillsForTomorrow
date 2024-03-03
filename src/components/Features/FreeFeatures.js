import React from "react";
import { useParams, Link } from "react-router-dom";

const featuresData = {
  tailoringAndSewing: "Tailoring and sewing",
  cooking: "Cooking",
  basicComputer: "Basic Computer",
  artAndCraft: "Art and Craft",
  hairdressingAndBeautyTherapy: "Hairdressing and Beauty Therapy",
  electricalAndPlumbingSkills: "Electrical and Plumbing Skills",
  entrepreneurshipAndFinancialLiteracy:
    "Entrepreneurship and Financial Literacy",
};

const FreeFeatures = () => {
  const { division, subDivision, area } = useParams();

  const featureBoxes = Object.entries(featuresData).map(
    ([feature, description]) => (
      <div
        key={feature}
        className="my-4 mx-2 w-80 p-3 bg-gradient-to-r from-pink-200 to-yellow-100 text-black border border-primary rounded-md shadow-md"
      >
        <Link to={`/${feature.replace(/\s/g, "-")}`}>
          <p className="text-center text-primary font-bold">{description}</p>
        </Link>
      </div>
    )
  );

  return (
    <div>
      <p className="text-center text-primary uppercase font-bold text-3xl my-6">
        Features
      </p>
      <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {featureBoxes}
        {/* Adding empty grid items to adjust the layout */}
        <div className="hidden lg:block xl:hidden"></div>
        <div className="hidden xl:block"></div>
      </div>
    </div>
  );
};

export default FreeFeatures;
