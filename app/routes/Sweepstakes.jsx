import React from "react";
import Hero from "../components/ui/Hero";
import Guarantee from "../components/how-it-works/Guarantee";
import Gold_Member from "../components/ui/Gold_Member";
import Exclusive_Benefits from "../components/Doi-Token/Exclusive_Benefits";
import Heading from "../components/Doi-Gold-Member/Heading";
import { FiCalendar, FiDollarSign, FiUsers } from "react-icons/fi";
import InfoCard from "../components/Sweepstakes/InfoCard";
import StatCard from "../components/Sweepstakes/StatCard";
import { Link } from "@heroui/react";
const Sweepstakes = () => {
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

  const sweepstakesData = [
    {
      id: 1,
      icon: getIcon("Winner"),
      Title: "Exlusive prizes",
      paragraph:
        "Win valuable prizes including property discounts, investing opportunities, and more.",
    },
    {
      id: 2,
      icon: getIcon("Crown"),
      Title: "Gold Membership",
      paragraph:
        "Collect enough tickets to unlock lifetime benefits with a Gold Membership.",
    },
    {
      id: 3,
      icon: getIcon("Chart"),
      Title: "Ecosystem Benefits",
      paragraph: "Keep your tickets for future rewards in the DOI ecosystem.",
    },
  ];

  const cardsData = [
    {
      id: 1,
      type: "info",
      icon: (
        <img
          src="/images/seepstakes/icons/2.svg"
          alt="Calendar"
          className="w-6 h-auto"
        />
      ),
      title: "Started",
      subTitle: "Wave launch date",
      mainContent: "September 17, 2025",
      variant: "default",
    },
    {
      id: 2,
      type: "stat",
      statText: "$25,700 Total Prizes Awarded",
      statIcon: <div className="w-3 h-3 rounded-full bg-doiblue"></div>,
      variant: "default",
    },
    {
      id: 3,
      type: "stat",
      statText: "500+ Reviews",
      avatars: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        "https://i.pravatar.cc/150?u=a04258114e29026302d",
      ],
      variant: "default",
    },
    {
      id: 4,
      type: "info",
      icon: (
        <img
          src="/images/seepstakes/icons/3.svg"
          alt="Prize"
          className="w-6 h-auto"
        />
      ),
      title: "Prize",
      mainContent: "$4,000",
      subContent: "One-time payout",
      variant: "default",
    },
    {
      id: 5,
      type: "info",
      icon: (
        <img
          src="/images/seepstakes/icons/4.svg"
          alt="Participation"
          className="w-6 h-auto"
        />
      ),
      title: "Participation",
      subTitle: "4,200/6,000 entries",
      progressData: {
        label: "Progress",
        current: 21,
        total: 21,
        status: "Wave is full",
        userEntries: 0,
      },
      variant: "blue",
    },
  ];

  const startedCard = cardsData[0];
  const totalPrizesCard = cardsData[1];
  const reviewsCard = cardsData[2];
  const prizeCard = cardsData[3];
  const participationCard = cardsData[4];

  return (
    <div>
      <Hero
        title1={"Enter Our Exclusive"}
        title2={"Sweepstakes"}
        image={"/images/seepstakes/banner.png"}
      />

      <div className="w-7xl mx-auto py-16 flex flex-col items-center justify-center">
        <div className="p-4 me-auto flex items-center bg-doiblue/10 rounded-4xl">
          <span className="text-doiblue flex items-center gap-2 font-nasa text-xl">
            <img
              src="/images/seepstakes/icons/1.svg"
              className="w-5 h-5"
              alt="award"
            />{" "}
            <span> Wave # </span>
          </span>
          <span className="ms-3 text-md bg-white text-default-900 p-3 rounded-2xl">
            Winner Draw Pending
          </span>
        </div>
        <Heading
          title={
            <span className="text-black">
              Monthly Real <br />
              <span className="text-doiblue-100">Estate Payout</span>{" "}
            </span>
          }
          paragraph={"Win monthly rental income from a premium property"}
          btn={"Get More Tokens = More Entries"}
          SweepStakes={true}
          btnFunction={() => {}}
        />

        <section className="w-full  mx-auto flex flex-col py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <InfoCard {...startedCard} className="grow" />
              <StatCard {...totalPrizesCard} className="h-24 shrink-0" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <StatCard {...reviewsCard} className="h-24 shrink-0" />
              <InfoCard {...prizeCard} className="grow" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col h-full">
              <InfoCard
                {...participationCard}
                className="h-full min-h-[400px]"
              />
            </div>
          </div>

          <div className="mt-8 me-auto text-center text-default-800 text-md">
            <p>
              No purchase necessary , subject to official rules See{" "}
              <Link
                href="#"
                className="text-doiblue hover:underline font-medium text-sm!"
              >
                terms & disclaimers
              </Link>{" "}
              for full details.
            </p>
          </div>
        </section>
      </div>
      <Guarantee
        title={
          <span>
            How to
            <span className="text-doiblue"> Participate</span>
          </span>
        }
        paragraph={
          "Enter for a chance to win incredible prizes! Use your tokens to participate in this exclusive sweepstakes, with each token entry increasing your odds."
        }
        subParagraph={`Don’t miss out join the sweepstakes today and keep your tickets for future rewards in the ecosystem!`}
        button={`Get Started`}
        buttonFunction={() => {}}
        image={"/images/seepstakes/house_1.png"}
        imageHeading={false}
        imageParagraph={
          <span className="text-doiblue text-xl">
            Collect enough tickets and unlock lifetime benefits with a Gold
            Membership.
          </span>
        }
        icon2={"/images/how_it_works/icons/5.svg"}
      />

      <Exclusive_Benefits
        data={Exclusive_Benefits_data}
        title={
          <h2 className="text-3xl lg:text-5xl leading-14 text-center font-nasa  text-default-800">
            Why <span className="text-doiblue  font-nasa">Participate</span>
          </h2>
        }
        paragraph={false}
        DoiGoldMember={false}
        Seepstakes={true}
        SeepstakesData={sweepstakesData}
        image={"/images/seepstakes/house_2.png"}
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
      <Gold_Member
        title={"Your chance to win "}
        GoldTitle={""}
        BlueTitle={"big is now"}
        paragraph1={false}
        paragraph2={false}
        Seepstakes={true}
        ButtonText={"Enter Sweepstakes"}
        ButtonFunction={() => {}}
      />
    </div>
  );
};

export default Sweepstakes;
