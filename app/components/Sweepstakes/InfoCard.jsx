import { Card, CardHeader, CardBody, Progress } from "@heroui/react";

const InfoCard = ({
  icon,
  title,
  subTitle,
  mainContent,
  subContent,
  progressData,
  variant,
  className,
}) => {
  const bgClass = variant === "blue" ? "bg-doiblue/10" : "bg-lightgraycard";
  return (
    <Card className={`${bgClass} ${className} rounded-3xl shadow-none  `}>
      <CardHeader className="flex items-start gap-4 p-6 pb-0">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center  shrink-0 text-doiblue">
          {icon}
        </div>
        <div className="flex flex-col pt-1">
          <h3 className="text-xl font-nasa text-default-800 ">{title}</h3>
          {subTitle && (
            <p className="text-default-700 text-md mt-1">{subTitle}</p>
          )}
        </div>
      </CardHeader>
      <CardBody className="p-6 pt-6 flex flex-col justify-center overflow-visible z-10">
        {mainContent && (
          <div className="mb-2">
            <h2
              className={` ${mainContent === "$4,000" ? "text-5xl" : "text-2xl"} font-nasa   text-default-900`}
            >
              {mainContent}
            </h2>
            {subContent && (
              <p className="text-default-800 text-md mt-5">{subContent}</p>
            )}
          </div>
        )}

        {/* Progress Section */}
        {progressData && (
          <div className="w-full relative">
            <Progress
              aria-label={progressData.label}
              label={progressData.label}
              value={progressData.current}
              maxValue={progressData.total}
              valueLabel={`${progressData.current}/${progressData.total}`}
              showValueLabel={true}
              classNames={{
                base: "w-full mb-8",
                track: "bg-deafult-900 h-4 rounded-full",
                indicator: "bg-[#9bd941] h-4 rounded-full",
                label: "text-xl font-nasa text-default-800",
                value: "text-gray-500 text-md",
              }}
            />
            <div className="text-center relative z-0">
              <p className="text-default-800 font-medium">
                {progressData.status}
              </p>
              <p className="text-default-500 text-md">
                You have {progressData.userEntries} entries in this wave
              </p>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default InfoCard;
