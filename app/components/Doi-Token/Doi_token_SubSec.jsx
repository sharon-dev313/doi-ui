import {
  Card,
  CardFooter,
  Button,
  Avatar,
  AvatarGroup,
  Image,
  CardBody,
} from "@heroui/react";

const Discover_Doi_token = ({
  title,
  sweepstakesCountData,
  paragraph,
  SubCards,
  review,
  ListItems,
  FAQ,
  FaqItems,
  ImageItems1,
  ImageItems2,
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-4  sm:px-6 py-16 lg:px-8 flex justify-center ${!SubCards ? "gap-[150px]" : "gap-[24px]"} `}
    >
      <div className="flex flex-col gap-[10px] min-w-[464px]">
        {!SubCards && review && !FAQ && (
          <div className="flex items-center gap-[24px]">
            <AvatarGroup isBordered max={4}>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            </AvatarGroup>
            <span className="text-[#04B9E8]">{review}</span>
          </div>
        )}
        {title}
        <p className="text-lg mt-5 text-default-600 max-w-lg">{paragraph}</p>

        {SubCards && (
          <Button
            variant="solid"
            radius="full"
            size="lg"
            className="font-nasa w-[212px] mt-10 bg-[#04B9E8] text-black"
          >
            Buy Tokens
          </Button>
        )}
        {!SubCards && !FAQ ? (
          <>
            <div className="flex gap-8 mt-12 ">
              {sweepstakesCountData?.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-full ${index !== sweepstakesCountData.length - 1 ? "border-r border-default-200" : ""}   `}
                >
                  <h1 className="text-3xl leading-[34px] font-nasa">
                    {item.value}
                  </h1>
                  <p className="text-default-600">{item.text}</p>
                </div>
              ))}
            </div>
            {!SubCards && (
              <Button
                variant="solid"
                color="primary"
                radius="full"
                size="lg"
                className="font-nasa w-xs mt-auto text-black"
              >
                View More
              </Button>
            )}
          </>
        ) : SubCards && !FAQ ? (
          <div className="flex gap-[24px] mt-auto">
            <Card
              className={
                "!w-full bg-[#F3F5F9] h-[244px] shadow-none  !border-none"
              }
              radius="lg"
            >
              <CardFooter className=" flex flex-col items-start overflow-hidden ps-6 py-6 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
                <h1 className="text-black text-5xl">100+</h1>
                <p> Active members</p>
                <AvatarGroup isBordered max={4} className="mt-[16px]">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                </AvatarGroup>
              </CardFooter>
            </Card>

            {/* Second Card  */}

            <Card
              className={
                "!w-full bg-[#E6F8FD] shadow-none h-[244px] border-none"
              }
              isFooterBlurred
              radius="lg"
            >
              <CardFooter className=" flex flex-col items-start overflow-hidden ps-6 shadow-none py-6 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
                <h1 className="text-black text-5xl">20%</h1>
                <p> Booking Discount</p>
              </CardFooter>
            </Card>
          </div>
        ) : FAQ ? (
          <div className="flex flex-col gap-6 mt-8">
            <h1 className="text-2xl font-nasa leading-[34px]">
              Still have a question?
            </h1>
            <p className="text-default-600">
              Don’t worry we’re free for consultation, just click button below.
            </p>

            <Button
              variant="solid"
              color="primary"
              radius="full"
              size="lg"
              className="font-nasa w-xs mt-10 text-black"
            >
              Any Question
            </Button>
          </div>
        ) : null}
      </div>

      {/* Second Column  */}

      {SubCards && !FAQ && (
        <div className="flex gap-[24px] ">
          <Card
            radius="lg"
            className="w-[424px] h-fit shadow-none border-none p-0"
          >
            <CardBody className="p-0 ">
              <img
                alt="House on a couch"
                src={ImageItems1}
                className="w-full h-full object-cover"
              />
            </CardBody>
          </Card>
          <Card
            radius="lg"
            className="w-[312px] shadow-none h-full border-none p-0"
          >
            <CardBody className="p-0 ">
              <img
                alt="House on a couch"
                src={ImageItems2}
                className="w-full h-full object-cover"
              />
            </CardBody>
          </Card>
        </div>
      )}
      {!SubCards && !FAQ && (
        <div className="flex w-[580px] flex-col mt-8 border gap-[76px] rounded-3xl bg-[#e6f8fd] p-8">
          {ListItems.map((item, index) => (
            <div key={index} className="flex   gap-[15px]">
              <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center overflow-hidden bg-white">
                {item.icon}
              </div>
              <div className="flex flex-col w-[407px] gap-2 ">
                <h3 className="text-xl  font-nasa text-default-800">
                  {item.Title}
                </h3>
                <p className="text-default-600">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {FAQ && (
        <div className="flex w-[580px] flex-col  gap-[24px] rounded-3xl  p-8">
          {FaqItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-[15px] pb-4
      ${index !== FaqItems.length - 1 ? "border-b border-default-200" : ""}`}
            >
              <h3 className="text-2xl font-nasa leading-[34px] font-nasa text-default-800">
                {item.Question}
              </h3>

              <p className="text-default-600">{item.Answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover_Doi_token;
