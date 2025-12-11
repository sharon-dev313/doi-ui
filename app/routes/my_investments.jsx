import React, { useMemo, useState } from "react";
import PropertyCard from "../components/my-investments/PropertyCard";
import Heading from "../components/Payouts/Heading";
import PayoutCard from "../components/Payouts/PayoutCard";
import Gold_Member from "../components/ui/Gold_Member";
import Hero from "../components/ui/Hero";
import { Button, useDisclosure } from "@heroui/react";
import InvestmentModal from "../components/my-investments/InvestmentModal";
import NotFound from "../components/my-investments/NotFound";
import GridCard from "../components/my-investments/GridCard";
const my_investments = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [visibleCount, setVisibleCount] = useState(4);
  const [filterProperty, setFilterProperty] = useState();
  const [activeTab, setActiveTab] = useState("investment");

  const payoutData = [
    {
      id: 1,
      title: "Total Invested",
      value: "$35,000",
      icon: "/images/Payouts/icons/1.svg",
      className: "bg-primary",
    },
    {
      id: 2,
      title: "Total Earning",
      value: "$3452055",
      icon: "/images/Payouts/icons/2.svg",
      className: "bg-primary/25",
    },
    {
      id: 3,
      title: "Average APY",
      value: "12.00%",
      icon: "/images/Payouts/icons/3.svg",
      className: "bg-lightgraycard",
    },
    {
      id: 4,
      title: "Active Investments",
      value: "22",
      icon: "/images/Payouts/icons/4.svg",
      className: "bg-success/25",
    },
  ];

  const propertyData = [
    {
      id: 1,
      image: "/images/my-investments/card_1.png", // Assuming this image exists in public folder based on context
      title: "Doi TownHoouse #1",
      status: "Active",
      location: "Tulum",
      price: "$50,000",
      roi: "12% ROI",
      investmentDate: "7/22/2025",
      investmentPeriod: "30 days",
      totalEarningLabel: "90 of 30 days completed",
      totalEarningValue: "$493.151",
      distribution: "Daily",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 75,
    },
    {
      id: 2,
      image: "/images/my-investments/card_2.png",
      title: "Ocean View Villa #5",
      status: "Completed",
      location: "Bali",
      price: "$120,000",
      roi: "15% ROI",
      investmentDate: "8/10/2025",
      investmentPeriod: "45 days",
      totalEarningLabel: "15 of 45 days completed",
      totalEarningValue: "$2,400.00",
      distribution: "Monthly",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 33,
    },
    {
      id: 3,
      image: "/images/my-investments/card_1.png",
      title: "Ocean View Villa #5",
      status: "Active",
      location: "Bali",
      price: "$120,000",
      roi: "15% ROI",
      investmentDate: "8/10/2025",
      investmentPeriod: "45 days",
      totalEarningLabel: "15 of 45 days completed",
      totalEarningValue: "$2,400.00",
      distribution: "Monthly",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 33,
    },
    {
      id: 4,
      image: "/images/my-investments/card_2.png",
      title: "Ocean View Villa #5",
      status: "Active",
      location: "Bali",
      price: "$120,000",
      roi: "15% ROI",
      investmentDate: "8/10/2025",
      investmentPeriod: "45 days",
      totalEarningLabel: "15 of 45 days completed",
      totalEarningValue: "$2,400.00",
      distribution: "Monthly",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 33,
    },
    {
      id: 5,
      image: "/images/my-investments/card_1.png",
      title: "Ocean View Villa #5",
      status: "Active",
      location: "Bali",
      price: "$120,000",
      roi: "15% ROI",
      investmentDate: "8/10/2025",
      investmentPeriod: "45 days",
      totalEarningLabel: "15 of 45 days completed",
      totalEarningValue: "$2,400.00",
      distribution: "Monthly",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 33,
    },
    {
      id: 6,
      image: "/images/my-investments/card_2.png",
      title: "Ocean View Villa #5",
      status: "Active",
      location: "Bali",
      price: "$120,000",
      roi: "15% ROI",
      investmentDate: "8/10/2025",
      investmentPeriod: "45 days",
      totalEarningLabel: "15 of 45 days completed",
      totalEarningValue: "$2,400.00",
      distribution: "Monthly",
      available_to_claim: "30",
      last_claim_date: "8/25/2025",
      total_payouts_day: "30",
      total_payouts: "500",
      daily_payout: "19.667",
      remanining_payout_day: "2",
      remanining_payout_available: "10",
      claimed_payout_total: "300",
      claimed_payout_day: "22",
      progress: 33,
    },
  ];
  const propertyCompleteData = [];

  const Property_ModelData = useMemo(() => {
    return propertyData.filter((val) => val.id === filterProperty);
  }, [filterProperty]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  const handleModel = (id) => {
    setFilterProperty(id);
    onOpen();
  };

  return (
    <div>
      <Hero
        title1={"My Investments"}
        title2={false}
        image={"/images/my-investments/banner.png"}
      />
      <section className="w-7xl mx-auto py-16 space-y-8 font-sans">
        {/* Header Section */}
        <Heading
          title={"My Investments"}
          sub_title={"Track and manage  your real estate investment portfolio"}
          buttonText1={"Active Investments"}
          buttonFunction1={() => {
            setActiveTab("investment");
          }}
          activeTab={activeTab}
          my_investments={true}
          buttonText2={"Completed Investments"}
          buttonFunction2={() => {
            setActiveTab("sweepstakes");
          }}
        />
        {activeTab === "investment" && propertyData.length > 0 ? (
          <>
            <GridCard
              payoutData={payoutData}
              propertyData={propertyData}
              visibleCount={visibleCount}
              handleModel={handleModel}
              handleShowMore={handleShowMore}
            />
          </>
        ) : activeTab === "sweepstakes" &&
          activeTab !== "investment" &&
          propertyCompleteData.length > 0 ? (
          <>
            <GridCard
              payoutData={payoutData}
              propertyData={propertyCompleteData}
              visibleCount={visibleCount}
              handleShowMore={handleShowMore}
            />
          </>
        ) : (
          <>
            <NotFound
              title={"No Investments found"}
              paragraph={"You don't have any investment yet"}
            />
          </>
        )}
      </section>
      <Gold_Member
        title={
          <span className="leading-16">
            Are you want to get <br />{" "}
            <span className="text-doiblue"> Claim rewards? </span>
          </span>
        }
        GoldTitle={""}
        BlueTitle={""}
        paragraph1={"Unlock exclusive benefits with just one tap.Redeem now"}
        paragraph2={"and experience the benefits instantly."}
        Padding={true}
        Seepstakes={false}
        ButtonText={"Earn Rewards"}
        ButtonFunction={() => {}}
        ButtonText2={false}
        ButtonFunction2={() => {}}
      />
      <InvestmentModal
        data={Property_ModelData}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default my_investments;
