
import {Card, CardHeader,  CardFooter} from "@heroui/react";
const Exclusive_Benefits = ({data , title , paragraph}) => {
  

  return (
  <div className="max-w-7xl  mx-auto px-4  sm:px-6 mt-[150px] lg:px-8 flex flex-col items-center gap-[24px] ">
    <div className="w-full flex items-center flex-col" >
       {title}
              <p className="text-lg text-default-600 text-center ">
{paragraph}            </p>
    </div>
    <div className="mt-[50px] w-full flex justify-between gap-[48px] "  >
          <div className="w-full h-[741px]  overflow-hidden" >
            <img src={"/images/doi-token/home-3.png"} alt="banner" className="w-full h-full rounded-4xl object-cover object-center" />
          </div>
          <div className="w-full flex flex-col gap-[24px] " >
            {
              data?.map((val , id)=>(

              
                 <Card  key={val?.id} className="max-w-full bg-[#F2F2F2] shadow-none p-[24px] h-[231px] rounded-4xl border-none">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
       {val.icon}
     
        </div>
   
      </CardHeader>
      <CardFooter className="px-3 flex flex-col items-start mt-auto  py-4 text-small text-black">
        <h1 className="text-2xl">{val.title}</h1>
        <p className="pt-2 text-[#444B50]">
          {val.paragraph}
       
        </p>
      </CardFooter>

    </Card>
    ))
            }
          </div>
    </div>
</div>
  )
}

export default Exclusive_Benefits
