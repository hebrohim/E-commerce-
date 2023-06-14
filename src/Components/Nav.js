import React from "react";
import logo from "../images/myLogo.png";
import { IoMenu, IoCartOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <nav className="bg-white p-3 flex flex-col text-slate-900">
      <section className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <IoMenu className="text-2xl md:hidden" />

          <div className="flex items-center justify-center">
            <img src={logo} className="rounded-full w-[7.5rem] ml-[-1px]" />
          </div>
        </div>
        <div className="flex relative items-center hover:text-amber-600 md:bg-green-800 md:text-gray-200 md:font-bold md:px-2 md:py-1 md:rounded-md">
          {" "}
          <IoCartOutline className="text-xl mr-1" />
          <span>Cart</span>
          <span className=" font-extrabold  px-2 text-red-900  rounded-md absolute left-1 -top-2  md:text-orange-300">0</span>
        </div>
      </section>

      <section>
        <input
          type="search"
          className="border-2 w-full mt-3 rounded-md px-10  py-1 outline-none"
          placeholder="Search products, brands and categories "
        />
      </section>
    </nav>
  );
};

export default Nav;
