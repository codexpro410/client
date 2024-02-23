import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import React from 'react'

import cat1 from'../../public/images/watch2.png';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';
import Image from 'next/image';

const colors = {
    black:"bg-black",gray:"bg-gray-500",red:"bg-red-300",slate:"bg-slate-500",amber:"bg-amber-500",sky:"bg-sky-500"
}

const services = [
    {imgs:cat1,Type:"Tablet Computers",SKU:"SKOU33",avaiable:"in Stock",color1:colors.slate, color2:colors.gray,color3:colors.red,size:"S M L", brand:'Havels',desc:"kids headphones bulk 10 pack multi colored for..", price:100,discount:0},
    {imgs:cat4,Type:"Speakers",SKU:"SKOU055",avaiable:"in Stock",color1:colors.red, color2:colors.black,color3:colors.slate,size:"L M", brand:'Bajaj',desc:"Beoplay A1 Portable Bluetooth Speaker with...", price:500,discount:750},
    {imgs:cat2,Type:"Watches",SKU:"SKOU004",avaiable:"in Stock",color1:colors.black, color2:colors.sky,color3:colors.gray,size:"M XL XXL", brand:'Sony',desc:"olympus pen e-PL9 kit with 14-42, EZ Lens, Camera", price:10,discount:0},
    {imgs:cat3,Type:"Camera Lenses",SKU:"SKOU18",avaiable:"in Stock",color1:colors.black, color2:colors.gray,color3:colors.slate,size:"S XXL L", brand:'Havels',desc:"Honor T1 7.01 GB RAM 8 GB something ROM...", price:220,discount:0},
]

const Compareproducts = () => {
  return (
    <>
    <Meta title='Compare Products'/>
        <BreadCrumb href='compareproducts' title='Compare Products'/>
        <div className="bg-gray-200">
    <div className=' text-black container mx-auto py-10'>
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