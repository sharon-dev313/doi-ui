import React from 'react'

const InfoCard = ({ label, value, subtext }) => {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col items-center justify-center text-center  h-full w-full">
        <div className="text-2xl  text-black font-nasa mb-1">{value}</div>
        <div className="text-default-500 text-md font-medium">{label}</div>
        {subtext && <div className="text-default-400 text-xs mt-1">{subtext}</div>}
    </div>
  )
}

export default InfoCard
