import Image from "next/image";
import Link from "next/link";
import {SendHorizonal} from "lucide-react";
import img1 from "../../public/images/Qr Code.png";
import img2 from "../../public/images/Frame 718.png";

function Footer() {
  return (
    <div> 

        <footer className="bg-black m-auto lg:text-start text-center grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-4 py-16  text-white justify-center ">
            <div className=" m-auto flex flex-col gap-3">
                <h2 className="text-[1.5em] font-poppins font-[500] tracking-[2px]">Exclusive</h2>
                <div className="flex flex-col gap-2">
                    <span className="text-[1em] font-poppins">Subcribe</span>
                    <p className="text-[0.9em] tracking-[1px] text-[#838383] font-poppins">Get 10% off your first order</p>
                <div className="flex justify-between py-2 px-6 rounded-full bg-transparent border border-white ">
                    <input type="text" placeholder="Enter your email" className="outline-none bg-transparent "/>
                    <SendHorizonal className="text-white"/>
                </div>
                </div>
            </div>
            

            <div className=" m-auto flex flex-col gap-3"><h2 className="text-[1.5em] font-poppins font-[500] tracking-[2px]">Support</h2>
            <p className="text-[1em] font-poppins text-[#939393]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className="text-[1em] font-poppins text-[#939393]">exclusive@gmail.com</p>
            <p className="text-[1em] font-poppins text-[#939393]">+88015-88888-9999</p>
            </div>

            <div className=" m-auto flex flex-col gap-3">
                <h2 className="text-[1.5em] font-poppins font-[500] tracking-[2px]">Account</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]"  href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Signup / Login</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Wishlist</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Cart</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">About</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Contact</Link>
                    </li>
                </ul>
            </div>


            <div className=" m-auto flex flex-col gap-3">
                <h2 className="text-[1.5em] font-poppins font-[500] tracking-[2px]">Quick Links</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Term Of Use</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">FAQ</Link>
                    </li>
                    <li>
                        <Link className="text-[1em] font-poppins text-[#939393]" href="/">Contact</Link>
                    </li>
                    
                </ul>
            </div>

            <div className=" m-auto flex flex-col gap-3">
                <h2 className="text-[1.5em] font-poppins font-[500] tracking-[2px]">Download App</h2>
                <p className="text-[1em] font-poppins text-[#939393]">Save $3 with App New User Only</p>
                <div className="flex gap-2">
                    <Image src={img1} alt="Qr Code"/>
                    <Image src={img2} alt="App Available"/>
                </div>
            </div>
            {/* <div className="flex justify-center text-center w-[100%] py-2 border border-[#838383] ">
                <p className="text-[1em] font-poppins text-[#838383] text-center">© Copyright Rimel 2022. All right reserved</p>
            </div> */}
        </footer>
    </div>
  )
}

export default Footer;