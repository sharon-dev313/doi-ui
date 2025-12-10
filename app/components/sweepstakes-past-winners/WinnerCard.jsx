import React from "react";
import { Card, CardBody, Button, Avatar } from "@heroui/react";
import { FaCheckCircle, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const WinnerCard = ({ data }) => {
  return (
    <Card className="w-full rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <CardBody className="p-6 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Avatar
            src={data.avatar}
            className="w-14 h-14 text-large"
            color="default"
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-lg  text-default-900">{data.username}</h3>
            <div className="flex items-center gap-1.5 px-1 py-0.5 rounded-full  text-lime text-lg ">
              <img
                src="/images/sweepstakes-past-winners/icons/4.svg"
                alt={data.username}
              />
              <span>{data.wave}</span>
            </div>
          </div>
        </div>

        {/* Details List */}
        <div className="flex flex-col gap-4">
          {/* Amount */}
          <div className="flex items-center gap-1 text-default-700">
            <div className="p-1 rounded-full ">
              <img
                src="/images/sweepstakes-past-winners/icons/5.svg"
                alt={data.username}
              />
            </div>
            <span className="text-black text-lg">{data.amount}</span>
          </div>

          {/* Frequency */}
          <div className="flex items-center gap-1 text-default-500">
            <div className="p-1">
              <img
                src="/images/sweepstakes-past-winners/icons/6.svg"
                alt={data.username}
              />
            </div>
            <span className="text-sm font-medium">{data.frequency}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1 text-default-500">
            <div className="p-1">
              <img
                src="/images/sweepstakes-past-winners/icons/7.svg"
                alt={data.username}
              />
            </div>
            <span className="text-sm font-medium">{data.date}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className="w-full  bg-lightblue/20 font-nasa text-lightblue  text-sm rounded-xl mt-2 "
          size="lg"
          variant="flat"
        >
          View on Blockchain
        </Button>
      </CardBody>
    </Card>
  );
};

export default WinnerCard;
