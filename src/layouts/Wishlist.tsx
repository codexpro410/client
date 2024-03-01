import BreadCrumb from '@/components/BreadCrumb'
import { wishListArray } from '@/utlis/Arrays'
import Meta from '@/utlis/Meta'
import Image from 'next/image'
import React from 'react'



const Wishlist = () => {
  return (
    <>
      <Meta title='Wishlist'/>
          <BreadCrumb href='wishlist' title='Wishlist'/>
          <div className="bg-gray-200">
      <div className='bg-gray-200 text-black container mx-auto py-10'>
          <section className='mb-10 grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {
                wishListArray.map((item)=>(
                    <div className="relative flex flex-col gap-5 bg-slate-100 rounded-lg" key={item.id}>
                        <div className="absolute right-3 cursor-pointer">
                            X
                        </div>
                        <div className="flex-1 bg-white flex justify-center ">
                        <Image src={item.imgs} alt="item" className='' width={100} min-height={100}/>
                        </div>
                        <h4 className='font-bold w-5/6'>{item.desc}</h4>
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

export default Wishlist