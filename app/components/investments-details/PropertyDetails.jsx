import React from "react";
import { FaPlus, FaMinus, FaExpand, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
const PropertyDetails = ({ data }) => {
  return (
    <div className="bg-primary/20 p-8 rounded-3xl h-full">
      <SectionTitle title="Property" highlight="Details" />
      <div className="space-y-6 text-default-600 leading-relaxed mb-8">
        <p className="text-xl leading-8 ">
          Welcome to{" "}
          <span className="text-primary-600 font-medium">{data.name}</span>,{" "}
          {data.description[0].replace(`Welcome to ${data.name}, `, "")}
        </p>
        <p className="text-xl leading-8">{data.description[1]}</p>
      </div>
      <div className="relative w-full h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200 group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991666173038!2d2.2922240999999997!3d48.85837369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x87d177ee15767fe2!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1701986561131!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          className="border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 pointer-events-none">
          <div className="bg-doiblue text-white px-4 py-2 rounded-full font-bold shadow-lg text-lg mb-2 relative z-10">
            ${data.mapLocation.price.toLocaleString()}
          </div>
          <div className="w-4 h-4 bg-gold rounded-full border-2 border-white shadow-md relative z-0 -mt-1 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
