import Hero from "../components/ui/Hero";
import PayoutCard from "../components/Payouts/PayoutCard";
import ActivePayoutCard from "../components/Payouts/ActivePayoutCard";
import Heading from "../components/Payouts/Heading";

const PayoutsPage = () => {
  const payoutData = [
    {
      id: 1,
      title: "Total Payouts",
      value: "23",
      icon: "/images/Payouts/icons/1.svg",
      className: "bg-warning/25",
    },
    {
      id: 2,
      title: "Monthly Income",
      value: "$9000.00",
      icon: "/images/Payouts/icons/2.svg",
      className: "bg-primary/25",
    },
    {
      id: 3,
      title: "Claimed Periods",
      value: "17",
      icon: "/images/Payouts/icons/3.svg",
      className: "bg-lightgraycard",
    },
    {
      id: 4,
      title: "Remaining Periods",
      value: "673",
      icon: "/images/Payouts/icons/4.svg",
      className: "bg-success/25",
    },
  ];

  const activePayouts = [
    {
      id: 1,
      title: "Payout #23",
      status: "Active",
      hash: "0x90fbabfafdb20ef500b1ebe02fb30bc8b327022a55",
      contract: "0x587de2d2a4f90757f34734c58545efe6ed3ca6a",
      daily: "USDT $6.67",
      started: "8/25/2025",
      nextPayout: "8/26/2025",
      progress: 2,
      totalDays: 30,
      claimableAmount: "$200.00 USDT",
      claimedDays: 0,
      claimedAmount: "$0.00 USDT",
      remainingDays: 30,
      remainingAmount: "$200.00 USDT",
    },
    {
      id: 2,
      title: "Payout #24",
      status: "Active",
      hash: "0x72acaafafdb20ef500b1ebe02fb30bc8b327011d44",
      contract: "0x123de2d2a4f90757f34734c58545efe6ed3beef",
      daily: "USDT $12.50",
      started: "8/20/2025",
      nextPayout: "8/21/2025",
      progress: 5,
      totalDays: 30,
      claimableAmount: "$450.00 USDT",
      claimedDays: 5,
      claimedAmount: "$62.50 USDT",
      remainingDays: 25,
      remainingAmount: "$387.50 USDT",
    },
    {
      id: 3,
      title: "Payout #21",
      status: "Active",
      hash: "0x45ffabfafdb20ef500b1ebe02fb30bc8b327abcd33",
      contract: "0x999de2d2a4f90757f34734c58545efe6ed3ac7b",
      daily: "USDT $5.00",
      started: "8/15/2025",
      nextPayout: "8/16/2025",
      progress: 10,
      totalDays: 30,
      claimableAmount: "$150.00 USDT",
      claimedDays: 10,
      claimedAmount: "$50.00 USDT",
      remainingDays: 20,
      remainingAmount: "$100.00 USDT",
    },
  ];

  return (
    <div>
      <Hero
        title1={"Payouts"}
        title2={""}
        image={"/images/Payouts/banner.png"}
      />
      <section className="w-7xl mx-auto py-16 space-y-8 font-sans">
        {/* Header Section */}
        <Heading
          title={"Payouts"}
          sub_title={"Track and manage your active payouts and earnings"}
          buttonText1={"Investment Payouts"}
          buttonFunction1={() => {}}
          buttonText2={"Sweepstakes Payouts"}
          buttonFunction2={() => {}}
        />
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {payoutData.map((item) => (
            <PayoutCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="w-7xl mx-auto py-16 space-y-8 font-sans">
        {/* Header Section */}
        <Heading
          title={"Active Payouts"}
          sub_title={"Track and manage your active payouts and earnings"}
          buttonText1={false}
          buttonText2={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {activePayouts.map((card) => (
            <ActivePayoutCard key={card.id} data={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PayoutsPage;
