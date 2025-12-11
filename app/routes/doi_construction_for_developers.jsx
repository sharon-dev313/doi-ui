import Hero from "../components/ui/Hero";
import Gold_Member from "../components/ui/Gold_Member";
import For_Developers from "../components/doi-construction-for-developer/For_Developers";
import ProcessCard from "../components/doi-construction-for-developer/ProcessCard";
const doi_construction_for_developers = () => {
  const features = [
    { id: 1, text: "We ship worldwide" },
    { id: 2, text: "We can build from any custom architectural plans" },
    { id: 3, text: "We offer exclusive plans and designs at excellent rates" },
    { id: 4, text: "We offer ongoing support" },
  ];

  const gridItems = [
    {
      id: 1,
      type: "stat",
      title: "1 month",
      description: "Structure, exterior walls, and roofing installed",
      className: "bg-gray-100 dark:bg-zinc-800",
    },
    {
      id: 2,
      type: "image",
      src: "/images/doi-construction-for-developer/house_1.png",
      alt: "Modern bathroom vanity",
    },
    {
      id: 3,
      type: "image",
      src: "/images/doi-construction-for-developer/house_2.png",
      alt: "Luxury mirror with lighting",
    },
    {
      id: 4,
      type: "stat",
      title: "1-2 weeks",
      description: "Interior Work: Insulation, drywall, tiling",
      className: "bg-lightblue/10 dark:bg-lightblue/20", // Light blue tint
    },
  ];

  const processData = [
    {
      title: "Land Acquisition",
      description: "You secure your land.",
      image: "/images/doi-construction-for-developer/card_1.png",
      image_large: false,
    },
    {
      title: "Design & Permits",
      description:
        "Develop your plans, designs, and obtain the necessary building permits. We offer exclusive plans and designs at excellent rates.",
      image: "/images/doi-construction-for-developer/card_2.png",
      image_large: false,
      buttonText: "Ask for your Design",
    },
    {
      title: "Material Quotes & Payment",
      description:
        "Receive a quote from us and proceed with payment.  (For Mexico: 30 days production, 60 days delivery)",
      image: "/images/doi-construction-for-developer/card_3.png",
      image_large: false,
    },
    {
      title: "Site Preparation",
      description:
        "We prepare the land and execute laser-leveled foundations, essential for the proper mounting of the steel structure.",
      image: "/images/doi-construction-for-developer/card_4.png",
      image_large: false,
    },
    {
      title: "Shipping & Delivery",
      description:
        "Our materials arrive in 40-foot containers, with a 125 sqm house typically requiring three containers. You can choose to unload on-site or at a warehouse. We recommend purchasing the containers for storage during construction and reselling them afterward.",
      image: "/images/doi-construction-for-developer/card_5.png",
      image_large: false,
    },
    {
      title: "Construction begins",
      description:
        "Lock-Off Period: Structure, exterior walls, and roofing installed (1 month) Plumbing & Electrical:  Installation (1-2 weeks). Interior Work: Insulation, drywall, tiling, and the first coat of paint.  Finishing Touches: Install cabinets, bathroom fixtures, and granite surfaces.",
      image: "/images/doi-construction-for-developer/card_6.png",
      image_large: false,
    },
    {
      title: "Finalization",
      description:
        "We complete the finishing and painting, furnish the space, and hand over the keys. ",
      image: "/images/doi-construction-for-developer/card_7.png",
      image_large: true,
    },
  ];
  return (
    <div>
      <Hero
        title1={"IF YOU CAN IMAGINE IT,"}
        title2={"WE CAN HELP YOU BUILD IT SMARTER"}
        image={"/images/doi-construction-for-developer/banner.png"}
      />
      <For_Developers
        gridItems={gridItems}
        features={features}
        title={
          <span>
            For <span className="text-doiblue">Developers</span>
          </span>
        }
        description={
          "Optimize your build with DOI: Save Time, Money, and Resources. We provide high-end, quality materials with a vast selection for every aspect of your construction project. From galvanized light steel structures to exterior walls, roofing, windows, frames, doors, cabinets, and bathroom sinks—we supply everything you need for your entire build. Our materials arrive all at once, ensuring a fixed price and saving you significant time on logistics."
        }
      />
      <section className="w-7xl mx-auto py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-nasa leading-tight text-black">
            Build a lot faster with DOI,
            <br />
            here is <span className="text-doiblue">the exact process</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {processData.map((item, index) => (
            <ProcessCard key={index} item={item} />
          ))}
        </div>
      </section>
      <Gold_Member
        title={
          "We invite you to visit our showrooms or book a discovery call with us. You can also check "
        }
        GoldTitle={""}
        BlueTitle={"our list of materials."}
        paragraph1={false}
        paragraph2={false}
        Padding={true}
        Seepstakes={true}
        ButtonText={"Get in Touch Now"}
        ButtonFunction={() => {}}
        ButtonText2={"Check our list of metarials"}
        ButtonFunction2={() => {}}
      />
    </div>
  );
};

export default doi_construction_for_developers;
