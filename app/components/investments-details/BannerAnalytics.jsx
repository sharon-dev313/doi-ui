import React from 'react'

const BannerAnalytics = ({ image ,  AnalyticsData}) => {
  return (
      <div className="w-full mx-auto py-16 flex flex-col lg:flex-row gap-6">
        {/* Left Image Section */}
        <div className="w-full  relative h-fit lg:h-auto">
          <img
            src={image}
            alt="Modern House"
            fill
            className="object-cover h-full w-auto  rounded-3xl shadow-md"
            priority
          />
        </div>

        {/* Right Stats Section */}
        <div className="w-full lg:w-1/4  flex flex-col gap-5">
          {AnalyticsData.map((item) => (
            <div
              key={item.id}
              className={`${item.title === "Bedrooms" || item.title === "Bathrooms" ? "bg-lightblue-100" : "bg-doilight-100" } p-6 rounded-3xl flex items-center gap-6 h-full `}
            >
              <div className="bg-white p-3 rounded-full shadow-sm">
                <img

                  src={item.icon}
                  alt="Modern House"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-nasa text-black">
                  {item.value}
                </span>
                <span className="text-default-600  text-lg">{item.title}</span>
              </div>
            </div>
          ))}
      
        </div>
      </div>
  )
}

export default BannerAnalytics
