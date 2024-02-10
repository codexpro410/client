import { services } from '@/utlis/Arrays'
import Image from 'next/image'
import React from 'react'

type ValuesProps ={
    productPrice:number;
    subtotal:number;
    shipping:number;
    total:number;
}
// TODO: too many to fix here
const DigiticCart = () => {
  return (
   <div className="pr-72 pl-32 pt-20 col-span-6 bg-gray-100 flex flex-col gap-5">
   <div className="flex justify-between items-center">
       <div className="flex items-center gap-3">
       <div className="relative">
           <Image src={services[0].imgs} alt="item" className='mt-3 mr-3' width={50} height={50}/>
           <p className='absolute top-0 right-0 p-1 bg-gray-500 text-white rounded-full w-8 flex items-center justify-center'>1</p>
       </div>
       <div className="">
       <p className='w-4/6 font-bold'>{services[4].desc}</p>
       <p className='text-gray-500'>5 / #AB5A5A</p>

       </div>
       </div>
       <p className='font-bold'>$100.00</p>
   </div>
   <hr className='border border-gray-300'/>
   <div className="flex justify-between">
       <p>Subtotal</p>
       <p className='font-bold'>$118.00</p>
   </div>
   <div className="flex justify-between">
       <p>Shipping</p>
       <p className='font-bold'>$19.65</p>
   </div>
   <hr className='border border-gray-300'/>
   <div className="flex justify-between">
       <p className='text-2xl'>Total</p>
       <p>USD <span className='text-3xl font-bold'>$137.65</span></p>
   </div>
</div>
  )
}

export default DigiticCart