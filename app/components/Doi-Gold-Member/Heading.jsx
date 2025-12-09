
import { Button } from "@heroui/react"
const Heading = ({title , SweepStakes , paragraph , btn , btnFunction}) => {
  return (
       <div className="w-7xl  py-10 flex gap-1 justify-between items-center">
        <h1 className="text-5xl">{title}</h1>
        <div className="flex flex-col" >

        <p className={` text-xl leading-7 ${SweepStakes ? "w-xs ms-auto" : "w-2xl ps-36" } `}>{paragraph}</p>
       {btn && (

       
        <Button
            variant="solid"
            radius="full"
            size="lg"
            onClick={btnFunction}
            className="font-nasa ms-auto w-xs mt-10 bg-doiblue text-black"
          >
            {btn}
          </Button>
          )}
        </div>
      </div>
  )
}

export default Heading
