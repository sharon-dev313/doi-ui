const Hero = ({ title1, title2, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[60vh] max-h-[540px] bg-cover bg-center w-full  flex justify-center items-center`}
    >
      <h1 className="text-3xl text-white lg:text-5xl leading-[84px] text-center font-nasa ">
        {title1} <br /> {title2}
      </h1>
    </div>
  );
};

export default Hero;
