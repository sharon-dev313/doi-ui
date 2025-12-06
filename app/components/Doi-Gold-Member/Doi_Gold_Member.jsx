import { Avatar, AvatarGroup } from '@heroui/react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Doi_Gold_Member = () => {
  return (
    <div className="bg-[#111314] min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16 relative overflow-hidden">

            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

                {/* Left Column */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-8 lg:space-y-0 relative">
                    {/* Rotate Card Top */}
                    <div className="lg:absolute lg:-top-12 lg:right-4 transform -rotate-12 bg-white text-black p-6 py-8 rounded-3xl shadow-2xl max-w-[330px] z-20 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold mb-2">12%</h2>
                        <p className="text-sm font-medium leading-tight text-gray-600">
                            Invest easily in our Real Estate for 12% annually
                        </p>
                    </div>

                    {/* Spacer for desktop layout relative positioning */}
                    <div className="hidden lg:block h-32"></div>

                    {/* Image Bottom */}
                    <div className="relative h-64 lg:h-80 w-full rounded-[2rem] overflow-hidden border-4 border-[#1a1a1a]">
                        <img
                            src="/images/doi_gold_members/house_1.png"
                            alt="Luxury House Left"
                            fill
                            className=" h-full object-cover"
                        />
                    </div>
                </div>

                {/* Center Column */}
                <div className="lg:col-span-6 flex flex-col items-center text-center text-white space-y-8 pt-8 lg:pt-0">
                    {/* Reviews */}
                    <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm py-2 px-4 rounded-full border border-white/10">
                        <div className="relative px-5 py-2">
                            {/* Using the generated avatar image or fallback if not perfect, simulating overlapping avatars with CSS if needed, but here using the image directly if it looks like a group, or just placeholders */}
                            {/* <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEx1eHVyeSUyMFZpbGxhfGVufDB8fDB8fHww" alt="Reviews" fill className="object-contain" /> */}
                                      
        <AvatarGroup isBordered max={4} >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

    </AvatarGroup>
                        </div>
                        <span className="text-sm font-medium text-white">500+ Reviews</span>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col text-white items-center">
                        <h1 className="text-5xl lg:text-6xl  font-nasa ">
                            DOI GOLD
                        </h1>
                        <h1 className="text-5xl lg:text-6xl font-nasa mt-2">
                            Membership
                        </h1>
                    </div>

                    {/* Benefits List */}
                    <div className="flex flex-col  space-y-4 max-w-lg text-left">
                        <div className="flex items-start justify-center space-x-3">
                            <IoIosCheckmarkCircleOutline className="text-white mt-1 flex-shrink-0" />
                            <p className="text-white text-center text-sm">The membership that will transform your life.</p>
                        </div>
                        <div className="flex items-start justify-center space-x-3">
                            <IoIosCheckmarkCircleOutline className="text-white mt-1 flex-shrink-0" />
                            <p className="text-white text-center text-sm">Enjoy guaranteed crypto income, giving you a steady stream of digital currency earnings.</p>
                        </div>
                        <div className="flex items-start justify-center space-x-3">
                            <IoIosCheckmarkCircleOutline className="text-white mt-1 flex-shrink-0" />
                            <p className="text-white text-center text-sm">Gain exclusive access to over 50 top DOI locations worldwide, with a 40% discount on all DOI properties.</p>
                        </div>
                        <div className="flex items-start justify-center space-x-3">
                            <IoIosCheckmarkCircleOutline className="text-white mt-1 flex-shrink-0" />
                            <p className="text-white text-center text-sm">Explore boundless business opportunities by leveraging smart contracts to unlock limitless potential</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 bg-[#D4AF37] hover:bg-[#b8962e] text-black  py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                        Buy Gold Token
                    </button>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-8 lg:space-y-0 relative">
                    {/* Rotate Card Top */}
                    <div className="lg:absolute lg:-top-8 lg:left-0 transform rotate-12 py-8 bg-[#D4AF37] text-black p-6 rounded-3xl shadow-2xl max-w-[330px] z-20 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold mb-2">40%</h2>
                        <p className="text-sm font-medium leading-tight">
                            Discount on all DOI properties.
                        </p>
                    </div>

                    {/* Spacer for desktop layout relative positioning */}
                    <div className="hidden lg:block h-32"></div>

                    {/* Image Bottom */}
                    <div className="relative h-64 lg:h-80 w-full rounded-[2rem] overflow-hidden border-4 border-[#1a1a1a]">
                        <img
                            src="/images/doi_gold_members/house_2.png"
                            alt="Luxury House Right"
                            fill
                            className=" h-full object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* Footer Text */}
            <div className="mt-16 lg:mt-24 max-w-5xl text-center px-4 relative z-10">
                <p className="text-[#D4AF37] font-nasa leading-12 text-lg lg:text-xl font-medium ">
                    Whether you're a novice investor entering into the realm of real estate for the first time, or a seasoned enterprise seeking streamlined investment avenues, our membership offers simplicity coupled with unparalleled security.
                </p>
            </div>

        </div>
  )
}

export default Doi_Gold_Member
