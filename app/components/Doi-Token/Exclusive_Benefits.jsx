
import { Button, Card, CardBody, Progress } from "@heroui/react"
import Card_List from "../ui/Card_List"
const Exclusive_Benefits = ({data , title , paragraph , image , DoiGoldMember}) => {
  

  return (
  <div className={`max-w-7xl  mx-auto  my-16  ${!DoiGoldMember ? "lg:px-8 px-4  sm:px-6" : "lg-4"}  flex flex-col items-center gap-[24px] `}>
    <div className="w-full flex items-center flex-col" >
       {title}
              <p className="text-lg text-default-600 text-center ">
{paragraph}            </p>
    </div>
    <div className="mt-[50px] w-full flex justify-between items-start gap-[48px] "  >
          <div className="w-full h-fit  overflow-hidden" >
            <img src={image} alt="banner" className="w-full h-full rounded-4xl object-cover object-center" />
          </div>
          <div className="w-full flex flex-col gap-[24px] " >
            {
            !DoiGoldMember &&  data?.map((val , id)=>(

                <Card_List key={id} val={val} />
    ))
            }

            {DoiGoldMember &&(
              <>
                 <div className="flex flex-col space-y-8">

                    {/* Progress Card */}
                    <Card className="bg-[#151105] text-white w-full max-w-lg rounded-[2rem] shadow-xl border-none">
                        <CardBody className="p-8 overflow-visible">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-4xl font-nasa font-bold">68%</h3>
                                    <p className="text-white font-nasa text-sm mt-1">Token Earned</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-nasa text-white">
                                        Required <span className="text-[#D4AF37]  font-bold">7 Token</span> for
                                    </p>
                                    <p className="text-sm text-gray-300">DOI Gold member</p>
                                </div>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="relative pt-2 pb-2">
                              

                            <div className="relative w-full">
  <Progress
    aria-label="Token Earned"
    value={68}
    classNames={{
      track: "bg-gray-700 h-6 rounded-full",
      indicator: "bg-[#D4AF37] h-6 rounded-full",
      base: "w-full",
    }}
    size="lg"
  />

  {/* Value label at the end of the bar */}
  <span className="absolute right-1/3 top-1/2 -translate-y-1/2 text-white text-sm">
    13
  </span>
</div>
                                <div className="flex justify-between  text-md mt-2 text-white font-mono">
                                    <span>0</span>
                                    <span>10</span>
                                    <span>20</span>
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>

                    {/* Main Heading */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-nasa  uppercase leading-tight text-black tracking-wide">
                            The Membership That
                            Will <span className="text-[#D4AF37]">Change Your Life</span>
                        </h1>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[#444b50] text-lg leading-relaxed max-w-lg">
                        Unlock exclusive benefits, rewards, and opportunities designed for your success.
                    </p>

                    {/* Button */}
                    <div>
                        <Button
                            className="bg-[#D4AF37] hover:bg-[#b8962e] text-black font-nasa text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
