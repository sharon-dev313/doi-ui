import React from "react";

const ProgressBar = ({ current, total }) => {
  const percentage = Math.min((current / total) * 100, 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="text-black ">Investments Progress</span>
        <span className="text-black ">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full  mb-2 overflow-hidden">
        <div
          className="bg-lime h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-default-600 font-medium">
        <span>${current.toLocaleString()}</span>
        <span>${total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
