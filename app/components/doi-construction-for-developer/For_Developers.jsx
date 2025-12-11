import { Button } from "@heroui/react";
const For_Developers = ({gridItems , features , title , description}) => {
  return (
    <section className="w-7xl py-20 mx-auto bg-white dark:bg-black overflow-hidden">
      <div className="w-full mx-auto flex flex-col xl:flex-row gap-10 items-center">
        {/* Left Content Section */}
        <div className="w-full xl:w-1/2 flex flex-col gap-8">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-nasa md:text-6xl ">
              {title}
            </h2>
            <p className="text-default-600 dark:text-gray-300 text-lg  max-w-2xl">
           {description}
            </p>
          </div>
          {/* Features List */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-4">
                <span className="shrink-0 text-cyan-500">
                  <img
                    src="/images/doi-construction-for-developer/icons/1.svg"
                    alt={feature.text}
                  />
                </span>
                <span className="text-lg font-medium font-nasa text-default-800 dark:text-default-200">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-doiblue text-black text-lg font-nasa rounded-full px-10 py-7"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        {/* Right Grid Section */}
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className={`
                   relative rounded-4xl overflow-hidden aspect-square sm:aspect-auto sm:h-80 
                   ${item.type === "stat" ? "p-8 flex flex-col justify-between transition-colors" : "group"}
                   ${item.className || ""}
                `}
              >
                {item.type === "stat" ? (
                  <>
                    <h3 className="text-4xl md:text-5xl font-nasa text-default-900 dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-default-600 dark:text-default-400 text-lg ">
                      {item.description}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default For_Developers;
