import React from 'react'
import {   IoEllipsisHorizontalCircle,IoShirtOutline,IoMenu } from "react-icons/io5";
import { BsPlug } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";
import { TbShoe } from "react-icons/tb";
import Woman from "../images/Man.png"
const Hero = () => {
  return (
    <div className='font-heading hero h-[80vh] flex justify-between px-3 invisible md:visible '>

      <div className='mt-24 text-4xl w-1/2 lg:text-5xl lg:ml-20'>
<h1 className='mb-2  ' >one-stop</h1>

<span className='text-amber-500 font-extrabold tracking-wide'> online shopping</span>  
<h1>for all your  Needs </h1>

<p className='text-[1.3rem] font-tagline italic'>...It is more than just sales</p>

<button class=" mt-4 text-sm p-2 rounded-3xl outline  outline-orange-800 bg-gradient-to-tr from-transparent to-orange-800 text-white">see all Products</button>
        </div>

        <section className='bannerImage w-2/3 h-[80vh] lg:w-1/2' >
<img src={Woman} className=" w-full h-[80vh] "/>
        </section>


    {/* <section>
    <div className='bg-white h-[60vh] w-1/3 p-3 flex flex-col justify-evenly text-slate-900'>

     
        
        <section className='flex items-center '>
       <li className='list-none text-2xl'>  <IoShirtOutline className='text-gray-500'/></li>
<p className = "text-lg text-slate-400">Clothes</p>
        </section>

        <section className='flex items-center '>
       <li className='list-none text-2xl'>  <TbShoe className='text-gray-500'/></li>
<p className = "text-lg text-slate-400">Shoes</p>
        </section>

        <section className='flex items-center'>
       <li className='list-none text-2xl'>  <BsPlug className='text-gray-500'/></li>
<p className = "text-lg text-slate-400">Electronics</p>
        </section>

        <section className='flex items-center'>
       <li className='list-none text-2xl'>  <MdOutlineChair className='text-gray-500'/></li>
<p className = "text-lg text-slate-400">Furniture</p>
        </section>
     



    </div>


 
        

    </section> */}

    </div>
  )
}

export default Hero