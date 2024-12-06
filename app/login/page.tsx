import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../../public/images/dl.beatsnoop 1.png";

function page() {
  return (
    <div>

        <Header></Header>
        <Navbar></Navbar>

        <section className="flex font-poppins justify-center gap-16 px-4 py-18 items-center  flex-wrap text-center my-20">
            <Image src={img1} alt="Signup Page image"/>
            <div className="flex flex-col gap-5">
                <h1 className="sm:text-[1.5em] text-[1.1em] font-poppins font-[501]">Login To Exclusive</h1>
                <p className="text-[#838383] font-poppins">Enter your details below</p>
                <form className="flex flex-col gap-6">
                    <input className="py-2 pl-2 sm:pr-20  border border-b-[#838383] outline-none" type="text" placeholder="Email or Phone Number"/>
                    <input className="py-2 pl-2 sm:pr-20  border border-b-[#838383] outline-none" type="text" placeholder="Password"/>
                </form>
                <div className="flex  gap-5">
                    <button className="py-2 sm:px-8 px-6 sm:text-[1em] text-[0.85em] bg-red-500 text-white rounded-md">Login</button>
                    <p className="sm:text-[1em] text-[0.9em] my-4">Already Have An Account ? <Link className="underline" href="/login">Log in</Link></p>
                </div>
            </div>
        </section>

        <Footer></Footer>


    </div>
  )
}

export default page;