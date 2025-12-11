import { Button } from "@heroui/react";

const PropertyCard = ({ item, handleModel }) => {
  const statusData = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="bg-success/10 text-success text-md  px-3 py-1 rounded-full">
            {status}
          </span>
        );
      case "Completed":
        return (
          <span className="bg-warning/10 text-warning text-md  px-3 py-1 rounded-full">
            {status}
          </span>
        );

      default:
        return null;
    }
  };
  return (
    <div className="bg-white rounded-4xl p-4 shadow-sm border border-default-100 flex flex-col ">
      {/* Image Section */}
      <div className="relative w-full h-80  mb-4 rounded-3xl overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="px-2">
        <div className="flex justify-start gap-5 items-center mb-1">
          <h3 className="text-xl font-nasa text-default-900">{item.title}</h3>
          {statusData(item.status)}
        </div>
        <div className="flex items-center text-default-500 gap-2 text-sm mb-4">
            <img src="/images/my-investments/icons/1.svg" className="w-3 h-auto" alt="location" />
          {item.location}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-nasa text-default-900">
            {item.price}
          </span>
          <span className="text-doiblue text-lg font-nasa">{item.roi}</span>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-md">
            <span className="text-default-600">Investment Date</span>
            <span className="text-default-900 font-medium">
              {item.investmentDate}
            </span>
          </div>
          <div className="flex justify-between text-md">
            <span className="text-default-600">Investment period</span>
            <span className="text-default-900 font-medium">
              {item.investmentPeriod}
            </span>
          </div>
          <div className="flex justify-between text-md items-center">
            <span className="text-default-600">
              Total Earning ({item.totalEarningLabel})
            </span>
            <span className="text-doiblue font-nasa">
              {item.totalEarningValue}
            </span>
          </div>
          <div className="flex justify-between text-md">
            <span className="text-default-600">Distribution</span>
            <span className="text-default-900 font-medium">
              {item.distribution}
            </span>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-end">
          <span className="text-md font-medium text-gray-900">
            Investment Progress
          </span>
          <span className="text-sm text-default-600">Ending soon</span>
        </div>
        <div className="h-3 w-full bg-default-200 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-lime rounded-full transition-all duration-300"
            style={{ width: `${item.progress}%` }}
          />
        </div>
        <div className="flex gap-4">
          <Button className="flex-1 bg-primary/30  text-default-900 font-nasa rounded-2xl text-md h-12">
            View Property
          </Button>
          <Button
            onPress={() => handleModel(item.id)}
            className="flex-1 bg-doiblue  text-black font-nasa rounded-2xl text-md h-12 shadow-md"
          >
            View Investment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
