import Hero from "../components/ui/Hero";
import Discover_Doi_token from "../components/Doi-Token/Discover_Doi_token";
import Exclusive_Benefits from "../components/Doi-Token/Exclusive_Benefits";
import Doi_Ecosystem from "../components/Doi-Token/Doi_Ecosystem";
import Gold_Member from "../components/Doi-Token/Gold_Member";
export function meta() {
  return [
    { title: "DOI Token" },
    { name: "description", content: "DOI Token Page" },
  ];
}
export default function DoiToken() {
const getIcon = (icon) => {
  switch (icon) {
    case "Winner":
      return <img className="w-[42px] h-[42px]" src="/images/doi-token/icons/award-01.svg" alt="icon" />;

    case "Crown":
      return <img className="w-[42px] h-[42px]" src="/images/doi-token/icons/crown.svg" alt="icon" />;

    case "Chart":
      return <img className="w-[42px] h-[42px]" src="/images/doi-token/icons/analytics-01.svg" alt="icon" />;

    default:
      return null;
  }
};


  const sweepstakesData = [
    {
      id : 1,
      icon : getIcon("Winner"),
      Title : "Exlusive prizes",
      paragraph : "Win valuable prizes including property discounts, investing opportunities, and more."
    },
    {
      id : 2,
      icon : getIcon("Crown"),
      Title : "Gold Membership",
      paragraph : "Collect enough tickets to unlock lifetime benefits with a Gold Membership."
    },
    {
      id : 3,
      icon : getIcon("Chart"),
      Title : "Ecosystem Benefits",
      paragraph : "Keep your tickets for future rewards in the DOI ecosystem."
    },
  ]


  const sweepstakesCountData = [
    {
      id: 1,
      value : "09",
      text: "Total Winners"
    },
    {
      id: 2,
      value : "23,700",
      text: "Total Prizes Awarded"
    },
    {
      id: 3,
      value : "2,633",
      text: "Average Prize"
    },
  ]



  const FaqItemsData = [
    {
      id : 1,
      Question : "How do DOI tokens work?",
      Answer : "Each token represents a chance to win prizes and provides access to exclusive benefits like property discounts."

    },
    {
      id : 2,
      Question : "What are benefits of owning tokens?",
      Answer : "Token holders get access to property discounts, sweepstakes entries, and potential monthly payouts."

    },
    {
      id : 3,
      Question : "How do I participate in sweepstakes?",
      Answer : "Each token automatically enters you into our sweepstakes. The more tokens you have, the better your chances of winning."

    },
  ]

  return (
    <div>
      <Hero
        title1={"ENJOY THE BENEFITS OF"}
        title2={"DOI MEMBERSHIP"}
        image={
          "/images/doi-token/Banner.png"
        }
      />

      {/* Discover the DOI Token (NFT) Start */}
      <Discover_Doi_token 
      title={ <h2 className="text-3xl lg:text-5xl font-nasa  text-default-800">
                Discover the <br /> <span className="text-[#04B9E8] font-nasa">DOI Token</span> (NFT)
              </h2>}
      paragraph = {
        "A digital key that grants access to membership perks, community benefits, and investment opportunities with in the DOI ecosystem."
      }
      SubCards = {true}
      ImageItems1 = {"/images/doi-token/home-1.png"}
      ImageItems2 = {"/images/doi-token/home-2.png"}
      
      
      />

      {/* Discover the DOI Token (NFT) End */}

      <Exclusive_Benefits />
      <Doi_Ecosystem />

      <Discover_Doi_token
        title={<h2 className="text-3xl lg:text-5xl leading-[56px] font-nasa  text-default-800">
              Enter our exclusive  <span className="text-[#04B9E8] font-nasa">sweepstakes</span>
              </h2>}
        review={"500+ Reviews"}
        paragraph={
          "Join our sweepstakes for a chance to win monthly payments and become part of our growing community of winners."
        }
        TotalWinnersCount = {"09"}
        TotalWinners = {"Total Winners"}
        TotalPrizesCount = {"23,700"}
        TotalPrizes = {"Total Prizes Awarded"}
        AveragePrizeCount = {"2,633"}
        AveragePrize = {"Average Prize"}
        SubCards = {false}
        ListItems = {sweepstakesData}
        sweepstakesCountData = {sweepstakesCountData}

      />

  <Gold_Member/>

      <Discover_Doi_token
        title={<h2 className="text-3xl lg:text-5xl font-nasa leading-[56px] text-default-800">
              FREQUENTLY  <br />
  <span className="text-[#04B9E8] font-nasa">ASKED QUESTIONS</span>
              </h2>}
        review={"500+ Reviews"}
        paragraph={
          "Answers to your DOI  questions and concerns"
        }
        TotalWinnersCount = {"09"}
        TotalWinners = {"Total Winners"}
        TotalPrizesCount = {"23,700"}
        TotalPrizes = {"Total Prizes Awarded"}
        AveragePrizeCount = {"2,633"}
        AveragePrize = {"Average Prize"}
        SubCards = {false}
        ListItems = {sweepstakesData}
        FAQ = {true}
        FaqItems = {FaqItemsData}

      />

      <div className="w-full py-[100px]"></div>
    </div>
  );
}
