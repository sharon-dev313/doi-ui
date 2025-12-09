import { Button } from "@heroui/react";
const Gold_Member = ({
  title,
  GoldTitle,
  BlueTitle,
  paragraph1,
  paragraph2,
  ButtonText,
  ButtonFunction,
}) => {
  return (
    <div className="max-w-7xl  mx-auto px-4 overflow-hidden relative bg-black my-16 rounded-4xl sm:px-6 py-20 flex flex-col justify-center items-center ">
      <div
        className="w-[750px] absolute -top-52 -left-52 h-[750px] rounded-full 
      bg-[radial-gradient(circle,#04B9E8_2%,rgba(4,185,232,0.01)_100%)] opacity-35
      blur-[100px]"
      ></div>
      <div
        className="w-[750px] absolute -bottom-52 -right-52 h-[750px] rounded-full 
      bg-[radial-gradient(circle,#04B9E8_0%,rgba(4,185,232,0.01)_100%)] opacity-35
      blur-[100px]"
      ></div>
      <h1 className="text-5xl text-white relative z-10 text-center">
        {title}
        <br />{" "}
        <span className={`${GoldTitle ? "text-gold" : "text-doiblue"}`}>
          {GoldTitle ? GoldTitle : BlueTitle}
        </span>
      </h1>
      {paragraph1 && (
        <p className="text-lg text-[#c4c4c4] relative z-10 text-center max-w-full px-3 mt-4">
          {paragraph1} <br />
          {paragraph2}
        </p>
      )}
      <Button
        onClick={() => ButtonFunction()}
        radius="full"
        className={`relative z-10 mt-8 px-8 py-4 ${GoldTitle? "bg-gold" : "bg-doiblue"}   text-black  font-nasa font-semibold hover:bg-primary/80 transition`}
      >
        {ButtonText}
      </Button>
    </div>
  );
};

export default Gold_Member;
