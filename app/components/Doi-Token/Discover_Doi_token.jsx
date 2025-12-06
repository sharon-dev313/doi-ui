import {Card, CardFooter, Button , Avatar, AvatarGroup, Image, CardBody} from '@heroui/react'

const Discover_Doi_token = ({title , paragraph , SubCards , review , ListItems }) => {
  return (
   <div className="max-w-7xl mx-auto px-4  sm:px-6 mt-[150px] lg:px-8 flex justify-center gap-[24px]" >
          <div className="flex flex-col gap-[10px] max-w-[464px]" >
             {title}
              <p className="text-lg mt-4 text-default-600 max-w-lg">
                {paragraph}
              </p>
                
               
                 <Button variant="solid" color="primary" radius="full" size="lg" className="font-nasa text-black">
                  Buy Tokens
                </Button>

          {!SubCards ? (
            <div className='flex ' >
             

                    <div className='w-full border-r-1' >
                      <h1>09</h1>
                      <p>Total Winners</p>
                    </div>
               
              
          </div>) : (
                <div className="flex gap-[24px] mt-[42px]" >
                    
                        <Card className={"!w-full bg-green-800 bg-red-3004 h-[244px] border-none"} isFooterBlurred  radius="lg">
   
      <CardFooter className=" flex flex-col items-start overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
       <h1 className='text-black text-5xl' >100+</h1>
       <p > Active members</p>
        <AvatarGroup isBordered max={4} className='mt-[16px]'>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

    </AvatarGroup>
      </CardFooter>
    </Card>


{/* Second Card  */}

                        <Card className={"!w-full bg-green-800 bg-red-3004 h-[244px] border-none"} isFooterBlurred  radius="lg">
   
      <CardFooter className=" flex flex-col items-start overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
       <h1 className='text-black text-5xl' >20%</h1>
       <p> Booking Discount</p>
     
      </CardFooter>
    </Card>
                   
                  
                </div>

            )}
          </div>
          <div className="flex gap-[24px] " >
              <Card radius="lg" className="w-[424px] h-[540px] border-none p-0">
  <CardBody className="p-0 ">
    <img
      alt="Woman listening to music"
      src="https://images.unsplash.com/photo-1764911866779-eb31067c0e5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
      className="w-full h-full object-cover"
    />
  </CardBody>
</Card>
                       <Card radius="lg" className="w-[312px] h-[540px] border-none p-0">
  <CardBody className="p-0 ">
    <img
      alt="Woman listening to music"
      src="https://images.unsplash.com/photo-1764377850160-d6250764116f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
      className="w-full h-full object-cover"
    />
  </CardBody>
</Card>

          </div>
     </div>
  )
}

export default Discover_Doi_token
