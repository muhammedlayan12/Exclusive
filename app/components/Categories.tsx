import Image from "next/image";
import Link from "next/link";
import {ArrowRight,ArrowLeft} from "lucide-react";
import img1 from "../../public/images/c.png"; 
import img2 from "../../public/images/c1.png";  
import img3 from "../../public/images/c3.png";  
import img4 from "../../public/images/c4.png"; 
import img5 from "../../public/images/c5.png";  
import img6 from "../../public/images/c6.png"; 





function Sales() {

    const categories = [
        { id: 1, imgSrc: img1, altText: "categories1", name: "Mobile Phone" },
        { id: 2, imgSrc: img2, altText: "categories2", name: "Laptops" },
        { id: 3, imgSrc: img3, altText: "categories3", name: "Headphones" },
        { id: 4, imgSrc: img4, altText: "categories4", name: "Watches" },
        { id: 5, imgSrc: img5, altText: "categories5", name: "Clothing" },
        { id: 6, imgSrc: img6, altText: "categories6", name: "Accessories" },
      ];
 
  return (
    <div>
        <section className="flex  flex-col gap-5  px-4 py-28 justify-center">
        
        <div className="flex gap-5 justify-center  text-center flex-wrap items-center">
                <span className="text-red-500 bg-red-500 py-6 px-2 rounded-md">.</span> <h3 className="sm:text-[1.5em] font-poppins font-[510] text-[1em] text-red-500 ">Categories</h3>
            </div>
            <div className="flex justify-around flex-wrap  items-center">
                
                <h1 className="sm:text-[2.5em] text-[1.7em] font-jost font-[510]">
                Browse By Category</h1> 
                <div className="flex gap-8 flex-row-reverse">
                <ArrowRight className="" size={30}/>
                <ArrowLeft className="" size={30}/>
            </div>
                </div>
              
                <div className="flex flex-wrap justify-center gap-20">
  {categories.map((items) => (
    <div
      key={items.id}
      className={`font-poppins py-4 px-4 flex justify-center items-center flex-col border border-black rounded-lg ${
        items.name === "Watches" ? "bg-red-500 text-white border-white" : ""
      }`}
    >
      <Image src={items.imgSrc} alt={items.altText} />
      <h2>{items.name}</h2>
    </div>
  ))}
</div>

        </section>
    </div>
  )
}

export default Sales;