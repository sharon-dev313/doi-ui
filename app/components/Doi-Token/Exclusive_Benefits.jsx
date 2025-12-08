
import { Button } from "@heroui/react"
import Card_List from "../ui/Card_List"
import Progress_Card from "../Doi-Gold-Member/Progress_Card"
const Exclusive_Benefits = ({DoiGoldMember_paragraph, data , title , paragraph , image , DoiGoldMember , DoiGoldMember_title}) => {
  

  return (
  <div className={`max-w-7xl  mx-auto  my-16  ${!DoiGoldMember ? "lg:px-8 px-4  sm:px-6" : "lg-4"}  flex flex-col items-center gap-[24px] `}>
    <div className="w-full flex items-center flex-col" >
       {title}
              <p className="text-lg text-default-600 text-center ">
{paragraph}            </p>
    </div>
    <div className="mt-12 w-full flex justify-between items-start gap-12 "  >
          <div className="w-full h-fit  overflow-hidden" >
            <img src={image} alt="banner" className="w-full h-full rounded-4xl object-cover object-center" />
          </div>
          <div className="w-full flex flex-col gap-6 " >
            {
            !DoiGoldMember &&  data?.map((val , id)=>(

                <Card_List key={id} val={val} />
    ))
            }

            {DoiGoldMember &&(
              <>
                 <div className="flex flex-col space-y-8">

                    {/* Progress Card */}
                  <Progress_Card/>

                    {/* Main Heading */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-nasa  uppercase leading-tight text-black tracking-wide">
                           {DoiGoldMember_title}
                        </h1>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-default-600 text-lg leading-relaxed max-w-lg">
                       {DoiGoldMember_paragraph}
                    </p>

                    {/* Button */}
                    <div>
                        <Button
                            className="bg-doiorange hover:bg-doiorange/90 text-black font-nasa text-lg shadow-lg hover:shadow-xl "
                            radius="full"
                            size="lg"
                            css={{ // Legacy NextUI prop, usually not in HeroUI v2+. Using style or className.
                                padding: '1.5rem 2.5rem',
                                height: 'auto'
                            }}
                            style={{
                                padding: '1rem 2.5rem',
                                height: 'auto',
                                minHeight: '3.5rem'
                            }}
                        >
                            Buy Tokens
                        </Button>
                    </div>

                </div>
              
              </>
            )}
          </div>
    </div>
</div>
  )
}

export default Exclusive_Benefits
