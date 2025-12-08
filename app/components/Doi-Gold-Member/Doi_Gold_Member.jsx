
import Doi_Gold_Member_Footer from './Doi_Gold_Member_Footer';
import Doi_Gold_Member_Image from './Doi_Gold_Member_Image';
import Doi_Gold_Member_List from './Doi_Gold_Member_List';


const Doi_Gold_Member = ({image2 , image1 , discount_text , discount_percentage , invest_percentage , invest_text ,  avatar , Review_text , title , list , footerText}) => {
  return (
    <div className="bg-darkgray min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:py-28 relative overflow-hidden">

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

                {/* Left Column */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-8 lg:space-y-0 relative">
                    {/* Rotate Card Top */}
                    <div className="lg:absolute lg:-top-12 lg:right-4 transform -rotate-12 bg-white text-black p-6 py-8 rounded-3xl shadow-2xl max-w-[330px] z-20 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold mb-2">{invest_percentage}%</h2>
                        <p className="text-sm font-medium leading-tight text-gray-600">
                            {invest_text}
                        </p>
                    </div>

                    <Doi_Gold_Member_Image image = {image1} />
              
                </div>

                {/* Center Column */}
               <Doi_Gold_Member_List 
               avatar = {avatar}
               Review_text = {Review_text}
               title = {title}
               list = {list}
               />

                {/* Right Column */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-8 lg:space-y-0 relative">
                    {/* Rotate Card Top */}
                    <div className="lg:absolute lg:-top-8 lg:left-0 transform rotate-12 py-8 bg-doiorange text-black p-6 rounded-3xl shadow-2xl max-w-[330px] z-20 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold mb-2">{discount_percentage}%</h2>
                        <p className="text-sm font-medium leading-tight">
                          {discount_text}
                        </p>
                    </div>

                    {/* Image Bottom */}
                     <Doi_Gold_Member_Image image = {image2} />
                 
                </div>

            </div>

            {/* Footer Text */}
        <Doi_Gold_Member_Footer footerText = {footerText}/>

        </div>
  )
}

export default Doi_Gold_Member
