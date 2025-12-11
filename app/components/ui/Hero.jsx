const Hero = ({ title1, title2, image , paragraph1}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[60vh] bg-cover bg-center w-full  flex flex-col justify-center items-center`}
    >
      <h1 className="text-3xl text-white lg:text-5xl leading-[84px] text-center font-nasa ">
        {title1} <br /> {title2}
      </h1>
      {paragraph1 && (
        <p className="text-2xl text-center text-white relative z-10  max-w-full  mt-4">
          {paragraph1}
        </p>
      )}
    </div>
  );
};

export default Hero;
