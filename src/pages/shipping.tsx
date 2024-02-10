import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utlis/Arrays';
function Shipping() {
  return (
    <div className='grid grid-cols-12 h-screen'>
        <div className="px-52 pt-20  col-span-6 flex flex-col gap-4 ">
            <h1 className='text-4xl'>Digitic</h1>
            <div>
                <Link href={"cart"} className='pr-1'>Cart</Link>
                &gt;
                <Link href={"checkout"} className='pr-1'>Information</Link>
                &gt;
                <Link href={"shipping"} className='pr-1 font-semibold'>Shipping</Link>
                &gt;
                <Link href={"payment"} className='pr-1 '>Payment</Link>
            </div>
            {/* shipping */}
            <div className="flex flex-col justify-between items-center border border-gray-400 px-3 py-2 gap-3 w-full">
                <div className="flex justify-between w-full">
                    <div className="flex gap-8 ">
                <h3>Contact</h3>
                <p className='text-gray-500'>monud0232@gmail.com</p>
                    </div>
                <h3>Change</h3>
                </div>
                <hr className='border border-gray-500 w-full'/>
                <div className="flex justify-between w-full">
                    <div className="flex gap-8">
                <h3>Ship to</h3>
                <p className='text-gray-500'>IN 46308, Unuited States</p>
                    </div>
                <h3>Change</h3>
                </div>
            </div>
            <h2 className='font-semibold text-2xl'>Shipping method</h2>            
            <div className="flex justify-between items-center border border-gray-400 px-3 h-[50px] cursor-pointer">
                <div className="flex gap-3">
                <FaShippingFast size={25}/>
                <p className='w-full'>Standard</p>
                </div>
                <p className='font-semibold'>$19.65</p>
            </div>
                <div className="flex justify-between items-center">
                    <div className="flex  items-center">
                    <MdKeyboardArrowLeft size={30} />
                    <Link href={"checkout"}>Return to information</Link>
                    </div>
                    <Link href={"payment"} 
                    className='text-white bg-red-600 hover:bg-red-700 p-2 h-[50px] rounded-lg'>
                        Continue to payment
                        </Link>
                </div>
                

            
            <hr className='border border-gray-300'/>
            <p>All rights reserved CodePros inspired from Digitic</p>
        </div>
        {/* section two */}
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
    </div>
  )
}

export default Shipping