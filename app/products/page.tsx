import Image from "next/image";
import Link from "next/link";
import {ArrowRight,ArrowLeft,Star,Eye,Heart} from "lucide-react";
import img1 from "../../public/images/q1.png";
import img2 from "../../public/images/q2.png";
import img3 from "../../public/images/q3.png";
import img4 from "../../public/images/fr1.png";
import img5 from "../../public/images/q5.png";
import img6 from "../../public/images/q6.png";
import img7 from "../../public/images/q7.png";
import img8 from "../../public/images/q8.png";







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
          reviews: 120,
          off: "80%",
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
          reviews: 80,
          off: "70%",
        },
        {
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
        <section className="flex  flex-col gap-5  px-4 py-28 justify-center">
        
        <div className="flex gap-5 justify-center  text-center flex-wrap items-center">
                <span className="text-red-500 bg-red-500 py-6 px-2 rounded-md">.</span> <h3 className="sm:text-[1.5em] font-poppins font-[510] text-[1em] text-red-500 ">Our Products</h3>
            </div>
            <div className="flex justify-around sm:flex-row flex-col  items-center">
                
                <h1 className="sm:text-[2.5em] text-[1.7em] font-jost font-[510]">
            Explore Our Products</h1>
            

                
            
            <div className="flex gap-8 flex-row-reverse">
                <ArrowRight className="" size={30}/>
                <ArrowLeft className="" size={30}/>
            </div>

           
        </div>


        <div className="grid xg:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto justify-center gap-7">
{products.map((items => (
    
    <div key={items.id}  className="sm:w-[35vmin] relative m-auto w-[90%]  py-4   rounded-lg border border-[#939393]">
      <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">{items.off}</div>
      <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
        <Heart size={40} className="rounded-full py-2 px-2 "/>
        <Eye size={40} className="rounded-full py-2 px-2 "/>
      </div>
      <div className="relative">
    <Link href={`/products/${items.id}`}>
    <Image src={items.imgSrc} className="m-auto transform hover:scale-110 transition-all duration-500" alt={items.altText}/></Link>
    <button className={`${items.id == 2 ? "block" : "hidden"}   absolute bottom-0 w-full left-0 right-0 bg-black text-white py-2`}>Add To Cart</button> </div>
    <div className="flex flex-col gap-2 mt-3 px-4">
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
            <div className="flex gap-2">
              <div className="text-yellow-500 bg-yellow-500 py-[0.1vmin] px-[1vmin]   rounded-full">.</div>
              <div className="text-purple-500 bg-purple-500 py-[0.1vmin] px-[1vmin]   rounded-full">.</div>
              <div className="text-green-500  bg-green-500  py-[0.1vmin] px-[1vmin]  rounded-full  ">.</div>
            </div>
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










// "use client";

// import Header from "@/app/components/Header";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import { useRouter } from "next/router";
// import React from 'react';
// import Image from "next/image";
// import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
// import img1 from "../../public/images/q1.png";
// import img2 from "../../public/images/q2.png";
// import img3 from "../../public/images/q3.png";
// import img4 from "../../public/images/fr1.png";
// import img5 from "../../public/images/q5.png";
// import img6 from "../../public/images/q6.png";
// import img7 from "../../public/images/q7.png";
// import img8 from "../../public/images/q8.png";

// async function Page({ params }: { params: { id:string } }) {
//     const productId = params.id;
//     const products = [
//         {
//             id: "1",
//             name: "HAVIT HV-G92 Gamepad",
//             price: "$190.00",
//             originalPrice: "$190.00",
//             altText: "Product 1 Image",
//             imgSrc: img1,
//             rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//             reviews: 50,
//             off: "40%",
//             description: "Awesome gaming controller design",
//             reviewText: "The HAVIT HV-G92 Gamepad provides exceptional comfort and responsiveness. It's perfect for long gaming sessions, and the button layout feels intuitive. However, it could benefit from better build quality for the price."
//         },
//         {
//             id: "2",
//             name: "Logitech G502 Hero",
//             price: "$80.00",
//             originalPrice: "$100.00",
//             altText: "Product 2 Image",
//             imgSrc: img2,
//             rating: "⋆ ⋆ ⋆ ⋆",
//             reviews: 120,
//             off: "80%",
//             description: "Precision-focused gaming mouse",
//             reviewText: "The Logitech G502 Hero is an excellent gaming mouse with precise tracking and customizable buttons. The design is comfortable, but the weight may be a concern for some users. Overall, it offers great value for money."
//         },
//         {
//             id: "3",
//             name: "Razer DeathAdder V2",
//             price: "$60.00",
//             originalPrice: "$80.00",
//             altText: "Product 3 Image",
//             imgSrc: img3,
//             rating: "⋆ ⋆ ⋆ ⋆",
//             reviews: 200,
//             off: "30%",
//             description: "Smooth ergonomic mouse design",
//             reviewText: "The Razer DeathAdder V2 is an ergonomic mouse designed for comfort and precision. It performs well in fast-paced gaming, and the RGB lighting adds a stylish touch. Some users may prefer a slightly more customizable weight."
//         },
//         {
//             id: "4",
//             name: "Corsair K95 RGB Keyboard",
//             price: "$160.00",
//             originalPrice: "$200.00",
//             altText: "Product 4 Image",
//             imgSrc: img8,
//             rating: "⋆ ⋆ ⋆",
//             reviews: 80,
//             off: "70%",
//             description: "Premium RGB mechanical keyboard",
//             reviewText: "The Corsair K95 RGB Keyboard delivers excellent key response and a satisfying tactile feel. The RGB lighting is customizable, but the price may be too high for some users considering its features."
//         },
//         {
//             id: "5",
//             name: "SteelSeries Arctis 7",
//             price: "$150.00",
//             originalPrice: "$180.00",
//             altText: "Product 5 Image",
//             imgSrc: img5,
//             rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//             reviews: 95,
//             off: "20%",
//             description: "Comfortable wireless gaming headset",
//             reviewText: "The SteelSeries Arctis 7 offers outstanding sound quality and comfort for hours of gameplay. The wireless connection is stable, and the microphone quality is clear. It's a solid choice for gamers who value performance and comfort."
//         },
//         {
//             id: "6",
//             name: "ASUS ROG Strix Impact II",
//             price: "$45.00",
//             originalPrice: "$60.00",
//             altText: "Product 6 Image",
//             imgSrc: img6,
//             rating: "⋆ ⋆ ⋆ ⋆",
//             reviews: 30,
//             off: "25%",
//             description: "Lightweight customizable gaming mouse",
//             reviewText: "The ASUS ROG Strix Impact II is a lightweight and responsive mouse, ideal for fast-paced games. The build quality is good, though the button placement might take some time to get used to for those with larger hands."
//         },
//         {
//             id: "7",
//             name: "HyperX Cloud II Headset",
//             price: "$99.00",
//             originalPrice: "$130.00",
//             altText: "Product 7 Image",
//             imgSrc: img7,
//             rating: "⋆ ⋆ ⋆",
//             reviews: 150,
//             off: "35%",
//             description: "Crystal-clear sound gaming headset",
//             reviewText: "The HyperX Cloud II Headset delivers great audio quality and a comfortable fit. The noise-cancelling feature is a nice touch, but the build could be sturdier. A solid headset for the price, especially for casual gamers."
//         },
//         {
//             id: "8",
//             name: "Cooler Master MM720 Mouse",
//             price: "$35.00",
//             originalPrice: "$50.00",
//             altText: "Product 8 Image",
//             imgSrc: img4,
//             rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//             reviews: 65,
//             off: "30%",
//             description: "Durable lightweight gaming mouse",
//             reviewText: "The Cooler Master MM720 Mouse is lightweight and offers excellent precision in gaming. Its unique design is comfortable for most hand sizes, though the lack of additional customizable buttons may limit some users. A great budget option."
//         },
//     ];
    
    
//     const resolvedProducts =products; 
// const product = resolvedProducts.find((prod) => prod.id === productId);


//     if (!product) {
//         return (
//             <div>
//                 <Header />
//                 <Navbar />
//                 <div className="text-center justify-center items-center mt-[20vmin] flex flex-col gap-4">
//                     <h1 className="sm:text-5xl text-2xl font-[500]">404</h1>
//                     <p className="">Product not found</p>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className="flex sm:justify-evenly py-28 font-poppins justify-center md:text-start text-center md:flex-row flex-col items-center">
//         <Image src={product.imgSrc} alt={product.altText} className="xl:w-[30%]"/>
//         <div className="flex flex-col gap-2 px-2">
//             <span className="text-[#737373] text-[1em]">{product.name}</span>
//             <h1 className="sm:text-[2.1em] text-[1.5em] font-[500]">{product.description}</h1>
//             <div className="flex gap-3 text-yellow-500 text-[2em] text-center md:text-start md:m-0 m-auto">{product.rating}</div>
//             <p className="md:text-[1em] text-[0.9em] lg:w-[400px] sm:w-[300px] w-[80%] justify-center flex m-auto text-[#737373]">{product.reviewText}</p>
//             <div className="flex gap-6 items-end md:m-0 m-auto">
                
//             <h2 className="sm:text-3xl text-2xl font-[500] ">{product.price}</h2>
//             <span className="sm:text-xl text-sm line-through text-[#838383]">{product.originalPrice}</span>
//             </div>

//             <p className="text-[1.1em]">Quantity</p>
//             <div className="flex sm:flex-row flex-col gap-10 md:m-0 m-auto">
//               <div className="flex gap-5 md:m-0 m-auto">
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">-</span>
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">1</span>
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">+</span>
//               </div>
//               <button  className="py-2 px-12 text-[1em] bg-red-500 transition-all duration-500 hover:bg-red-700 text-white">Add To Cart</button> 
//             </div>
//             <div className="flex gap-5 md:m-0 my-10 m-auto">
//         <Linkedin size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Instagram  size={30}className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Facebook size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Github size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//       </div>
      
//      </div> 
//      </div> 
//      <Footer/>
//       </div>
     
//     );
// }

// export default Page;
