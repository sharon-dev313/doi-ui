import Gold_Member from "../components/ui/Gold_Member";
import StatCard from "../components/sweepstakes-past-winners/StatCard";
import WinnerCard from "../components/sweepstakes-past-winners/WinnerCard";
import { Card, CardBody, Button, Avatar } from "@heroui/react";
import Hero from "../components/ui/Hero";
import StoriesBehind from "../components/sweepstakes-past-winners/StoriesBehind";

const Seepstakes_Past_Winner = () => {
  const TrophyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-[#00C2FF]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.499a2 2 0 00-1.702-1.917C12.846 7.429 13.75 6.166 13.75 4.625c0-1.036-.84-1.875-1.875-1.875h-3.75c-1.036 0-1.875.84-1.875 1.875 0 1.541.904 2.804 2.022 2.957a2 2 0 00-1.7 1.917v5.937m9.5 0h-9.5"
      />
    </svg>
  );

  const DollarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-[#00C2FF]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const ChartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-[#00C2FF]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
  const stats = [
    {
      id: 1,
      icon: <TrophyIcon />,
      value: "10",
      label: "Total Winners",
    },
    {
      id: 2,
      icon: <DollarIcon />,
      value: "$25,700",
      label: "Total Prizes Awarded",
    },
    {
      id: 3,
      icon: <ChartIcon />,
      value: "$2,570",
      label: "Average Prize",
    },
  ];
  const statsData = [
    {
        id: 1,
        value: "10",
        label: "Total Winners",
        icon: <img src="/images/sweepstakes-past-winners/icons/1.svg" alt="Total Winners" />,
    },
    {
        id: 2,
        value: "$25,700",
        label: "Total Prizes Awarded",
        icon: <img src="/images/sweepstakes-past-winners/icons/2.svg" alt="Total Prizes Awarded" />,
    },
    {
        id: 3,
        value: "$2570",
        label: "Average Prize",
        icon: <img src="/images/sweepstakes-past-winners/icons/3.svg" alt="Average Prize" />,
    },
];
  const statsData2 = [
    {
        id: 1,
        value: "Monthly Payouts",
        label: "Receive fixed monthly payments for an extended period",
        icon: <img src="/images/sweepstakes-past-winners/icons/8.svg" alt="Total Winners" />,
    },
    {
        id: 2,
        value: "Thriving Community",
        label: "Join a community of winners and investors",
        icon: <img src="/images/sweepstakes-past-winners/icons/9.svg" alt="Total Prizes Awarded" />,
    },
    {
        id: 3,
        value: "More Opportunities",
        label: "Get access to exclusive investment opportunities",
        icon: <img src="/images/sweepstakes-past-winners/icons/10.svg" alt="Average Prize" />,
    },
];
  const winnersData = [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      username: "0x35F6...B953",
      wave: "Wave #10",
      amount: "2000 USD",
      frequency: "One Time",
      date: "September 17, 2025",
    },
    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      username: "0x9E0d...80d5",
      wave: "Wave #09",
      amount: "100 USD",
      frequency: "30 periods (DAY)",
      date: "August 18, 2025",
    },
    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      username: "0x27Ef...911b",
      wave: "Wave #08",
      amount: "500 USD",
      frequency: "02 periods (DAY)",
      date: "August 16, 2025",
    },
    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      username: "0xc9B4...e2a6",
      wave: "Wave #07",
      amount: "1000 USD",
      frequency: "One Time",
      date: "August 08, 2025",
    },
    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      username: "0x27Ef...911b",
      wave: "Wave #06",
      amount: "700 USD",
      frequency: "One Time",
      date: "August 07, 2025",
    },
    {
      id: "6",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      username: "0xc9B4...e2a6",
      wave: "Wave #05",
      amount: "200 USD",
      frequency: "30 periods (DAY)",
      date: "August 03, 2025",
    },
    {
      id: "7",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      username: "0x35F6...B953",
      wave: "Wave #04",
      amount: "100 USD",
      frequency: "30 periods (DAY)",
      date: "August 02, 2025",
    },
    {
      id: "8",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      username: "0x9E0d...80d5",
      wave: "Wave #03",
      amount: "100 USD",
      frequency: "30 periods (DAY)",
      date: "July 31, 2025",
    },
  ];
  return (
    <div>
      <Hero
        title1={"Past Winners"}
        title2={""}
        image={"/images/sweepstakes-past-winners/banner.png"}
      />

      <StoriesBehind 
                 title = { <h2 className="text-3xl md:text-4xl lg:text-5xl font-nasa text-black shrink-0">
              Discover the Stories Behind <br />
              Our <span className="text-doiblue">Past Winners</span>
            </h2>}
            image = {"/images/sweepstakes-past-winners/house_1.png"}
             data = {statsData}/>




      <section className="w-7xl mx-auto py-16 bg-white">
        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-5xl font-nasa text-black">
            Explore Our <span className="text-doiblue">Recent Winners</span>
          </h2>
          <Button
            className="bg-doiblue text-black font-nasa font-bold px-8 rounded-full"
            size="lg"
          >
            See More
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {winnersData.map((winner) => (
            <WinnerCard key={winner.id} data={winner} />
          ))}
        </div>
      </section>



       <StoriesBehind 
       right={true}
                 title = { <h2 className="text-3xl md:text-4xl lg:text-5xl font-nasa text-black shrink-0">
              Why Winners <span className="text-doiblue">Love Doi</span>
            </h2>}
            image = {"/images/sweepstakes-past-winners/house_2.png"}
             data = {statsData2}/>

      <Gold_Member
        title={"Ready to  "}
        GoldTitle={""}
        BlueTitle={"Win"}
        paragraph1={"Join our sweepstakes for a chance to win monthly payments and become "}
        paragraph2={"part of our growing community of winners."}
        Seepstakes={true}
        ButtonText={"Enter Sweepstakes"}
        ButtonFunction={() => {}}
      />
    </div>
  );
};

export default Seepstakes_Past_Winner;
