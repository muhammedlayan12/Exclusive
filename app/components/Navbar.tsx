"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Heart, ShoppingCart, UserCircle, Menu, X } from "lucide-react";

function Navbar() {
  const [isSearchOpen, setSearchIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownMobileOpen, setDropdownMobileOpen] = useState(false);

  const searchToggler = () => {
    setSearchIsOpen(!isSearchOpen);
  };

  const menuToggler = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  const dropdownToggler = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dropdownMobileToggler = () => {
    setDropdownMobileOpen(!isDropdownMobileOpen);
  };


  return (
    <div>
      <nav className="flex sm:justify-evenly justify-between sm:px-6 px-4 items-center py-4">
        <div className="lg:hidden block" onClick={menuToggler}>
          <Menu size={25} />
        </div>
        <div className="logo">
          <h2 className="xl:text-[2em] sm:text-[1.7em] text-[1.35em] font-poppins font-semibold">
            Exclusive
          </h2>
        </div>
        <ul className="lg:flex hidden xl:gap-8 gap-5 list-none">
          <li>
            <Link
              href="/"
              className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline"
            >
              Home
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={dropdownToggler}
              className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins flex gap-2 items-center"
            >
              Pages <ChevronDown size={22} />
            </button>
            {/* Dropdown */}
            <div
              className={`absolute left-0 top-8 bg-white shadow-md rounded-lg py-2 px-4 ${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block`}
            >
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/signup" className="">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/about"
              className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex sm:gap-6 gap-2 items-center">
          <Search className="lg:hidden block" onClick={searchToggler} />
          <div className="lg:flex hidden py-2 xl:px-4 px-2 bg-white border border-[#d1d1d1] rounded-lg">
            <input
              type="search"
              name=""
              id=""
              className="outline-none pl-2 text-sm pr-16 font-poppins"
              placeholder="What Are You Looking For"
            />
            <Search />
          </div>
          <Heart className="sm:block hidden" />
          <ShoppingCart className="sm:block hidden" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                <UserCircle />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Search Bar */}
      <div
        className={`${
          isSearchOpen ? "translate-x-0" : "translate-y-[-400%]"
        } flex shadow-sm shadow-black md:w-[40vw]  w-[95vw] justify-between fixed top-22 transition-all duration-700 right-2 py-2 xl:px-4 px-2 bg-white border border-[#d1d1d1] rounded-lg`}
      >
        <input
          type="search"
          name=""
          id=""
          className="outline-none pl-2 text-sm pr-16 font-poppins"
          placeholder="What Are You Looking For"
        />
        <Search />
      </div>



      <div className={`${isSearchOpen ? "translate-x-0" : "translate-y-[-400%]"} flex shadow-sm shadow-black md:w-[40vw]  w-[95vw] justify-between fixed top-22 transition-all duration-700 right-2 py-2 xl:px-4 px-2 bg-white border border-[#d1d1d1] rounded-lg`}>
                
                <input type="search" name="" id="" className="outline-none pl-2 text-sm pr-16 font-poppins" placeholder="What Are You Looking For"/>
                <Search/>
                </div>

                <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"} bg-white h-full sm:w-[270px] w-[80%] fixed top-0 left-0 bottom-0 z-[9999] transition-all duration-500 py-8 px-8`}>
                    <div className="absolute top-4 right-4" onClick={menuToggler}><X/></div>
                    <ul className="flex flex-col absolute gap-8 top-[25%] justify-center list-none">
                <li>
                    <Link href="/" className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline" >Home</Link>
                </li>
                <li>
                    <Link href="/" onClick={dropdownMobileToggler} className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline  flex gap-2 items-center">Pages <ChevronDown size={22}/></Link>
                    <ol className={`${isDropdownMobileOpen ? "flex" : "hidden"} pl-4 flex flex-col gap-2 my-2`}>
                        <li>
                            <Link href="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link href="/wishlist">Wishlist</Link>
                        </li>
                    </ol>
                </li>
                <li>
                    <Link href="/about" className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline ">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="xl:text-[1.15em] sm:text-[0.95em] text-[0.85em] font-poppins active:underline" >Contact</Link>
                </li>
            </ul>
            <div className="flex flex-col gap-5 sm:w-[50%] w-[95%] absolute sm:top-[50%] top-[65%] left-1 sm:hidden ">
                <Link className='flex gap-4 py-2 px-6 justify-center rounded-full transition-all duration-700 bg-black text-white hover:bg-transparent border border-black hover:text-black' href="/wishlist"><Heart/>Wishlist</Link>
                <Link className='flex gap-4 py-2 px-6 justify-center rounded-full transition-all duration-700 bg-transparent text-black hover:bg-black border border-black hover:text-white' href="/cart"><ShoppingCart/>Cart</Link>
            </div>
                </div>


    </div>
  );
}

export default Navbar;
