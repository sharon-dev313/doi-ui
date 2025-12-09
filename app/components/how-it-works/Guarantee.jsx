import { Button } from "@heroui/react";

const Guarantee = ({ title, paragraph, image, icon , icon2 , subParagraph , imageHeading, imageParagraph,  button, buttonFunction }) => {
  return (
    <section className="w-7xl mx-auto  py-16 ">
      <div className="bg-primary/25 px-4 py-8 md:px-8 lg:px-16 rounded-4xl overflow-hidden">
        <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-5xl  text-black leading-tight">
              {title}
            </h2>
            <p className="text-default-700 text-xl leading-8 max-w-lg">
              {paragraph}
            </p>
            {
              subParagraph && (<p className="text-default-500 text-xl leading-8 mt-8">
              {subParagraph}
            </p>
              )
            }
            <div className="pt-4">
              <Button
                className="bg-doiblue font-nasa text-black font-medium px-8 py-6 rounded-full text-lg hover:bg-doiblue/90 transition-colors"
                radius="full"
                size="lg"
                onClick={buttonFunction}
              >
                {button}
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
                  className="w-auto h-full object-cover"
                />
              </div>
              <div className="mt-10 flex flex-col">
                <h1 className="text-2xl flex gap-3.5 items-center font-mono">
                 {icon && (
                  <span>
                    {" "}
                    <img
                      src={icon}
                      alt="DOI operational property"
                      fill
                      className="w-8 h-auto object-cover"
                    />
                  </span>
                  )}
                  {" "}
                  {imageHeading}
                </h1>

                <p className={`text-default-900 ${icon2 && !icon ? "mt-0" : "mt-6" }  flex gap-3.5 items-center text-sm leading-8`}>
                   {icon2 && (
                     <img
                      src={icon2}
                      alt="DOI operational property"
                      fill
                      className="w-8 h-auto object-cover"
                    />
                    )}
                {imageParagraph} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
