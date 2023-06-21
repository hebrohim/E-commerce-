import {React,useContext }from 'react'
import { Context } from '../App'
const DisplayProducts = () => {
  const Data = useContext(Context)
  console.log(Data)
  return (
    <div className='flex justify-center'>
    <div className='bg-white w-[90vw] md:-translate-y-20 px-5 py-2 mt-1 md:mt-0 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {Data.map((item)=>{
return <div className=' p-5' >
 <img src={item.category.image}></img>
 <h4 className='font-bold'>{item.title}</h4>
 <p className='text-justify'>{item.description}</p>
 <p className='font-bold'>${item.price}</p>
 <button className='border-2 border-orange-800 p-1 rounded-md hover:bg-orange-600 hover:text-white hover:font-semibold'> Add to Cart</button>
</div>
     })}
    </div>

   </div>
  )
}

export default DisplayProducts