import React from 'react'
import ReactStars from 'react-rating-stars-component'
import styles from '../components/FeatureCollection.module.css';


import Image from 'next/image';
import { services } from '@/utlis/Arrays';




const StoreFilter = () => {
  return (
    <section className="">
                <div className="flex flex-col gap-4 bg-gray-100 text-gray-500 rounded-lg capitalize p-5 ">
                    <h3 className='text-black text-2xl font-semibold'>shop by categories</h3>
                    <a href="">Home</a>
                    <a href="store">our store</a>
                    <a href="blogs">Blogs</a>
                    <a href="contact">contact</a>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 text-gray-500 rounded-lg capitalize p-5 my-5">
                    <h3 className='text-black text-2xl font-semibold'>filter by</h3>
                    <h3 className='text-black text-2xl font-semibold'>availability</h3>
                    <div className='flex gap-3'>
                    <input id="stock" type="checkbox" value="" className="w-4 h-4 accent-fuchsia-500 text-fuchsia-600 bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="stock" className="ms-2 text-sm font-medium dark:text-gray-300">in stock (21)</label>

                    </div>
                    <div className='flex gap-3'>
                    <input id="out" type="checkbox" value="" className="w-4 h-4 accent-fuchsia-500 text-fuchsia-600 bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="out" className="ms-2 text-sm font-medium dark:text-gray-300">out of stock(1)</label>
                    </div>
                    <h3 className='text-black text-2xl font-semibold'>price</h3>
                    <div className="flex items-center gap-3">
                            $ <input type="text" placeholder='From' className='w-2/6 h-10' />
                            $ <input type="text" placeholder='To' className='w-2/6 h-10' />
                    </div>
                    <h3 className='text-black text-2xl font-semibold'>color</h3>
                    <div className="grid grid-cols-8 gap-1 grid-flow-row mr-2">
                        <div className="p-4 bg-gray-600 rounded-full"></div>
                        <div className="p-4 bg-blue-300 rounded-full"></div>
                        <div className="p-4 bg-gray-700 rounded-full"></div>
                        <div className="p-4 bg-yellow-600 rounded-full"></div>
                        <div className="p-4 bg-gray-600 rounded-full"></div>
                        <div className="p-4 bg-red-600 rounded-full"></div>
                        <div className="p-4 bg-gray-600 rounded-full"></div>
                        <div className="p-4 bg-amber-600 rounded-full"></div>
                        <div className="p-4 bg-lime-600 rounded-full"></div>
                    </div>
                    <h3 className='text-black text-2xl font-semibold'>size</h3>
                    <div className="">
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>S (10)</p>
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>M (13)</p>
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>L (10)</p>
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>XL (5)</p>
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>XXL (5)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 text-gray-500 rounded-lg capitalize p-5 my-5">
                    <h3 className='text-black text-2xl font-semibold'>product tag</h3>
                    <div className="flex gap-3">
                    <p className='bg-gray-200 p-1 text-sm'>Headphones</p>
                    <p className='bg-gray-200 p-1 text-sm'>Laptop</p>
                    <p className='bg-gray-200 p-1 text-sm'>Mobile</p>
                    <p className='bg-gray-200 p-1 text-sm'>Oppo</p>
                    </div>
                    <div className="flex gap-4">
                    <p className='bg-gray-200 p-1 text-sm'>Speaker</p>
                    <p className='bg-gray-200 p-1 text-sm'>Tablet</p>
                    <p className='bg-gray-200 p-1 text-sm'>Vivo</p>
                    <p className='bg-gray-200 p-1 text-sm'>Wow</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 text-gray-500 rounded-lg capitalize p-5 mt-5">
                    <h3 className='text-black text-2xl font-semibold'>random products</h3>
                        {
                            services.slice(0,2).map((item,index)=>(
                            <div className="flex gap-1 text-black" key={index}>
                            <div  className='flex justify-center items-center pr-4 '>
                            <Image src={item.imgs} alt='serivce'className={`${styles.img1}`}/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className='text-red-500 font-bold'>{item.brand}</h4>
                                <p className='font-bold'>{item.desc}</p>
                                <ReactStars count={5} size={24} value={item.rating} edit={false} activeColor="#ffd700"/>
                                <p className='font-semibold'>${item.price}</p>
                            </div>
                            </div>
                        ))
                        }
                    <div className="flex gap-1">

                    </div>
                </div>
            </section>
  )
}

export default StoreFilter