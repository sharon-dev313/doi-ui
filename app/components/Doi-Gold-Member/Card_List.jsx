import React from 'react'

const Card_List = ({icon , title , paragraph }) => {
  return (
      <div className="bg-[#151105] p-8 rounded-4xl text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-2">
                            {icon}

                        </div>
                        <h3 className="text-xl  leading-8 font-thin font-nasa">{title}</h3>
                        <p className="text-white leading-7 text-sm ">{paragraph}</p>
                    </div>
  )
}

export default Card_List
