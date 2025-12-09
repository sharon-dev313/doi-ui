import { Button } from "@heroui/react";

const Guarantee = ({ title, paragraph, image, icon }) => {
  return (
    <section className="w-7xl mx-auto  py-16 ">
      <div className="bg-primary/25 px-4 py-8 md:px-8 lg:px-16 rounded-4xl overflow-hidden">
        <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-5xl  text-black leading-tight">
              {title}
            </h2>
            <p className="text-default-600 text-xl leading-8 max-w-lg">
              {paragraph}
            </p>
            <div className="pt-4">
              <Button
                className="bg-doiblue font-nasa text-black font-medium px-8 py-6 rounded-full text-lg hover:bg-doiblue/90 transition-colors"
                radius="full"
                size="lg"
              >
                Invest Now
              </Button>
            </div>
          </div>

          {/* Right Column: Cards & Image */}
          <div className="relative flex flex-col gap-6">
            {/* Main House Image Card */}
            <div className="bg-white p-4 rounded-3xl shadow-lg ">
              <div className="relative h-64 md:h-80  w-full rounded-4xl overflow-hidden">
                <img
                  src={image}
                  alt="DOI operational property"
                  fill
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-10 flex flex-col">
                <h1 className="text-2xl flex gap-3.5 items-center font-mono">
                  <span>
                    {" "}
                    <img
                      src={icon}
                      alt="DOI operational property"
                      fill
                      className="w-8 h-auto object-cover"
                    />
                  </span>{" "}
                  Example
                </h1>

                <p className="text-default-600 mt-6 text-sm leading-8">
                  DOI <span className="text-doiblue">El hotel</span> in PDC is
                  worth on market value at{" "}
                  <span className="text-doiblue">1.5 M USD</span> dollars, DOI
                  can only take up to{" "}
                  <span className="text-doiblue">1.4 M dollars</span> from its
                  GOLD members with this property in collateral. Your money is
                  protected by the existing assets. As the ecosystem grows on
                  assets, we can take on more money from our members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
