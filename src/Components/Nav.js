import React from 'react'
import logo from "../images/myLogo.png"
import { IoMenu,IoCartOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <nav className='bg-white p-3 flex flex-col text-slate-900' >
        <section className='flex justify-between items-center'>
            <div className='flex items-center justify-center'>
            <IoMenu className='text-2xl'/>

                <div className='flex items-center justify-center'>
        
                <img src={logo} className='rounded-full w-[7.5rem] ml-[-1px]'/>
                  
                </div>
            </div>
            <div className='flex items-center hover:text-amber-600'> <IoCartOutline className='text-xl mr-1'/><span>Cart</span> </div>
        </section>

        <section>
        <input  type = "search" className='border-2 w-full mt-3 rounded-md px-10  py-1 outline-none' placeholder='Search products, brands and categories '/>
        </section>


    </nav>
  )
}

export default Nav