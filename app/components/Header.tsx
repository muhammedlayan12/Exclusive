import Image from "next/image";
import img1 from "../../public/images/chevrondown.png";
function Header() {
  return (
    <div>
        
        <section className="py-1 font-poppins items-center px-4 bg-black md:flex hidden justify-evenly text-white">
            <p className="cursor-pointer text-[0.9em]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="ml-2 font-[500] underline">ShopNow</span></p>
            <button className="flex gap-4 items-center">English <Image src={img1} alt="chevron down"/></button>
        </section>
    </div>
  )
}

export default Header;