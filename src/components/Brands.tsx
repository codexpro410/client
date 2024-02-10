import Image from 'next/image'
import React from 'react'
import cat1 from '../../public/images/brand-01.png';
import cat2 from '../../public/images/brand-02.png';
import cat3 from '../../public/images/brand-03.png';
import cat4 from '../../public/images/brand-04.png';
import cat5 from '../../public/images/brand-05.png';
import cat6 from '../../public/images/brand-06.png';
import cat7 from '../../public/images/brand-07.png';
import cat8 from '../../public/images/brand-08.png';

import Marquee from 'react-fast-marquee'
const services = [cat1,cat2,cat3,cat4,cat5,cat6, cat7,cat8]

const FeatureCollection = () => {
  return (
    <div className='bg-gray-200 text-black px-52 pb-10'>
        <Marquee direction='left' speed={50} autoFill>
            <section className='bg-white flex'>
            {
                services.map((item,index) =>(
                    <div className="" key={index}>
                            <Image src={item} alt='serivce' className='mx-10'/>
                    </div>
                ))
            }
            </section>
        </Marquee>
    </div>
  )
}

export default FeatureCollection