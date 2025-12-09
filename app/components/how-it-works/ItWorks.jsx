import React from 'react'
import { FiDatabase, FiLayers } from 'react-icons/fi';
import { IoShapesOutline } from 'react-icons/io5';
const ItWorks = ({itWorksData}) => {
  return (
   <div className="w-full bg-white py-16 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 01 - Smart Contracts */}
                {
                    itWorksData.map((val , id)=>(
                <div key={val.id} className="bg-lightgraycard-100 rounded-4xl p-8 md:p-10 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl md:text-4xl  text-black mb-8 leading-tight">
                       {val.title}
                    </h2>

                    <div className="w-full h-px mt-auto bg-gray-200 mb-3"></div>

                    <p className="text-default-600  text-base leading-8 flex-grow">
                       {val.description}.
                    </p>

                    <div className="flex items-end justify-between mt-4">
                        <div className="text-4xl p-4 bg-white rounded-full">
                            <img src={val.icon} className='w-7 h-7'  alt={val.title} />
                        </div>
                        <span className="text-4xl font-bold text-black">{val.CountNum}</span>
                    </div>
                </div>
))
                }
               
            </div>
        </div>
  )
}

export default ItWorks
