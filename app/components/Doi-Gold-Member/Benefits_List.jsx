import React from 'react'
import {
  FaHandHoldingUsd,
  FaKey,
  FaCrown,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import Card_List from "../Doi-Gold-Member/Card_List";
const Benefits_List = () => {
  return (
  <div className="bg-[#D4AF37] p-4 md:p-8 lg:p-16 min-h-screen flex flex-col items-center justify-center">
       
       
       <div className='w-7xl  py-10 flex gap-1 justify-between items-center' >
        <h1 className='text-5xl' >Benefits List of Doi <br />
Gold Membership</h1>
        <p className='ps-36 text-xl leading-7 w-2xl' >Whether you're a novice investor entering into the realm of 
real estate for the first time, or a seasoned enterprise seeking 
streamlined investment avenues</p>
       </div>

       
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Row 1 */}
          {/* Card 1 */}

          <Card_List
            icon={<img src='/images/doi_gold_members/icons/icon_1.svg' alt = "Streamlined investment opportunities" />}
            title={"Streamlined investment opportunities"}
            paragraph={
              "Secure and risk-free way to generate capital with a guaranteed 12% annual return backed by DOI's real estate."
            }
          />
           {/* Card 2 */}
          <Card_List
            icon={<img src='/images/doi_gold_members/icons/icon_2.svg' alt = "Lifetime access to all properties in the DOI ecosystem" />}
            title={"Lifetime access to all properties in the DOI ecosystem"}
            paragraph={
              "At 40% off, creating competitive discounts for your customers and increased profitability for you. Unique offerings."
            }
          />
          {/* Card 3 */}

            <Card_List
            icon={<img src='/images/doi_gold_members/icons/icon_3.svg' alt = "Streamlined investment opportunities" />}
            title={"Premier access to DOI's light steel homes"}
            paragraph={
              " Opportunities for cost savings and efficiency through access to DOI's exclusive building materials and construction."
            }
          />
      

          {/* Row 2 */}
          {/* Image Large - Spans 2 cols */}
          <div className="lg:col-span-2 relative min-h-[300px] rounded-[2rem] overflow-hidden shadow-lg group">
            <img
              src="/images/doi_gold_members/house_3.png"
              alt="Luxury Villa"
              fill
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card 4 */}
             <Card_List
            icon={<img src='/images/doi_gold_members/icons/icon_4.svg' alt = "Access rental properties without the need for property ownership" />}
            title={"Access rental properties without the need for property ownership"}
            paragraph={
              "Reducing financial risk and eliminating upfront costs. Full management services, including maintenance."
            }
          />
      

          {/* Row 3 */}
          {/* Image Small - 1 col */}
          <div className="relative min-h-[300px] rounded-[2rem] overflow-hidden shadow-lg group">
            <img
src="/images/doi_gold_members/house_4.png"              alt="Luxury Home"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card 5 */}
                  <Card_List
            icon={<img src='/images/doi_gold_members/icons/icon_5.svg' alt = "Real estate investment opportunities world wide" />}
            title={"Real estate investment opportunities world wide"}
            paragraph={
              "Grow your money without exposure to market risks, offering a hassle-free and profitable investment opportunity."
            }
          />
        

          {/* Card 6 */}
               <Card_List
            icon={ <img src='/images/doi_gold_members/icons/icon_6.svg' alt = "Access to all properties within the ecosystem" />}
            title={" Access to all properties within the ecosystem"}
            paragraph={
              "At a 40% discount, making travel more affordable for frequent travelers. Convenient amenities already equipped."
            }
          />
        
        </div>
      </div>
  )
}

export default Benefits_List
