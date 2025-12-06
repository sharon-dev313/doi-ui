import Hero from "../components/ui/Hero";
import GoldMember from "../components/ui/Gold_Member";
import Exclusive_Benefits from "../components/Doi-Token/Exclusive_Benefits";
import Video from "../components/Doi-Gold-Member/Video";
import Benefits_List from "../components/Doi-Gold-Member/Benefits_List";
import Doi_Gold_Member from "../components/Doi-Gold-Member/Doi_Gold_Member";

export function meta() {
  return [
    { title: "DOI Gold Member" },
    { name: "description", content: "DOI Gold Member Page" },
  ];
}
const DoiGoldMember = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case "Winner":
        return (
          <img
            className="w-[42px] h-[42px]"
            src="/images/doi-token/icons/award-01.svg"
            alt="icon"
          />
        );

      case "Crown":
        return (
          <img
            className="w-[42px] h-[42px]"
            src="/images/doi-token/icons/crown.svg"
            alt="icon"
          />
        );

      case "Chart":
        return (
          <img
            className="w-[42px] h-[42px]"
            src="/images/doi-token/icons/analytics-01.svg"
            alt="icon"
          />
        );
      case "Building":
        return (
          <img
            className="w-[48px] h-[48px]"
            src="/images/doi-token/icons/building-03.svg"
            alt="icon"
          />
        );
      case "Sweet":
        return (
          <img
            className="w-[48px] h-[48px]"
            src="/images/doi-token/icons/gift.svg"
            alt="icon"
          />
        );
      case "Card":
        return (
          <img
            className="w-[48px] h-[48px]"
            src="/images/doi-token/icons/credit-card-pos.svg"
            alt="icon"
          />
        );

      default:
        return null;
    }
  };
  const handleClickGoldMember = () => {
    // Implement the button click functionality here
    console.log("Get Started button clicked!");
  };
  const Exclusive_Benefits_data = [
    {
      id: 1,
      title: "Property Discounts",
      paragraph: "Get 20% off on all DOI properties whenyou purchase tokens",
      icon: getIcon("Building"),
    },
    {
      id: 2,
      title: "Sweepstakes Entry",
      paragraph: "Each token gives you a chance to win incredible prizes",
      icon: getIcon("Sweet"),
    },
  ];
  return (
    <div>
      <Hero
        title1="ENJOY THE BENEFITS OF DOI"
        title2="GOLD MEMBERSHIP"
        image="/images/doi_gold_members/banner.png"
      />

{/* section 2 */}

<Doi_Gold_Member/>

{/* section 2 */}


      <Benefits_List/>
      <Video />
      <Exclusive_Benefits
        data={Exclusive_Benefits_data}
        title={false}
        paragraph={false}
          DoiGoldMember = {true}
        image={"/images/doi_gold_members/house_7.png"}
      />
      <GoldMember
        title="Are you want to become a"
        GoldTitle="DOI Gold Member?"
        paragraph1="Unlock premium privileges with DOI Gold Membership."
        paragraph2="Collect 20 tokens to claim your exclusive status and enjoy next-level benefits"
        ButtonText="Buy Tokens"
        ButtonFunction={handleClickGoldMember}
      />
    </div>
  );
};

export default DoiGoldMember;
