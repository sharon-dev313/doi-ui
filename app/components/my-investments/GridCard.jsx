import PayoutCard from "../Payouts/PayoutCard";
import NotFound from "./NotFound";
import { Button } from "@heroui/react";
import PropertyCard from "./PropertyCard";

const GridCard = ({
  propertyData,
  payoutData,
  visibleCount,
  handleShowMore,
  handleModel,
}) => {
  return (
    <>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-4 gap-6">
        {payoutData.map((item) => (
          <PayoutCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {propertyData.length > 0 ? (
          propertyData
            .slice(0, visibleCount)
            .map((item) => (
              <PropertyCard
                handleModel={handleModel}
                key={item.id}
                item={item}
              />
            ))
        ) : (
          <NotFound />
        )}
      </div>
      {visibleCount < propertyData.length && (
        <div className="flex justify-center mt-8">
          <Button
            className="bg-doiblue  text-black font-nasa rounded-2xl text-md h-12 px-8 shadow-md"
            onPress={handleShowMore}
          >
            Search More
          </Button>
        </div>
      )}
    </>
  );
};

export default GridCard;
