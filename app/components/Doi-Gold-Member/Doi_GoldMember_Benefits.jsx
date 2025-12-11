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
          className="bg-doiorange py-4  px-8 h-auto  hover:bg-doiorange/90 text-black font-nasa text-lg shadow-lg hover:shadow-xl "
          radius="full"
          size="lg"
        >
          Buy Tokens
        </Button>
      </div>
    </div>
  );
};

export default Doi_GoldMember_Benefits;
