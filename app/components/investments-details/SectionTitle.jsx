import React from "react";

const SectionTitle = ({ title, highlight }) => {
  return (
    <h2 className="text-5xl  text-black mb-6 font-nasa">
      {title} <span className="text-doiblue">{highlight}</span>
    </h2>
  );
};

export default SectionTitle;
