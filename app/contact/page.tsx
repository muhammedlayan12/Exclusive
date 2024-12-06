import {Phone,Mail} from "lucide-react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function page() {
  return (
    <div><Header></Header>
    <Navbar></Navbar>

<div className="flex justify-center gap-10 lg:flex-row flex-col py-28 px-2 lg:text-start text-center">



<div className="flex flex-col gap-5">

<div className="flex gap-3 items-center">
  <Phone size={40} className="py-2 px-2 bg-red-500 text-white rounded-full"/> <p className="text-[1em] font-poppins">Call To Us</p>
  </div>
  <div>

    <p className="xg:text-[1em] text-[0.9em] font-poppins mt-2">We are available 24/7, 7 days a week.</p>
    <p className="xg:text-[1em] text-[0.9em] font-poppins mt-2">Phone: +8801611112222</p>

 
</div>



<div className="flex gap-3 items-center">
  <Mail size={40} className="py-2 px-2 bg-red-500 text-white rounded-full"/> <p className="text-[1em] font-poppins">Call To Us</p>
  </div>
  <div>

    <p className="xg:text-[1em] text-[0.9em] font-poppins mt-2">
    Fill out our form and we will contact you within 24 hours.
    </p>

    <p className="xg:text-[1em] text-[0.9em] font-poppins mt-2">Emails: customer@exclusive.com</p>
    <p className="xg:text-[1em] text-[0.9em] font-poppins mt-2">Emails: support@exclusive.com</p>
 
</div>


</div>
 

 <div className="flex flex-col gap-2 font-poppins">
  <div className="flex gap-5 flex-wrap justify-center">
    
  <input type="text" className="outline-none border-opacity-25 border border-black py-3 pl-1 pr-10" required name="" id="" placeholder="Your  Name"/>
  <input type="text" className="outline-none border-opacity-25 border border-black py-3 pl-1 pr-10" required name="" id="" placeholder="Your Email"/>
  <input type="text" className="outline-none border-opacity-25 border border-black py-3 pl-1 pr-10" required name="" id="" placeholder="Your Phone"/>
  </div>
  <textarea name="" id="" cols={20} rows={10} placeholder="Your Message" className="outline-none border-opacity-25 border border-black pt-2 pl-1"/>

  <div className="lg:text-end text-center">
    <button className="py-3 px-10 rounded-md bg-red-500 text-white">Send Message</button>
  </div>
  
 </div>
</div>

    <Footer></Footer></div>
  )
}

export default page;