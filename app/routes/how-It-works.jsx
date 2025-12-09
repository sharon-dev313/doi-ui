import React from "react";
import Hero from "../components/ui/Hero";
import Heading from "../components/Doi-Gold-Member/Heading";
import MoneyWorksSmater from "../components/how-it-works/MoneyWorksSmater";
import Gold_Member from "../components/ui/Gold_Member";
import Guarantee from "../components/how-it-works/Guarantee";
import ItWorks from "../components/how-it-works/ItWorks";
const how_It_works = () => {
  const Money_Works_Smarter_data_Row1 = [
    {
      id: 1,
      icon: "/images/how_it_works/icons/1.svg",
      heading: "Get DOI Tokens Become Gold Member",
      paragraph:
        "Elevate your experience and unlock premium advantages by purchasing DOI tokens.",
    },
    {
      id: 2,
      icon: "/images/how_it_works/icons/2.svg",
      heading: "Browse & Select Real Estate Investment",
      paragraph:
        "Invest with confidence by choosing from rigorously screened real estate for you.",
    },
    {
      id: 3,
      icon: "/images/how_it_works/icons/3.svg",
      heading: "Invest USDT Receive Fractional Ownership",
      paragraph:
        "Invest in DOI tokens to experience premium membership benefits on your journey.",
    },
  ];

  const Money_Works_Smarter_data_Row2 = [
    {
      id: 1,
      icon: "/images/how_it_works/icons/4.svg",
      heading: "Earn Monthly payouts",
      paragraph:
        " Enjoy the benefits of stable rental returns with automated monthly incomedirectly to you.",
    },
  ];

  const ItWorksData = [
    {
      id : 1,
      title : <span>Smart <br /> Contracts</span>,
      description : "DOI Smart Contracts automate investments with transparent, secure, and tamper proof termse payouts and ownership are always on time.",
      icon : "/images/how_it_works/icons/6.svg",
      CountNum : "01"
    },
    {
      id : 2,
      title : "Blockchain Security",
      description : "Built on blockchain infrastructure—your investments, ownership records, and payouts are permanently logged and publicly auditable.",
      icon : "/images/how_it_works/icons/7.svg",
      CountNum : "02"
    },
    {
      id : 3,
      title : "Transparency Matters",
      description : "With DOI, every transaction is traceable on the blockchain, giving you full visibility and confidence in where your money goes.",
      icon : "/images/how_it_works/icons/8.svg",
      CountNum : "03"
    },
  ]
  return (
    <div>
      <Hero
        title1={"Lock Your USDT Enjoy"}
        title2={"The Rest"}
        image={"/images/how_it_works/banner.png"}
      />
      <div className="w-7xl mx-auto py-16 flex flex-col items-center justify-center">
        <Heading
          title={
            <span className="text-black">
              How Your Money Works Smarter{" "}
              <span className="text-doiblue-100">With Doi</span>{" "}
            </span>
          }
          paragraph={
            "With DOI, your money doesn’t just sit—it works harder through secure real estate investments and consistent monthly returns."
          }
          btn={"Get Started"}
          btnFunction = {()=>{}}
          
        />
        <MoneyWorksSmater
          image1={"/images/how_it_works/house_1.png"}
          image2={"/images/how_it_works/house_2.png"}
          row1={Money_Works_Smarter_data_Row1}
          row2={Money_Works_Smarter_data_Row2}
        />
      </div>

      <Guarantee
        title={
          <span>
            {" "}
            How do we <br />
            <span className="text-doiblue">guarantee this?</span>
          </span>
        }
        paragraph={
          "We back your USDT investments with the DOI operational properties that are fully owned and managed by Digital Oro International with no debt or mortgages on them, making DOI investment fund super secure."
        }
        button = {`Invest Now`}
        buttonFunction={() => {}}
        image={"/images/how_it_works/house_3.png"}
        imageHeading = {`Example`}
        imageParagraph = {<span> DOI <span className="text-doiblue">El hotel</span> in PDC is
                  worth on market value at{" "}
                  <span className="text-doiblue">1.5 M USD</span> dollars, DOI
                  can only take up to{" "}
                  <span className="text-doiblue">1.4 M dollars</span> from its
                  GOLD members with this property in collateral. Your money is
                  protected by the existing assets. As the ecosystem grows on
                  assets, we can take on more money from our members.</span>}
        icon={"/images/how_it_works/icons/5.svg"}
      />

      <h1 className="text-5xl py-60 text-center bg-purple-500 text-white">
        HOME COMPONENT WILL COME HERE
      </h1>

      <div className="w-7xl mx-auto py-16 flex flex-col items-center justify-center">
        <Heading
          title={
            <span className="text-black">
              How does <br />
              <span className="text-doiblue-100">it works</span>
            </span>
          }
          paragraph={
            "Every investment is secured with smart contracts, audited systems, and complete transparency—so you can invest with peace of mind."
          }
          how_It_works={false}
        />
        <ItWorks 
        itWorksData = {ItWorksData}
        
        />
      </div>

      <Gold_Member
        title={"Your journey to real estate investment"}
        GoldTitle={""}
        BlueTitle={"starts today?"}
        paragraph1={false}
        paragraph2={false}
        ButtonText={"Get  Started"}
        ButtonFunction={() => {}}
      />
    </div>
  );
};

export default how_It_works;
