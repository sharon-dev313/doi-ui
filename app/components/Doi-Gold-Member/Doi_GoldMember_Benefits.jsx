import Progress_Card from "./Progress_Card";
import { Button } from "@heroui/react";
const Doi_GoldMember_Benefits = ({
  DoiGoldMember_title,
  DoiGoldMember_paragraph,
}) => {
  return (
    <div className="flex flex-col space-y-8">
      {/* Progress Card */}
      <Progress_Card />

      {/* Main Heading */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-nasa  uppercase leading-tight text-black tracking-wide">
          {DoiGoldMember_title}
        </h1>
      </div>

      {/* Description Paragraph */}
      <p className="text-default-600 text-lg leading-relaxed max-w-lg">
        {DoiGoldMember_paragraph}
      </p>

      {/* Button */}
      <div>
        <Button
          className="bg-doiorange hover:bg-doiorange/90 text-black font-nasa text-lg shadow-lg hover:shadow-xl "
          radius="full"
          size="lg"
          css={{
            // Legacy NextUI prop, usually not in HeroUI v2+. Using style or className.
            padding: "1.5rem 2.5rem",
            height: "auto",
          }}
          style={{
            padding: "1rem 2.5rem",
            height: "auto",
            minHeight: "3.5rem",
          }}
        >
          Buy Tokens
        </Button>
      </div>
    </div>
  );
};

export default Doi_GoldMember_Benefits;
