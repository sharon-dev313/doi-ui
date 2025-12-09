import React from 'react'

const FeaturesAmenities = ({heading , paragraph ,  Features_Amenities_Data}) => {
  return (
    <section className="w-full py-16 flex flex-col items-center" >
            <div className="flex flex-col items-center text-center gap-3" >
                <h1 className="text-5xl font-nasa " >{heading}</h1>
                <p className="text-lg text-default-700 leading-8 mx-auto w-2/3" >{paragraph}</p>
            </div>

            <div className="py-10" >
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
                {Features_Amenities_Data.map((card, index) => (
                    <div key={index} className="bg-gray rounded-3xl p-8 flex flex-col justify-center">
                        <h3 className="text-3xl  text-black mb-4 leading-8 font-nasa">{card.title}</h3>
                        <p className="text-default-600 font-medium leading-relaxed">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
            </div>
    </section>
  )
}

export default FeaturesAmenities
