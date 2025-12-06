
import {Button } from '@heroui/react'
const Gold_Member = () => {
  return (
     <div className="max-w-7xl  mx-auto px-4 overflow-hidden relative bg-black h-[409px] rounded-4xl sm:px-6 mt-[150px] flex flex-col justify-center items-center ">
            <div className="w-[750px] absolute -top-52 -left-52 h-[750px] rounded-full 
      bg-[radial-gradient(circle,#04B9E8_2%,rgba(4,185,232,0.01)_100%)] opacity-35
      blur-[100px]">
    </div>
            <div className="w-[750px] absolute -bottom-52 -right-52 h-[750px] rounded-full 
      bg-[radial-gradient(circle,#04B9E8_0%,rgba(4,185,232,0.01)_100%)] opacity-35
      blur-[100px]">
    </div>
             <h1 className="text-5xl text-white relative z-10 text-center" >Are you want to become a <br /> <span className="text-gold" >Gold Member</span></h1>
              <Button radius='full' className="relative z-10 mt-8 px-8 py-4 bg-gold text-black  font-nasa font-semibold hover:bg-primary/80 transition" >Get Started</Button>
      </div>
  )
}

export default Gold_Member
