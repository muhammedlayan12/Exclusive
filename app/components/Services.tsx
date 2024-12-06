import {TruckIcon,Headset,DollarSign} from "lucide-react";
function Services() {
  return (
    <div>
        

        <section className='flex justify-center flex-wrap gap-10 py-28 px-4'>
            <div className=" flex flex-col gap-5 justify-center items-center text-center px-2 py-5">
                <div className='py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full'>
                    <TruckIcon size={75} className='text-white py-3 px-3 bg-black rounded-full'/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='sm:text-[1.5em] text-[1.1em] font-[501] font-poppins'>FREE AND FAST DELIVERY</h2>
                    <p className='sm:text-[1em] text-[0.9em] text-[#636363]'>Free delivery for all orders over $140</p>
                </div>
            </div>

            
            <div className=" flex flex-col gap-5 justify-center items-center text-center px-2 py-5">
                <div className='py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full'>
                    <Headset size={75} className='text-white py-3 px-3 bg-black rounded-full'/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='sm:text-[1.5em] text-[1.1em] font-[501] font-poppins'>FREE AND FAST DELIVERY</h2>
                    <p className='sm:text-[1em] text-[0.9em] text-[#636363]'>Free delivery for all orders over $140</p>
                </div>
            </div>

            
            <div className=" flex flex-col gap-5 justify-center items-center text-center px-2 py-5">
                <div className='py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full'>
                    <DollarSign size={75} className='text-white py-3 px-3 bg-black rounded-full'/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='sm:text-[1.5em] text-[1.1em] font-[501] font-poppins'>FREE AND FAST DELIVERY</h2>
                    <p className='sm:text-[1em] text-[0.9em] text-[#636363]'>Free delivery for all orders over $140</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services;