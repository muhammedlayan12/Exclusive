import Image from "next/image";
import Link from "next/link";
import {ArrowRight,ArrowLeft,Star,Eye,Heart} from "lucide-react";
import img1 from "../../public/images/product1.png";
import img2 from "../../public/images/product2.png";
import img3 from "../../public/images/product3.png";
import img4 from "../../public/images/product4.png";


function Sales() {

    const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$190.00",
    originalPrice: "$190.00",
    altText: "Product 1 Image",
    imgSrc: img1,
    rating: 4,
    reviews: 50,
    off:"40%",
  },
  {
    id: 2,
    name: "Logitech G502 Hero",
    price: "$80.00",
    originalPrice: "$100.00",
    altText: "Product 2 Image",
    imgSrc: img2,
    rating: 5,
    reviews: 120,
    off:"80%",
  },
  {
    id: 3,
    name: "Razer DeathAdder V2",
    price: "$60.00",
    originalPrice: "$80.00",
    altText: "Product 3 Image",
    imgSrc: img3,
    rating: 4,
    reviews: 200,
    off:"30%",
  },
  {
    id: 4,
    name: "Corsair K95 RGB Keyboard",
    price: "$160.00",
    originalPrice: "$200.00",
    altText: "Product 4 Image",
    imgSrc: img4,
    rating: 5,
    reviews: 80,
    off:"70%",
  },
];
  return (
    <div>
        <section className="flex  flex-col gap-5  px-4 py-28 justify-center">
        
        <div className="flex gap-5 justify-center  text-center flex-wrap items-center">
                <span className="text-red-500 bg-red-500 py-6 px-2 rounded-md">.</span> <h3 className="sm:text-[1.5em] font-poppins font-[510] text-[1em] text-red-500 ">Today's</h3>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-10 text-center m-auto lg:justify-evenly justify-center  items-center">
                
                <h1 className="sm:text-[2.5em] text-[1.7em] font-jost font-[510]">
            Flash Sales</h1>
            <div className="grid sm:grid-cols-7 grid-cols-3 gap-2 items-center ">
                <div  className="flex flex-col items-center">
                    <span className="text-[#444] sm:text-[1.1em] text-[1em]">Days</span>
                    <p className="sm:text-[2.8em] text-[2em] font-semibold">03</p>
                </div>
                <span className="text-red-500 text-[1.6em] font-bold">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-[#444] sm:text-[1.1em] text-[1em]">Hour</span>
                    <p className="sm:text-[2.8em] text-[2em] font-semibold">12</p>
                </div>
                <span className="sm:text-red-500 hidden sm:block text-[1.6em] font-bold">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-[#444] sm:text-[1.1em] text-[1em]">Minutes</span>
                    <p className="sm:text-[2.8em] text-[2em] font-semibold">34</p>
                </div>
                <span className="text-red-500  text-[1.6em] font-bold">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-[#444] sm:text-[1.1em] text-[1em]">Seconds</span>
                    <p className="sm:text-[2.8em] text-[2em] font-semibold">49</p>
                </div>

                
            </div>
            
            <div className="flex gap-8 flex-row-reverse">
                <ArrowRight className="" size={30}/>
                <ArrowLeft className="" size={30}/>
            </div>

           
        </div>


        <div className="grid xg:grid-cols-3  md:grid-cols-2 grid-cols-1 m-auto justify-center gap-7">
{products.map((items => (
    
    <div key={items.id}  className="sm:w-[35vmin] relative m-auto w-[90%]  py-4 px-4 rounded-lg border border-[#939393]">
      <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">{items.off}</div>
      <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
        <Heart size={40} className="rounded-full py-2 px-2 "/>
        <Eye size={40} className="rounded-full py-2 px-2 "/>
      </div>
    <Image src={items.imgSrc} className="transform hover:scale-110 transition-all duration-500" alt={items.altText}/> 
    <div className="flex flex-col gap-2 mt-3">
        <p className="sm:text-[1.1em] text-[1em] font-poppins">{items.name}</p>
        <div className="flex gap-2 items-center">
        <p className="sm:text-[1.1em] text-[1em] font-poppins text-red-500">{items.price}</p>
        <p className="sm:text-[0.9em] line-through text-[0.7em] text-[#838383] font-poppins">{items.originalPrice}</p>
        </div>
        <div className="flex gap-2 items-center">
            <Star size={15} className="text-yellow-400"/>
            <Star size={15} className="text-yellow-400"/>
            <Star size={15} className="text-yellow-400"/>
            <Star size={15} className="text-yellow-400"/>
            <span>{items.reviews}</span></div>
    </div>
    </div>
    
    
)))} 


        </div>
        <div className="m-auto">
            
        <Link href="/shop" className="text-center rounded-md py-3 px-6 bg-red-500 font-poppins ">View All Products</Link>
        </div>
        </section>
    </div>
  )
}

export default Sales;