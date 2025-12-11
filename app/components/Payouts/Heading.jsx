import { Button } from "@heroui/react";


const Heading = ({
  title,
  sub_title,
  buttonText1,
  buttonFunction1,
  buttonText2,
  buttonFunction2,
  my_investments,
  activeTab
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-4xl font-nasa text-black ">{title}</h1>
        <p className="text-default-500 mt-2 text-lg">{sub_title}</p>
      </div>
      {/* Tabs/Buttons */}
      {buttonText1 && buttonText2 && (
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            radius="full"
            className={`${my_investments && activeTab === "investment" ? "bg-default-900 text-white  " : "bg-default-200 text-black "}  px-6`}
            size="lg"
            onPress={buttonFunction1}
          >
            {buttonText1}
          </Button>
          <Button
            radius="full"
            className={`${my_investments && activeTab === "sweepstakes" ? "bg-default-900 text-white " : "bg-default-200 text-black "}   px-6`}
            size="lg"
            onPress={buttonFunction2}
          >
            {buttonText2}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Heading;
