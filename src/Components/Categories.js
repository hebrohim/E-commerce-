import React from 'react'
import {   IoEllipsisHorizontalCircle,IoShirtOutline } from "react-icons/io5";
import { BsPlug } from "react-icons/bs";
import { MdOutlineChair ,MdOutlineGroupWork} from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { TbShoe } from "react-icons/tb";

const Categories = () => {
  return (
    <div className='bg-white p-3 flex text-slate-900 mt-1 '>

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
  )
}

export default Categories