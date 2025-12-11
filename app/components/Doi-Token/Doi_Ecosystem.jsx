const Doi_Ecosystem = ({ title, paragraph, image, customers, text }) => {
  return (
    <div className="max-w-7xl  mx-auto px-4  sm:px-6 py-16 lg:px-8 flex flex-col items-center gap-6 ">
      <div className="w-full flex items-center flex-col">
        {title}
        <p className="text-lg text-default-600 text-center w-lg mt-4 ">
          {paragraph}
        </p>
      </div>
      <div className="relative mt-12 w-full flex justify-center items-center h-[978.48px] ">
        <img src={image} alt="map image" className="w-full h-full " />
        <div className="absolute flex flex-col items-center  z-10 bottom-0 ">
          <h1 className=" text-3xl text-doiblue font-nasa text-center">
            {customers}
          </h1>
          <p className="text-center text-default-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Doi_Ecosystem;
