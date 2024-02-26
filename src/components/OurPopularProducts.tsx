import Image from 'next/image';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component'
import styles from './FeatureCollection.module.css';

import cat1 from '../../public/images/watch2.png';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';
import cat5 from '../../public/images/laptop.jpg';

import hover1 from '../../public/images/watch1.png';
import hover2 from '../../public/images/camera.jpg';
import hover3 from '../../public/images/tv.jpg';
import hover4 from '../../public/images/headphone.jpg';


import abs1 from '../../public/images/add-cart.svg';
import abs2 from '../../public/images/view.svg';
import abs3 from '../../public/images/prodcompare.svg';
import abs4 from '../../public/images/wishlist.svg';

const services = [
    {imgs:cat1,imgs2:hover1, brand:'havels',desc:"kids headphones bulk 10 pack multi colored for..", rating:5,price:100,discount:0},
    {imgs:cat2,imgs2:hover2, brand:'Sony',desc:"olympus pen e-PL9 kit with 14-42, EZ Lens, Camera", rating:2,price:10,discount:0},
    {imgs:cat3,imgs2:hover3, brand:'havels',desc:"Honor T1 7.01 GB RAM 8 GB something ROM...", rating:3,price:100,discount:0},
    {imgs:cat4,imgs2:hover4, brand:'Bajaj',desc:"Beoplay A1 Portable Bluetooth Speaker with...", rating:4,price:500,discount:750},

]
const filter = [
    {imgs:cat1,name:'Smart Watch'},
    {imgs:cat2,name:'Campera'},
    {imgs:cat5,name:'Laptops'},
]
const OurPopularProducts = () => {
    const [hover, setHover] = useState<number | null>(null)

  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto pb-10 h-max'>
        <div className="flex justify-between">
        <h2  className='text-3xl font-bold pb-10'>Our Popular Products</h2>
        <div className="flex gap-4">
            <p className='text-2xl cursor-pointer'>&lt;</p>
            <p className='text-2xl cursor-pointer'>&gt;</p>
        </div>
        </div>
        <section className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 justify-between'>
            <div className="rounded-lg items-center gap-7 bg-white flex flex-row sm:flex-col  justify-center col-span-2 sm:col-span-1 row-span-2">
                {filter.map(item => (
                    <div className='flex gap-5 items-center' key={item.name}>
                    <Image src={item.imgs} alt='serivce' style={{width:"50px"}}/>
                    <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-lg p-10 bg-gray-900 text-white flex flex-col gap-6">
                <p>15% OFF</p>
                <p className='text-2xl font-bold'>Home Speakers</p>
                <p>From $399 or $16.62/mo.
                    <br />
                    for 24 mo.*
                </p>
            </div>
        {
            services.map((item,index) =>(
                <div className={`${styles.item} relative flex flex-col rounded-md bg-white text-wrap pl-3 cursor-pointer`} key={index}
                onMouseEnter={()=> setHover(index)}
                onMouseLeave={()=> setHover(null)}
                > 
                {/* TODO: transition, will delete this and make it out the box + overflow to box then transition */}
                    {hover === index &&
                    <div className="absolute right-2 top-16 flex flex-col-reverse gap-4">
                    <Image src={abs1} alt='serivce'/>
                    <Image src={abs2} alt='serivce'/>
                    <Image src={abs3} alt='serivce'/>
                    </div>
                    }
                     <div className="absolute right-2 top-2">
                    <Image src={abs4} alt='serivce' height={25} className=''style={{ filter: 'invert(1)' }} />
                     </div>
                    <div  className='flex justify-center items-center pr-4 '>
                    <Image src={item.imgs} alt='serivce'className={`${styles.img1}`}/>
                    <Image src={item.imgs2} alt='serivce'className={`${styles.img2}`} />
                    </div>
                        <h4 className='text-red-500 font-bold'>{item.brand}</h4>
                        <p className='font-bold'>{item.desc}</p>
                        <ReactStars count={5} size={24} value={item.rating} edit={false} activeColor="#ffd700"/>
                        <div className="flex gap-5 font-bold">
                        {
                            item.discount > 0?
                            <>
                            <p className='text-red-500 pb-3'>${item.price}.00</p>
                            <p className='line-through'>${item.discount}.00</p>
                            </>
                            : <p className='pb-3'>${item.price}.00</p>
                        }
                        </div>
                </div>
            ))
        }
        </section>
        </div>
        </div>
  )
}

export default OurPopularProducts;