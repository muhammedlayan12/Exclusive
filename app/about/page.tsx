import {Tent,DollarSign,ShoppingBag,BadgeDollarSign,Twitter,Instagram,Linkedin} from "lucide-react";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../../public/images/about1.png";
import img2 from "../../public/images/image 46.png";
import img3 from "../../public/images/image 47.png";
import img4 from "../../public/images/image 51.png";
import Services from "../components/Services";


function Offer() {
  return (
    <div>  
        <Header></Header>
        <Navbar></Navbar>

<section className="m-auto lg:text-start text-center font-poppins flex flex-col py-20 px-4 gap-8">
    
    <div className="flex lg:gap-0 gap-14 items-center lg:flex-row flex-col justify-evenly">
    <div className="flex flex-col gap-5">
        <h2 className="sm:text-[2.4em] text-[1.4em] font-semibold">Our Story</h2>
        <p className="sm:w-[500px] w-[90%] justify-center m-auto sm:text-[0.9em] text-[0.7em] ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>
    </div>

    <Image src={img1} alt="About Image "/>

    </div>


    <div className="flex justify-center py-20 gap-10 flex-wrap">
    <div className="flex flex-col gap-3 border border-black bg-transparent justify-center items-center py-4 px-10 text-center">
            <div className="py-2 px-2 bg-black bg-opacity-25 rounded-full">
            <Tent size={62} className="py-3 px-3 bg-black text-white rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="sm:text-[1.8em] text-[1.4em] font-semibold">10.5k </h2>
                <span>Sellers Active Our Sites</span>
            </div>
        </div>


        <div className="flex flex-col gap-3 border border-black bg-red-500 justify-center items-center py-4 px-10 text-center">
            <div className="py-2 px-2 bg-black bg-opacity-25 rounded-full">
            <DollarSign size={62} className="py-3 px-3 bg-black text-white rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="sm:text-[1.8em] text-[1.4em] font-semibold">33k</h2>
                <span>Mopnthly Produduct Sale</span>
            </div>
        </div>


        <div className="flex flex-col gap-3 border border-black bg-transparent justify-center items-center py-4 px-10 text-center">
            <div className="py-2 px-2 bg-black bg-opacity-25 rounded-full">
            <ShoppingBag size={62} className="py-3 px-3 bg-black text-white rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="sm:text-[1.8em] text-[1.4em] font-semibold">45.5k</h2>
                <span>Customer active in our site</span>
            </div>
        </div>



        <div className="flex flex-col gap-3 border border-black bg-transparent justify-center items-center py-4 px-10 text-center">
            <div className="py-2 px-2 bg-black bg-opacity-25 rounded-full">
            <BadgeDollarSign size={62} className="py-3 px-3 bg-black text-white rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="sm:text-[1.8em] text-[1.4em] font-semibold">25k</h2>
                <span>Anual gross sale in our site</span>
            </div>
        </div>
    </div>


<div className="flex flex-wrap justify-center py-16 gap-24">
    <div className="flex flex-col gap-4">
        <Image src={img2} alt="Management client2"/>
        <div className="flex flex-col gap-1">
            <h3 className="sm:text-[1.7em] text-[1.3em]">Tom Cruise</h3>
            <p className="text-[#838383]">Founder & Chairman</p>
            <div className="flex gap-3 ">
                <Twitter/>
                <Instagram/>
                <Linkedin/>
            </div>
        </div>
    </div>

    <div className="flex flex-col gap-4">
        <Image src={img4} alt="Management client2"/>
        <div className="flex flex-col gap-1">
            <h3 className="sm:text-[1.7em] text-[1.3em]">Emma Watson</h3>
            <p className="text-[#838383]">Managing Director</p>
            <div className="flex gap-3 ">
                <Twitter/>
                <Instagram/>
                <Linkedin/>
            </div>
        </div>
    </div>


    <div className="flex flex-col gap-4">
        <Image src={img3} alt="Management client2"/>
        <div className="flex flex-col gap-1">
            <h3 className="sm:text-[1.7em] text-[1.3em]">Will Smith</h3>
            <p className="text-[#838383]">Product Designer</p>
            <div className="flex gap-3 ">
                <Twitter/>
                <Instagram/>
                <Linkedin/>
            </div>
        </div>
    </div>


    
</div>

    </section>
    <Services></Services>

        <Footer></Footer>
    </div>
  )
}

export default Offer;