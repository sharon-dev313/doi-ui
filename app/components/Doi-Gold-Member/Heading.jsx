
import { Button } from "@heroui/react"
const Heading = ({title , paragraph , how_It_works}) => {
  return (
       <div className="w-7xl  py-10 flex gap-1 justify-between items-center">
        <h1 className="text-5xl">{title}</h1>
        <div className="flex flex-col" >

        <p className="ps-36 text-xl leading-7 w-2xl">{paragraph}</p>
       {how_It_works && (

       
        <Button
            variant="solid"
            radius="full"
            size="lg"
            className="font-nasa ms-auto w-xs mt-10 bg-doiblue text-black"
          >
            Get Started
          </Button>
          )}
        </div>
      </div>
  )
}

export default Heading
