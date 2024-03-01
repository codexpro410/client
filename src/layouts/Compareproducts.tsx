import BreadCrumb from '@/components/BreadCrumb'
// import Meta from '@/utlis/Meta'
import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { compareProductsArray } from '@/utlis/Arrays';

const Compareproducts = () => {
  return (
    <>
    {/* <Meta title='Compare Products'/> */}
    <Head>
        <title>Compare Products</title>
        {/* <link rel='icon' href='/favicon.ico'/> */}
    </Head>
        <BreadCrumb href='compareproducts' title='Compare Products'/>
        <div className="bg-gray-200">
    <div className=' text-black container mx-auto py-10'>
        <section className='mb-10 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {
                compareProductsArray.map((item)=>(
                    <div className="relative flex flex-col gap-5 bg-slate-100 rounded-lg" key={item.id}>
                        <div className="absolute right-3 cursor-pointer">
                            X
                        </div>
                        <div className="bg-white flex justify-center ">
                        <Image src={item.imgs} alt="item" className='object-fit' width={100} min-height={100}/>
                        </div>
                        <h4 className='font-bold w-5/6 p-2'>{item.desc}</h4>
                        <div className="flex flex-col gap-5 p-2">
                        <div className="flex">
                        <div className='font-bold'>{
                            item.discount > 0?
                            <div className="flex gap-10">
                                <p className='font-bold text-red-500'>${item.price}.00</p>
                                <p className='line-through text-gray-600 font-light'>${item.discount}.00</p>
                            </div>
                            :
                            <p className='font-bold'>${item.price}.00</p>
                           }</div>
                        </div>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>Brand:</h4>
                        <p>{item.brand}</p>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>Type:</h4>
                        <p>{item.Type}</p>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>SKU:</h4>
                        <p>{item.SKU}</p>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>Availability:</h4>
                        <p>{item.avaiable}</p>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>Color:</h4>
                        <div className="flex gap-1">
                        <p className={`p-2 ${item.color1} rounded-full w-6`}></p>
                        <p className={`p-2 ${item.color2} rounded-full w-6`}></p>
                        <p className={`p-2 ${item.color3} rounded-full w-6`}></p>
                        </div>
                        </div>
                        <hr className='border-gray-400'/>
                        <div className="flex justify-between">
                        <h4 className='font-bold'>Size:</h4>
                        <p>{item.size}</p>
                        </div>
                        </div>
                    </div>
                ))
            }
        </section>
    </div>
    </div>
    </>
  )
}

export default Compareproducts