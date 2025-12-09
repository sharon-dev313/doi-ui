import React from "react";
import { Breadcrumbs, BreadcrumbItem, Button } from "@heroui/react";
import { useParams } from "react-router";
import BannerAnalytics from "../components/investments-details/BannerAnalytics";
import FeaturesAmenities from "../components/investments-details/FeaturesAmenities";
import PropertyDetails from "../components/investments-details/PropertyDetails";
import InvestmentDetails from "../components/investments-details/InvestmentDetails";
const investmentFinderDetails = () => {
  const { id } = useParams();

  const AnalyticsData = [
    {
      id: 1,
      icon: "/images/investment-details/icons/3.svg",
      title: "Size",
      value: "185",
    },
    {
      id: 2,
      icon: "/images/investment-details/icons/4.svg",
      title: "Bedrooms",
      value: "3",
    },
    {
      id: 3,
      icon: "/images/investment-details/icons/5.svg",
      title: "Bathrooms",
      value: "3",
    },
    {
      id: 4,
      icon: "/images/investment-details/icons/6.svg",
      title: "Year Built",
      value: "2024",
    },
  ];
  const Features_Amenities_Data = [
    {
      title: "Garden",
      description:
        "A peaceful, well-maintained garden perfect for relaxation, quiet walks, and enjoying the outdoors.",
    },
    {
      title: "Pool",
      description:
        "A clean and refreshing swimming pool ideal for exercise, leisure, and quality time with family and friends.",
    },
    {
      title: "Parking",
      description:
        "Dedicated secure parking to ensure your vehicle is protected at all times, offering peace of mind and easy access.",
    },
  ];


  const PROPERTY_DATA = {
    id: "doi-townhouse",
    name: "DOI Townhouse",
    location: "Tulum",
    description: [
        "Welcome to DOI Townhouse, a stunning 3-bedroom luxury home located in the serene surroundings of Tulum. Surrounded by beautiful cenotes and lush nature, this brand-new property offers an ideal escape just 10 minutes from Tulum's vibrant center and its world-famous beaches.",
        "With elegant architecture, spacious interiors, and high-end finishes, DOI Townhouse provides a perfect balance of style and comfort. Its open design brings in natural light and fresh jungle breezes, creating a warm and inviting atmosphere for families or groups of friends. Whether you're relaxing in the living area, exploring nearby cenotes, or spending a day at the beach, this townhouse offers the perfect base for your Tulum experience."
    ],
    investment: {
        description: "This property offers a 12% APY return over a 30 days lock period. The minimum investment is $100.",
        totalValue: 399000,
        apy: 12,
        minInvestment: 100,
        lockPeriodDays: 30,
        currentRaised: 132100,
        currency: "USDT"
    },
    mapLocation: {
        lat: 20.21,
        lng: -87.46,
        price: 399000
    }
};



  return (
    <div className="py-32 w-7xl mx-auto  flex flex-col items-start justify-center">
      {/* Heading Section Start */}
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-5">
          <Breadcrumbs>
            <BreadcrumbItem>
              {" "}
              <img
                src="/images/investment-details/icons/1.svg"
                alt="Investments Details"
              />{" "}
              Home
            </BreadcrumbItem>
            <BreadcrumbItem>Investments</BreadcrumbItem>
            <BreadcrumbItem>
              {" "}
              <span className="text-doiblue">{id}</span>{" "}
            </BreadcrumbItem>
          </Breadcrumbs>

          <h1 className="text-5xl text-black">Doi TownHouse #1</h1>
          <Breadcrumbs
            classNames={{
              list: "gap-2",
            }}
            itemClasses={{
              item: [
                "px-2 py-0.5 text-md border-none rounded-small",
                "data-[current=true]:border-none data-[current=true]:bg-success/20 data-[current=true]:text-success transition-colors",
                "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
              ],
              separator: "hidden",
            }}
            size="md"
          >
            <BreadcrumbItem key="home" isCurrent={"home"}>
              <img
                src="/images/investment-details/icons/8.svg"
                alt="Investments Details"
              />
               Tulum
            </BreadcrumbItem>
            <BreadcrumbItem key="music" isCurrent={"music"}>
             <img
                src="/images/investment-details/icons/7.svg"
                alt="Investments Details"
              /> 
              Residential
            </BreadcrumbItem>
            <BreadcrumbItem key="ACTIVE" isCurrent={true}>
              ACTIVE
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div>
          <Button
            radius="4xl"
            className="border border-success bg-transparent text-success flex gap-2 px-4 py-4 text-lg hover:bg-doiblue/80 transition"
          >
            <img
              src="/images/investment-details/icons/2.svg"
              alt="DOI Investments"
            />{" "}
            Share
          </Button>
        </div>
      </div>
      {/* Heading Section End */}
      <BannerAnalytics
        image={"/images/investment-details/home_1.png"}
        AnalyticsData={AnalyticsData}
      />

      <FeaturesAmenities
        paragraph={
          "Designed to offer comfort, convenience, and a premium living experience, our property provides a balanced mix of nature, leisure, and security. "
        }
        heading={
          <span>
            Features & <span className="text-doiblue"> Amenities </span>
          </span>
        }
        Features_Amenities_Data={Features_Amenities_Data}
      />

       <div className="min-h-screen bg-white font-sans ">
            <div className=" mx-auto flex gap-8 ">
                <div className="w-full ">
                    <PropertyDetails data={PROPERTY_DATA} />
                </div>
                <div className="w-[80%]">
                    <InvestmentDetails data={PROPERTY_DATA} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default investmentFinderDetails;
