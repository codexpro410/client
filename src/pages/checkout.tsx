import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utlis/Arrays';
import { useRouter } from 'next/router'
function Checkout() {
    const router = useRouter()
    const handelSubmit = (e:any) => { 
        e.preventDefault()
        router.push("/shipping")
     }
  return (
    <div className='grid grid-cols-12'>
        <form onSubmit={handelSubmit} className="px-52 pt-20  col-span-6 flex flex-col gap-4">
            <h1 className='text-4xl'>Digitic</h1>
            <div>
                <Link href={"cart"} className='pr-1'>Cart</Link>
                &gt;
                <Link href={"checkout"} className='pr-1 font-semibold'>Information</Link>
                &gt;
                <Link href={"shipping"} className='pr-1'>Shipping</Link>
                &gt;
                <Link href={"payment"} className='pr-1 '>Payment</Link>
            </div>
            <h2 className='font-semibold text-2xl'>Contact information</h2>
            <p>Navdeep Dahiya (monud0232@gmail.com)</p>
            <h2 className='font-semibold text-2xl'>Log Out</h2>
            <div className="flex gap-4">
                <input type="checkbox" name="" id="" className='w-5 h-5'/>
                <p>Email me with news and offers</p>
            </div>
            {/*  TODO: dropdown lists */}
            <h2 className='font-semibold text-2xl'>Shipping address</h2>
            <div className="flex justify-between items-center border border-gray-400 px-3">
                <div className="">
                <p className='text-gray-500'>Saved address</p>
                <h3>United States (Navdeep Dahiya)</h3>
                </div>
                <TiArrowSortedDown />
            </div>
            <div className="flex justify-between items-center border border-gray-400 px-3">
                <div className="">
                <p className='text-gray-500'>Country / Region</p>
                <h3>United States</h3>
                </div>
                <TiArrowSortedDown />
            </div>
            <div className="flex justify-between items-center gap-5">
            <div className="flex-1 border  border-gray-400 px-3">
                <p className='text-gray-500'>First name (optiobal)</p>
                <h3>Navdeep</h3>
            </div>
            <div className="flex-1 border  border-gray-400 px-3">
                <p className='text-gray-500'>Last name</p>
                <h3>Dahiya</h3>
            </div>
            </div>
            {/* TODO: Form validation, appear all errors in same time border change to red, text under it, enter an address */}
            {/* select a state / province, enter a ZIP / postal code */}
            {/* when write any text in each input, show City gray, above in same input also state & zip code */}
            {/* change btn text to be loading cycle */}
            <div className="flex justify-between items-center border border-gray-400 px-3 h-[50px]">
                <input type="text" placeholder='Address' className='w-full outline-none' required />
            </div>
            <div className="flex justify-between items-center border border-gray-400 px-3 h-[50px]">
                <input type="text" placeholder='Apartment, suite, etc, (optional)' className='w-full outline-none'/>
            </div>
            <div className="flex justify-between items-center gap-5 ">
            <div className="flex-1 border  border-gray-400 px-3 h-[50px] flex justify-between items-center">
                <input type="text" placeholder='City' className='w-full outline-none' required />
            </div>
            <div className="flex-1 border  border-gray-400 px-3 h-[50px] flex justify-between items-center">
                <input type="text" placeholder='State' className='w-full outline-none' required />
                <TiArrowSortedDown />
            </div>
            <div className="flex-1 border  border-gray-400 px-3 h-[50px] flex justify-between items-center">
                <input type="text" placeholder='ZIP code' className='w-full outline-none' required />
            </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex  items-center">
                <MdKeyboardArrowLeft size={30} />
                <Link href={"cart"}>Return to cart</Link>
                </div>
                <button type='submit' className='text-white bg-red-600 hover:bg-red-700 p-2 h-[50px] rounded-lg'>Continue to shipping</button>
            </div>
            <hr className='border border-gray-300'/>
            <p>All rights reserved CodePros inspired from Digitic</p>
        </form>
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
                <p className='font-bold'>$100.00</p>
            </div>
            <div className="flex justify-between">
                <p>Shipping</p>
                <p>Calculated at next step</p>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                <p>Estimated taxes</p>
                <BsPatchQuestionFill size={20}/>
                </div>
                <p className='font-bold'>$18.00</p>
            </div>
            <hr className='border border-gray-300'/>
            <div className="flex justify-between">
                <p className='text-2xl'>Total</p>
                <p>USD <span className='text-3xl font-bold'>$118.00</span></p>
            </div>
        </div>
    </div>
  )
}

export default Checkout