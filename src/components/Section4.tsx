import Image from 'next/image';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component'
import styles from './FeatureCollection.module.css';

import cat1 from '../../public/images/watch2.png';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';
import cat5 from '../../public/images/laptop.jpg';



const services = [
    {imgs:cat1,p1:'big screen',h4:'smart watch series 7',p2:'from $399 or $16.62/mo. for 24 mo.*'},
    {imgs:cat2,p1:'studio display',h4:'600 nits of brightness',p2:'27-inch 5k retina display'},
    {imgs:cat5,p1:'smartphones',h4:'smartpone 13 pro',p2:'now in green, from $999.00 or $41.62/mo. for 24 mo. footnote*'},
    {imgs:cat5,p1:'home speakers',h4:'room-filling sound',p2:'from $699 or $116.58/mo. for 12 mo.*'},
]
const Section4 = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className='container mx-auto py-20 h-max'>
        <section className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-between'>         
        {
            services.map((item,index) =>(
                <div className={`flex flex-col rounded-md text-wrap py-10  pl-3 ${index === 0 ? 'bg-black text-white' : 'bg-white text-black'}`} key={index}> 
                <div className="flex-1 flex flex-col gap-5">

                <p className='uppercase font-bold'>{item.p1}</p>
                <h4 className='text-2xl lg:text-3xl capitalize font-bold'>{item.h4}</h4>
                <p className='capitalize'>{item.p2}</p>
                </div>
                <Image src={item.imgs} alt='serivce'className={`${styles.img1}`}/>
                </div>
            ))
        }
        </section>
        </div>
        </div>
  )
}

export default Section4;