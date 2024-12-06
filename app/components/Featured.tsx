import Image from "next/image";
import Link from "next/link";
import {ArrowRight,ArrowLeft,Star,Eye,Heart} from "lucide-react";
import img1 from "../../public/images/s1.png";
import img2 from "../../public/images/s2.png"; 
import img3 from "../../public/images/s3.png"; 
import img4 from "../../public/images/s4.png"; 


function Featured() {
  return (
    <div> 



        <section className="flex lg:flex-row justify-center gap-10 flex-col px-4 py-10">
            <div className="bg-black realative py-6 px-6 text-white">
                <Image src={img1} alt="ps5 picture"/>
                 
            </div>

            <div className="flex flex-col gap-16 lg:m-0 m-auto">

            
            <div>
                <Image src={img2} alt="ps5 picture"/>
            </div>




            <div className="flex gap-10">
            <div>
                <Image src={img3} alt="ps5 picture"/>
                
            </div>
            <div>
                <Image src={img4} alt="ps5 picture"/>
               
            </div>
            </div>


            </div>
        </section>



    </div>
  )
}

export default Featured;