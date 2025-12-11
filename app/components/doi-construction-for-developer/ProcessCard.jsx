import { Button, Card, CardBody } from "@heroui/react";

const ProcessCard = ({ item }) => {
  return (
    <div
      className={`flex flex-col gap-4 ${item.image_large ? "md:col-span-2" : ""}`}
    >
      <Card
        className="w-full border-none shadow-none bg-transparent"
        radius="lg"
      >
        <CardBody className="p-0 overflow-visible">
          <img
            alt={item.title}
            className="w-full object-cover h-[300px]"
            radius="lg"
            shadow="sm"
            src={item.image}
            width="100%"
          />
        </CardBody>
      </Card>
      <div className="flex flex-col gap-2 px-1">
        <h3 className="text-xl font-nasa text-black">{item.title}</h3>
        <p className="text-default-600 text-sm max-w-xl">{item.description}</p>
        {item.buttonText && (
          <div className="mt-2">
            <Button
              className="bg-doiblue text-black font-medium rounded-full px-6"
              size="md"
            >
              {item.buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessCard;
