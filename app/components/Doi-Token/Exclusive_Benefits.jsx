import Card_List from "../ui/Card_List";
import Doi_GoldMember_Benefits from "../Doi-Gold-Member/Doi_GoldMember_Benefits";
import SubCard from "../ui/SubCard";
import { div } from "framer-motion/client";

const Exclusive_Benefits = ({
  DoiGoldMember_paragraph,
  data,
  title,
  paragraph,
  image,
  Seepstakes,
  SeepstakesData,
  DoiGoldMember,
  DoiGoldMember_title,
}) => {
  return (
    <div
      className={`max-w-7xl  mx-auto  py-16  ${!DoiGoldMember ? "lg:px-8 px-4  sm:px-6" : "lg-4"}  flex flex-col items-center gap-[24px] `}
    >
      <div className="w-full flex items-center flex-col">
        {title}
        <p className="text-lg text-default-600 text-center ">{paragraph} </p>
      </div>
     <div className="mt-12  h-full w-full flex justify-between items-stretch gap-12 ">
    <div className="w-full overflow-hidden">
        <img
            src={image}
            alt="banner"
            className="w-full h-full rounded-4xl object-cover object-center" 
        />
    </div>
    <div className="w-full flex flex-col gap-6 ">
        {!DoiGoldMember && !Seepstakes &&
            data?.map((val, id) => <Card_List key={id} val={val} />)}

        {DoiGoldMember && !Seepstakes && (
            <Doi_GoldMember_Benefits
                DoiGoldMember_paragraph={DoiGoldMember_paragraph}
                DoiGoldMember_title={DoiGoldMember_title}
            />
        )}
        {Seepstakes && !DoiGoldMember && (
           
            <div className="flex h-full flex-col  gap-[76px] rounded-3xl bg-lightblue/10 p-8">
                {SeepstakesData.map((item, index) => (
                    <SubCard key={index} data={item} />
                ))}
            </div>
        )}
    </div>
</div>
    </div>
  );
};

export default Exclusive_Benefits;
