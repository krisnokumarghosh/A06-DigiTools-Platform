import React from "react";
import logo from "../../assets/DigiTools.png"
import { Menu, ShoppingCart } from "lucide-react";


const Navbar = () => {
  return (
    <div className="mb-22.5">

    <div className=" flex justify-around  py-5 bg-[#FFFFFF] shadow-sm">
      <div className="flex  md:gap-4 items-center ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn 
          bg-white border-0  lg:hidden">
           <Menu></Menu>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box cursor-pointer z-1 mt-3 w-52 p-2 shadow space-y-4 font-bold"
          >
           <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>LogIn</li>
          <li className="btn">Cart : 0</li>
          </ul>
        </div>
        <img className="h-7 md:h-10" src={logo} alt="" />
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 cursor-pointer px-1 font-semibold text-[16px] text-[#101727]">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className=" flex items-center gap-2">
        <div className="relative hidden md:flex">
            <ShoppingCart className=""></ShoppingCart>
            <span className="badge absolute -top-5 left-3 bg-red-500 text-white font-bold rounded-full">0</span>
        </div>
        <button className="btn border-0 rounded-full hidden md:flex bg-white font-semibold text-[16px] px-4">LogIn</button>
        <a className="btn  border-0 
        rounded-full text-white
        bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
      </div>
    </div>
    
    </div>
  );
};

export default Navbar;
