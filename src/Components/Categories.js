import React from 'react'
import {   IoEllipsisHorizontalCircle,IoShirtOutline,IoMenu } from "react-icons/io5";
import { BsPlug } from "react-icons/bs";
import { MdOutlineChair ,MdOutlineGroupWork} from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { TbShoe } from "react-icons/tb";

const Categories = () => {
  return (
        <section>
    <div className='bg-white p-3 flex text-slate-900 mt-1  md:hidden'>

        <section className='flex flex-col items-center  w-[16.6%]'>
       {/* <li className='list-none text-2xl'>  <IoEllipsisHorizontalCircle/></li> */}
       <li className='list-none text-2xl'>  <MdOutlineGroupWork className='text-gray-500'/></li>
<p className = "text-xs text-slate-400">Browse All</p>
        </section>
        
        <section className='flex flex-col items-center  w-[16.6%]'>
       <li className='list-none text-2xl'>  <IoShirtOutline className='text-gray-500'/></li>
<p className = "text-xs text-slate-400">Clothes</p>
        </section>

        <section className='flex flex-col items-center  w-[16.6%]'>
       <li className='list-none text-2xl'>  <TbShoe className='text-gray-500'/></li>
<p className = "text-xs text-slate-400">Shoes</p>
        </section>

        <section className='flex flex-col items-center w-[16.6%]'>
       <li className='list-none text-2xl'>  <BsPlug className='text-gray-500'/></li>
<p className = "text-xs text-slate-400">Electronics</p>
        </section>

        <section className='flex flex-col items-center w-[16.6%]'>
       <li className='list-none text-2xl'>  <MdOutlineChair className='text-gray-500'/></li>
<p className = "text-xs text-slate-400">Furniture</p>
        </section>
        <section className='flex flex-col items-center w-[16.6%]'>
       <li className='list-none text-2xl'>  <CgMore className='text-gray-500'/></li>
       {/* <li className='list-none text-2xl'>  <IoEllipsisHorizontalCircle/></li> */}
<p className = "text-xs text-slate-400">Others</p>
        </section>



    </div>


    <div className=' hidden bg-orange-800 text-gray-200 font-medium px-4 py-3  md:block  '>
        <nav className='flex justify-between'>
        <a className='flex items-center' onClick={()=>{console.log("clicked")}}>All Categories   <IoMenu className='ml-1'/></a>
              
                <a>Clothes</a>
                <a>Shoes</a>
                <a>Electronics</a>
                <a>Furniture</a>
                <a>Other Categories</a>
        </nav>


        </div>


        

    </section>
  )
}

export default Categories