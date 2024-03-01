import Image from 'next/image';
import React from 'react';

import styles from './FeatureCollection.module.css';
import { ads } from '@/utlis/Arrays';


const Ads = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className='container mx-auto py-5 h-max'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-between'>         
        {
            ads.map((item,index) =>(
                <div className={`flex flex-col rounded-md text-wrap py-10  pl-3 ${index === 0 ? 'bg-black text-white' : 'bg-white text-black'}`} key={item.id}> 
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

export default Ads;