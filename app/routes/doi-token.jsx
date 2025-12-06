import Hero from "../components/ui/Hero";
import Discover_Doi_token from "../components/Doi-Token/Discover_Doi_token";
import Exclusive_Benefits from "../components/Doi-Token/Exclusive_Benefits";
import Doi_Ecosystem from "../components/Doi-Token/Doi_Ecosystem";
export function meta() {
  return [
    { title: "DOI Token" },
    { name: "description", content: "DOI Token Page" },
  ];
}
export default function DoiToken() {



  const sweepstakesData = [
    {
      id : 1,
      icon : "Winner",
      Title : "Exlusive prizes",
      paragraph : "Win valuable prizes including property discounts, investing opportunities, and more."
    },
    {
      id : 2,
      icon : "Crown",
      Title : "Gold Membership",
      paragraph : "Collect enough tickets to unlock lifetime benefits with a Gold Membership."
    },
    {
      id : 3,
      icon : "Chart",
      Title : "Ecosystem Benefits",
      paragraph : "Keep your tickets for future rewards in the DOI ecosystem."
    },
  ]


  return (
    <div>
      <Hero
        title1={"ENJOY THE BENEFITS"}
        title2={"OF DOI MEMBERSHIP"}
        image={
          "https://images.unsplash.com/photo-1764889289957-242fc538a90c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      {/* Discover the DOI Token (NFT) Start */}
      <Discover_Doi_token 
      title={ <h2 className="text-3xl lg:text-4xl font-nasa font-bold text-default-800">
                Discover the <span className="text-primary font-nasa">DOI Token</span> (NFT)
              </h2>}
      paragraph = {
        "A digital key that grants access to membership perks, community benefits, and investment opportunities with in the DOI ecosystem."
      }
      SubCards = {true}
      ImageItems1 = {"https://images.unsplash.com/photo-1764911866779-eb31067c0e5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"}
      ImageItems2 = {"https://images.unsplash.com/photo-1764377850160-d6250764116f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"}
      
      
      />

      {/* Discover the DOI Token (NFT) End */}

      <Exclusive_Benefits />
      <Doi_Ecosystem />

      <Discover_Doi_token
        title={<h2 className="text-3xl lg:text-4xl font-nasa font-bold text-default-800">
              Enter our exclusive  <span className="text-primary font-nasa">sweepstakes</span>
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

      />
      <div className="max-w-7xl  mx-auto px-4  sm:px-6 mt-[150px] lg:px-8  gap-[24px] ">
        <div className="flex justify-between">
          <div>col 1</div>
          <div>col 2</div>
        </div>
      </div>

      <div className="w-full py-[100px]"></div>
    </div>
  );
}
