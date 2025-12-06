
import {Card, CardHeader,  CardFooter} from "@heroui/react";
const Exclusive_Benefits = () => {
  
const getIcon = (icon) => {
  switch (icon) {
    case "Building":
      return <h1 className="text-black">icon1</h1>;

    case "Sweet":
      return <h1 className="text-black">icon2</h1>;

    case "Card":
      return <h1 className="text-black">icon3</h1>;

    default:
      return <h1 className="text-black">icon1</h1>;
  }
};
  const data = [
    {
      id : 1,
      title : "Property Discounts",
      paragraph : "Get 20% off on all DOI properties whenyou purchase tokens",
      icon : getIcon("Building")
    },
    {
      id : 2,
      title : "Sweepstakes Entry",
      paragraph : "Each token gives you a chance to win incredible prizes",
      icon : getIcon("Sweet")
    },
    {
      id : 3,
      title : "Monthly Payouts",
      paragraph : "Potential for monthly payouts that could change your life",
      icon : getIcon("Card")
    },
  ]
  return (
  <div className="max-w-7xl  mx-auto px-4  sm:px-6 mt-[150px] lg:px-8 flex flex-col items-center gap-[24px] ">
    <div className="w-full flex items-center flex-col" >
        <h2 className="text-3xl lg:text-4xl text-center font-nasa font-bold text-default-800">
                Exclusive  <span className="text-primary font-nasa">Benefits</span>
              </h2>
              <p className="text-lg text-default-600 text-center ">
Owning a DOI Token gives you instant access to valuable perks              </p>
    </div>
    <div className="mt-[50px] w-full flex justify-between gap-[48px] "  >
          <div className="w-full h-[741px]  overflow-hidden" >
            <img src="https://images.unsplash.com/photo-1764915320473-341da8000881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt="banner" className="w-full h-full rounded-4xl object-cover object-center" />
          </div>
          <div className="w-full flex flex-col gap-[24px] " >
            {
              data?.map((val , id)=>(

              
                 <Card  key={val?.id} className="max-w-full bg-[#F2F2F2] p-[24px] h-[231px] rounded-4xl border-none">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
       {val.icon}
     
        </div>
   
      </CardHeader>
      <CardFooter className="px-3 flex flex-col items-start mt-auto mb-5 py-4 text-small text-black">
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
