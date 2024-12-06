import Link from "next/link";
import Image from "next/image";
import {ChevronRight,ArrowRight} from "lucide-react";
import img1 from "../../public/images/hero1.png";
import img2 from "../../public/images/apple.png";


function Hero() {
  return (
    <div>
        


<section className="flex xg:flex-row flex-col-reverse px-4  lg:justify-evenly justify-center items-start">
  
  <div className="py-2 xg:w-[20%] w-full xg:m-0 m-auto sm:px-10 px-0">
        <ul className="py-2 bg-red flex flex-col gap-5 ">
            <li className="flex justify-between  sm:text-[1em] text-[0.9em] font-poppins">Woman's Fashion <ChevronRight size={22}/></li>
            <li className="flex justify-between  sm:text-[1em] text-[0.9em] font-poppins">Men's Fashion <ChevronRight size={22}/></li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Electronics</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Home & Lifestyle</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Medicine</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Sport & Outdoor</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Baby's Collection</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Groceries & Pets</li>
            <li className="sm:text-[1em] text-[0.9em] font-poppins">Healt & Beauty</li>

        </ul>
    
  </div>


<div className="flex lg:text-start text-center lg:gap-0 gap-10 lg:flex-row flex-col items-center py-6 px-8 justify-between xg:m-0 m-auto bg-black text-white">
        <div className="flex flex-col gap-3 ">
            <div className="flex gap-4 text-start items-center">
            <Image src={img2} width={60} alt="apple img iphone" /> 
            <p className=" text-white  font-poppins sm:text-[1.1em] tracking-[2px] text-[1em]">iPhone 14 Series</p>
            
            </div>
            <h1 className="font-normal font-poppins xl:text-4xl xg:text-2xl sm:text-3xl tracking-[4px]   text-2xl ">Up to 10%<br/>  off Voucher</h1>
            <div className="justify-center flex">
                <Link href="/shop" className="flex gap-3 font-poppins underline tracking-[3px]">ShopNow <ArrowRight/></Link>
            </div>
        </div>
        <Image src={img1}   alt="HeroSection image"/>
    </div>

   
</section>




    </div>
  )
}

export default Hero;