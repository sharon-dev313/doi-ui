import { Button } from "@heroui/react";


const NotFound = ({ title, paragraph, buttonFunction }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-white p-4">
      {/* Icon Section */}
      <div className="mb-8 relative">
        <img src="/images/my-investments/icons/2.svg" alt="not found" />
      </div>
      {/* Text Section */}
      <div className="text-center space-y-2 mb-8">
        <h2
          className="text-3xl font-medium font-nasa text-black"
        >
          {title}
        </h2>
        <p
          className="text-default-500 text-sm md:text-base font-light"
        >
          {paragraph}
        </p>
      </div>
      {/* Button Section */}
      <Button
        className="bg-primary text-balck font-nasa rounded-full px-10 py-6 text-md "
        size="lg"
        onPress={buttonFunction}
      >
        Browse Properties
      </Button>
    </div>
  );
};

export default NotFound;
