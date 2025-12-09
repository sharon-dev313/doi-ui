import React from 'react'

const SubCard = ({data}) => {
  return (
      <div  className="flex   gap-[15px]">
              <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center overflow-hidden bg-white">
                {data.icon}
              </div>
              <div className="flex flex-col w-[407px] gap-2 ">
                <h3 className="text-xl  font-nasa text-default-800">
                  {data.Title}
                </h3>
                <p className="text-default-600">{data.paragraph}</p>
              </div>
            </div>
  )
}

export default SubCard
