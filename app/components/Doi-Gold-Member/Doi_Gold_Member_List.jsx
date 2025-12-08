import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Reviews from "./Reviews";
const Doi_Gold_Member_List = ({ avatar, Review_text, title, list }) => {
  return (
    <div className="lg:col-span-6 flex flex-col items-center text-center text-white space-y-8 pt-8 lg:pt-0">
      {/* Reviews */}
      <Reviews avatar={avatar} text={Review_text} />

      {/* Title */}
      <div className="flex flex-col text-white items-center">
        <h1 className="text-5xl lg:text-6xl  font-nasa ">{title}</h1>
      </div>

      {/* Benefits List */}
      <div className="flex flex-col  space-y-4 max-w-lg text-left">
        {list?.map((item, index) => (
          <div
            key={item.id}
            className="flex items-start justify-center space-x-3"
          >
            <IoIosCheckmarkCircleOutline className="text-white mt-1 flex-shrink-0" />
            <p className="text-white text-center text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-4 bg-doiorange hover:bg-doiorange/90 text-black  py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
        Buy Gold Token
      </button>
    </div>
  );
};

export default Doi_Gold_Member_List;
