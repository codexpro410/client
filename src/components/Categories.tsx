import Image from 'next/image'
import React from 'react'
import cat1 from '../../public/images/laptop.jpg';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';
import cat5 from '../../public/images/laptop.jpg';
import cat6 from '../../public/images/tv.jpg';
import cat7 from '../../public/images/headphone.jpg';
import cat8 from '../../public/images/acc.jpg';
import cat9 from '../../public/images/speaker.jpg';
import cat10 from '../../public/images/camera.jpg';
const services = [
    {imgs:cat1, h4:'Computers & Laptop',amount:8},
    {imgs:cat2, h4:'Cameras',amount:10},
    {imgs:cat3, h4:'Smart Television',amount:12},
    {imgs:cat4, h4:'SmartWatches',amount:13},
    {imgs:cat5, h4:'Music & Gaming',amount:4},
    {imgs:cat6, h4:'Mobiles & Tablets',amount:5},
    {imgs:cat7, h4:'Headphones',amount:6},
    {imgs:cat8, h4:'Accessories',amount:10},
    {imgs:cat9, h4:'Portable Speakers',amount:8},
    {imgs:cat10, h4:'Hope Appliances',amount:6},

]
const Categories = () => {
  return (
    <div className='bg-gray-200 text-black px-52 pb-10'>
        <section className='bg-white flex-wrap flex justify-between items-center'>
        {
            services.map(item =>(
                <div className="flex items-center w-1/5" key={item.h4}>
                    <div className="pl-5">
                        <h4>{item.h4}</h4>
                        <p>{item.amount} items</p>
                    </div>
                    <Image src={item.imgs} alt='serivce' />
                </div>
            ))
        }
        </section>
    </div>
  )
}

export default Categories

