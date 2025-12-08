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

  const DoiGoldMember_data = [
    {
      id: 1,
      text: "The membership that will transform your life.",
    },
    {
      id: 2,
      text: "Enjoy guaranteed crypto income, giving you a steady stream of digital currency earnings.",
    },
    {
      id: 3,
      text: "Gain exclusive access to over 50 top DOI locations worldwide, with a 40% discount on all DOI properties.",
    },
    {
      id: 4,
      text: "Explore boundless business opportunities by leveraging smart contracts to unlock limitless potential.",
    },
  ];

  const Benifit_data = [
    {
      id: 1,
      icon: "/images/doi_gold_members/icons/icon_1.svg",
      title: "Streamlined investment opportunities",
      paragraph:
        "Secure and risk-free way to generate capital with a guaranteed 12% annual return backed by DOI's real estate.",
    },
    {
      id: 2,
      icon: "/images/doi_gold_members/icons/icon_2.svg",
      title: "Lifetime access to all properties in the DOI ecosystem",
      paragraph:
        "At 40% off, creating competitive discounts for your customers and increased profitability for you. Unique offerings",
    },
    {
      id: 3,
      icon: "/images/doi_gold_members/icons/icon_3.svg",
      title: "Premier access to DOI's light steel homes",
      paragraph:
        "Opportunities for cost savings and efficiency through access to DOI's exclusive building materials and construction.",
    },
    {
      id: 4,
      image_url: "/images/doi_gold_members/house_3.png",
      large_col: true,
    },
    {
      id: 5,
      icon: "/images/doi_gold_members/icons/icon_4.svg",
      title: "Access rental properties without the need for property ownership",
      paragraph:
        "Reducing financial risk and eliminating upfront costs. Full management services, including maintenance.",
    },
    {
      id: 6,
      image_url: "/images/doi_gold_members/house_4.png",
      large_col: false,
      small_col: true,
    },
    {
      id: 7,
      icon: "/images/doi_gold_members/icons/icon_5.svg",
      title: "Real estate investment opportunities world wide",
      paragraph:
        "Grow your money without exposure to market risks, offering a hassle-free and profitable investment opportunity.",
    },
    {
      id: 8,
      icon: "/images/doi_gold_members/icons/icon_6.svg",
      title: "Access to all properties within the ecosystem",
      paragraph:
        "At a 40% discount, making travel more affordable for frequent travelers. Convenient amenities already equipped.",
    },
  ];

  // Handle Button Click
  const handleClickGoldMember = () => {
    // Implement the button click functionality here
    console.log("Get Started button clicked!");
  };

  return (
    <div>
      <Hero
        title1="ENJOY THE BENEFITS OF DOI"
        title2="GOLD MEMBERSHIP"
        image="/images/doi_gold_members/banner.png"
      />

      {/* section 2 Start */}

      <Doi_Gold_Member
        avatar={4}
        Review_text={"500+ Reviews"}
        title={
          <span>
            DOI GOLD <br /> Membership
          </span>
        }
        list={DoiGoldMember_data}
        footerText={
          "Whether you're a novice investor entering into the realm of real estate for the first time, or a seasoned enterprise seeking streamlined investment avenues, our membership offers simplicity coupled with unparalleled security."
        }
        invest_percentage={12}
        invest_text={"Invest easily in our Real Estate for 12% annually"}
        discount_percentage={40}
        discount_text={"Discount on all DOI properties."}
        image1={"/images/doi_gold_members/house_1.png"}
        image2={"/images/doi_gold_members/house_2.png"}
      />

      {/* section 2 End */}

      {/* Section 3 Start  */}
      <Benefits_List
        title={
          <span>
            Benefits List of Doi <br />
            Gold Membership
          </span>
        }
        paragraph={
          "Whether you're a novice investor entering into the realm of real estate for the first time, or a seasoned enterprise seeking streamlined investment avenues"
        }
        list={Benifit_data}
      />
      {/* Section 3 End */}
      <Video
        thumbnail={"/images/doi_gold_members/house_5.png"}
        play_icon={"/images/doi_gold_members/icons/play-circle-02.svg"}
        video_url={"https://www.pexels.com/download/video/2887459/"}
      />
      <Exclusive_Benefits
        data={Exclusive_Benefits_data}
        title={false}
        paragraph={false}
        DoiGoldMember={true}
        image={"/images/doi_gold_members/house_7.png"}
        DoiGoldMember_title={
          <span>
            The Membership That Will{" "}
            <span className="textdoiorange">Change Your Life</span>
          </span>
        }
        DoiGoldMember_paragraph={
          " Unlock exclusive benefits, rewards, and opportunities designed for your success."
        }
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
