import Image from "next/image";
import img1 from "../../public/images/s.png";



function Offer() {
  return (
    <div> 
<section className="flex lg:flex-row px-10 lg:text-start text-center justify-between flex-col-reverse items-center my-10 bg-black text-white py-2  sm:mx-10 mx-2">
    <div className="flex flex-col gap-5">
        <span className="text-[1.2em] font-poppins text-[#00ff66] tracking-[1.5px]">Categories</span>
        <h1 className="xg:text-5xl lg:text-3xl text-2xl font-poppins font-normal tracking-[3px]">Enhance Your <br/> Music Experience</h1>
        <div className="flex gap-6 flex-wrap lg:justify-start justify-center">
            <div className="sm:py-6 py-4 items-center  sm:px-6 px-4 bg-white text-black rounded-full justify-center flex flex-col
            "> 
                <span className="text-[2em] font-semibold font-poppins">04</span>
                <p className="text-[1em]">Days</p>
            </div>

            <div  className="sm:py-6 py-4  items-center sm: px-  px-4 bg-white text-black rounded-full justify-center flex flex-col
            ">
                <span className="text-[2em] font-semibold font-poppins">23</span>
                <p className="text-[1em]">Hour</p>
            </div>

            <div  className="sm:py-6 py-4 items-center  sm:px-6 px-4 bg-white text-black rounded-full justify-center flex flex-col
            ">
                <span className="text-[2em] font-semibold font-poppins">34</span>
                <p className="text-[1em]">Minutes</p>
            </div>

            <div  className="sm:py-6 py-4 items-center  sm:px-6 px-4 bg-white text-black rounded-full justify-center flex flex-col
            ">
                <span className="text-[2em] font-semibold font-poppins">54</span>
                <p className="text-[1em]">Second</p>
            </div>
        </div>
      <div>
      <button className="px-8 py-2 bg-[#00ff66] font-poppins rounded-md">Buy Now!</button>
      </div>
    </div>
    
    
    <Image src={img1} className="lg:w-[50%]  md:w-[80%] w-[100%]" alt="Offer Best Speaker"/>
    
</section>

    </div>
  )
}

export default Offer;