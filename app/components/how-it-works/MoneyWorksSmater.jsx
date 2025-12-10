import React from "react";
// You may not need all these icons if they are passed in props, but keeping for completeness
import { FiUser } from "react-icons/fi";
// ... other imports
import MoneyWorksCards from "./MoneyWorksCards";

const MoneyWorksSmater = ({ image1, image2, row1, row2 }) => {
  return (
    <div className="min-h-fit flex items-center justify-center py-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
          <div className="w-full md:w-1/3 flex">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
              <img
                src={image1}
                alt="Traditional House"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 justify-between flex flex-col gap-6">
            {row1?.map((item, index) => (
              <MoneyWorksCards
                key={item.id}
                icon={item.icon}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            {row2?.map((item, index) => (
              <MoneyWorksCards
                key={item.id}
                icon={item.icon}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            ))}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm flex-grow">
              <img
                src={image2}
                alt="Modern Luxury House"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyWorksSmater;
