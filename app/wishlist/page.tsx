import Image from "next/image";
import {Trash,Eye,Star} from "lucide-react";
import img1 from "../../public/images/q1.png";
import img2 from "../../public/images/q2.png";
import img3 from "../../public/images/q3.png";
import img4 from "../../public/images/fr1.png";
import img5 from "../../public/images/q5.png";
import img6 from "../../public/images/q6.png";
import img7 from "../../public/images/q7.png";
import img8 from "../../public/images/q8.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";


function page() {

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
          off: "40%",
        },
        {
          id: 2,
          name: "Logitech G502 Hero",
          price: "$80.00",
          originalPrice: "$100.00",
          altText: "Product 2 Image",
          imgSrc: img2,
          rating: 5,
          reviews: 120 
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
          off: "30%",
        },
        {
          id: 4,
          name: "Corsair K95 RGB Keyboard",
          price: "$160.00",
          originalPrice: "$200.00",
          altText: "Product 4 Image",
          imgSrc: img8,
          rating: 5,
          reviews: 80

        },
        
      ];

      let product = [
        {
          id: 1,
          name: "SteelSeries Arctis 7",
          price: "$150.00",
          originalPrice: "$180.00",
          altText: "Product 5 Image",
          imgSrc: img5,
          rating: 4,
          reviews: 95,
          off: "20%",
        },
        {
          id: 2,
          name: "ASUS ROG Strix Impact II",
          price: "$45.00",
          originalPrice: "$60.00",
          altText: "Product 6 Image",
          imgSrc: img6,
          rating: 3,
          reviews: 30,
          off: "25%",
        },
        {
          id: 3,
          name: "HyperX Cloud II Headset",
          price: "$99.00",
          originalPrice: "$130.00",
          altText: "Product 7 Image",
          imgSrc: img7,
          rating: 5,
          reviews: 150,
          off: "35%",
        },
        {
          id: 4,
          name: "Cooler Master MM720 Mouse",
          price: "$35.00",
          originalPrice: "$50.00",
          altText: "Product 8 Image",
          imgSrc: img4,
          rating: 4,
          reviews: 65,
          off: "30%",
        },
      ];
  return (
    <div>

        <Header></Header>
        <Navbar></Navbar>

        <section className="flex font-poppins justify-center gap-16 px-4 py-18 items-center  flex-col text-center my-20">

          <h1 className="text-start text-[1.7em] ">{`Wislist (${products.length})`}</h1>

        <div className="grid xg:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto justify-center gap-7">
{products.map((items => (
    
    <div key={items.id}  className="sm:w-[35vmin] relative m-auto w-[90%]  py-4   rounded-lg border border-[#939393]">
      <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">{items.off}</div>
      <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
        <Trash size={40} className="rounded-full py-2 px-2 "/>
      </div>
      <div className="relative">
    <Image src={items.imgSrc} className="m-auto transform hover:scale-110 transition-all duration-500" alt={items.altText}/>
    <button className={`absolute bottom-0 w-full left-0 right-0 bg-black text-white py-2`}>Add To Cart</button> </div>
    <div className="flex flex-col gap-2 mt-3 px-4">
        <p className="sm:text-[1.1em] text-[1em] font-poppins sm:text-start text-center ">{items.name}</p>
        <div className="flex gap-2 items-center">
        <p className="sm:text-[1.1em] text-[1em] font-poppins text-red-500">{items.price}</p>
        <p className="sm:text-[0.9em] line-through text-[0.7em] text-[#838383] font-poppins">{items.originalPrice}</p>
        </div>
    </div>
    </div>
    
    
)))} 


        </div>


  
       <div className="flex gap-5  text-center flex-wrap items-center">
                <span className="text-red-500 bg-red-500 py-6 px-2 rounded-md">.</span> <h3 className="sm:text-[1.5em] font-poppins font-[510] text-[1em] text-black ">Just For You</h3>
            </div>
            
        
            
        <div className="grid xg:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto justify-center gap-7">
{product.map((items => (
    
    <div key={items.id}  className="sm:w-[35vmin] relative m-auto w-[90%]  py-4   rounded-lg border border-[#939393]">
      <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">{items.off}</div>
      <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
        <Eye size={40} className="rounded-full py-2 px-2 "/>
      </div>
      <div className="relative">
    <Image src={items.imgSrc} className="m-auto transform hover:scale-110 transition-all duration-500" alt={items.altText}/>
    <button className={`absolute bottom-0 w-full left-0 right-0 bg-black text-white py-2`}>Add To Cart</button> </div>
    <div className="flex flex-col gap-2 mt-3 px-4">
        <p className="sm:text-[1.1em] text-[1em] font-poppins sm:text-start text-center ">{items.name}</p>
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

           
       
        </section>

        <Footer></Footer>


    </div>
  )
}

export default page;