import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsPatchQuestionFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utlis/Arrays';
import B from '../../public/images/payment.png'

function Payment() {
  return (
    <div className='grid grid-cols-12 h-screen'>
        <form className="px-52 pt-20  col-span-6 flex flex-col gap-4 ">
            <h1 className='text-4xl'>Digitic</h1>
            <div>
                <Link href={"cart"} className='pr-1'>Cart</Link>
                &gt;
                <Link href={"checkout"} className='pr-1'>Information</Link>
                &gt;
                <Link href={"shipping"} className='pr-1'>Shipping</Link>
                &gt;
                <Link href={"payment"} className='pr-1 font-semibold'>Payment</Link>
            </div>
            {/* payment */}
            <div className="flex flex-col justify-between border border-gray-400 px-3 py-2 gap-3 w-full">
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
                <hr className='border border-gray-500 w-full'/>
                <div className="flex flex-start gap-8">
                    <h3>Method</h3>
                    <p className='text-gray-500'>Standard - <span className='text-black font-bold'>$19.65</span></p>
                </div>
            </div>
                <div>
                    <h2 className='font-semibold text-2xl'>Payment</h2>
                    <p>All transactions are secure and encrypted.</p>
                    <div className="border border-gray-400">
                        <div className="flex justify-between items-center p-3 bg-white">
                            <p>Credit card</p>
                            <Image src={B} alt='b' width={35} height={35}/>
                        </div>
                        <div className="flex flex-col p-3 bg-gray-200">
                            <div className="flex justify-between items-center m-3 p-3 bg-white rounded-lg">
                            <input type='text' placeholder='Credit number' className='w-full outline-none'/>
                            <FaLock color='gray' size={20}/>
                            </div>
                            <div className="flex justify-between items-center m-3 p-3 bg-white rounded-lg">
                            <input type='text' placeholder='Cardholder name'  className='w-full outline-none'/>
                            </div>
                            <div className="flex">
                                <input type='text' placeholder='Expiration date (MM / YY)' className='flex-1 m-3 p-3 rounded-lg outline-none'/>
                                <div className="flex-1 flex justify-between gap-2 items-center m-3 p-3 bg-white rounded-lg ">
                                <input type='text' placeholder='Security code'  className='w-full outline-none'/>
                                <BsPatchQuestionFill color='gray' size={20}/>
                                </div>
                                <div className="">
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col pt-5">
                        <h2 className='font-semibold text-2xl'>Billing address</h2>
                        <p className='pt-5'>Select the address that matches your card or payment method</p>
                        <div className="border border-gray-300 flex gap-4 mt-5 p-3">
                            <input type="radio" name="ship" id="ship" />
                            <label htmlFor='ship' className='font-semibold'>Same as shipping address</label>
                        </div>
                        <div className="border border-gray-300 flex gap-4 p-3">
                            <input type="radio" name="ship" id="billing" />
                            <label htmlFor='billing' className='font-semibold'>Use a different billing address</label>
                        </div>
                        </div>          

            <div className="flex justify-between items-center pt-3">
                <div className="flex  items-center">
                <MdKeyboardArrowLeft size={30} />
                <Link href={"shipping"}>Return to shipping</Link>
                </div>
                <button type='submit' className='text-white bg-red-600 hover:bg-red-700 p-2 h-[50px] rounded-lg'>Pay now</button>
            </div>
            <hr className='border border-gray-300'/>
            <p>All rights reserved CodePros inspired from Digitic</p>
            </div>
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
                <p className='w-4/6 font-bold'>Tax: $18.00</p>
                </div>
                </div>
                <p className='font-bold'>$118.00</p>
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

export default Payment