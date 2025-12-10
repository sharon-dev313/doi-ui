import React from 'react'
import StatCard from './StatCard'

const StoriesBehind = ({data , title , image , right}) => {
  return (
      <section className="w-7xl  mx-auto  py-8 md:py-16">
       {
        right && (

        
        <div className='w-full flex justify-center text-center' >
            {title}
        </div>
        )
       }
        <div className={`grid ${right && "py-12"} grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12`}>
          {/* Left Column: Heading and Image */}

          {!right ? (
            <>
          <div className="lg:col-span-8 flex flex-col gap-6 h-full">
            {title}

            <div className="relative w-full h-[300px] md:h-[400px] lg:h-auto lg:flex-1 rounded-3xl overflow-hidden shadow-sm">
              <img
                src={image}
                alt="Modern white residential building with balconies"
                fill
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            {data.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
          </>
          ) : (
            <>
              {/* Right Column: Stats Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 h-full">
            {data.map((stat) => (
              <StatCard right={right} key={stat.id} {...stat} />
            ))}
          </div>
            
            <div className="lg:col-span-6 flex flex-col gap-6 h-full">
            {!right && title}

            <div className="relative w-full h-full md:h-full lg:h-auto lg:flex-1 rounded-3xl overflow-hidden shadow-sm">
              <img
                src={image}
                alt="Modern white residential building with balconies"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        
</>
          )}
        </div>
      </section>
  )
}

export default StoriesBehind
