import { Card, CardHeader, CardFooter } from "@heroui/react";

const Card_List = ({ val }) => {
  return (
    <Card
      key={val?.id}
      className="max-w-full bg-[#F2F2F2] shadow-none p-[24px] h-[231px] rounded-4xl border-none"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">{val.icon}</div>
      </CardHeader>
      <CardFooter className="px-3 flex flex-col items-start mt-auto  py-4 text-small text-black">
        <h1 className="text-2xl">{val.title}</h1>
        <p className="pt-2 text-[#444B50]">{val.paragraph}</p>
      </CardFooter>
    </Card>
  );
};

export default Card_List;
