import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import Image from 'next/image'
import React from 'react'

import cat1 from'../../public/images/watch2.png';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';

const services = [
  {imgs:cat1,desc:"kids headphones bulk 10 pack multi colored for..", price:100,discount:0},
  {imgs:cat4,desc:"Beoplay A1 Portable Bluetooth Speaker with...", price:500,discount:750},
  {imgs:cat2,desc:"olympus pen e-PL9 kit with 14-42, EZ Lens, Camera", price:10,discount:0},
  {imgs:cat3,desc:"Honor T1 7.01 GB RAM 8 GB something ROM...", price:220,discount:0},
]

const Wishlist = () => {
  return (
    <>
      <Meta title='Wishlist'/>
          <BreadCrumb href='wishlist' title='Wishlist'/>
          <div className="bg-gray-200">
      <div className='bg-gray-200 text-black container mx-auto py-10'>
          <section className='mb-10 flex gap-2'>
          {
                services.map((item,index)=>(
                    <div className="relative flex flex-col w-1/6 gap-5 bg-slate-100 rounded-lg" key={index}>
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