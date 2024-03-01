import { Brands } from '@/utlis/Arrays'
import Image from 'next/image'
import React from 'react'

import Marquee from 'react-fast-marquee'

const FeatureCollection = () => {
  return (
    <div className="bg-gray-200">
    <div className=' text-black container mx-auto py-5'>
        <Marquee direction='left' speed={50} autoFill>
            <section className='bg-white flex'>
            {
                Brands.map((item) =>(
                    <div className="" key={item.id}>
                            <Image src={item.brand} alt='serivce' className='mx-10'/>
                    </div>
                ))
            }
            </section>
        </Marquee>
    </div>
    </div>
  )
}

export default FeatureCollection