import Image from 'next/image'
import React from 'react'

import Button from './Button';
import { news } from '@/utlis/Arrays';
const OurLatestNews = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto py-5'>
        <h2 className='text-3xl font-bold pb-5'>Our Latest News</h2>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center'>
            {
                news.map((item) =>(
                    <div className="pb-5 flex flex-col gap-3 bg-white rounded-lg cursor-pointer" key={item.id}>
                        <Image src={item.imgs} alt='news' className='w-full rounded-lg'/>
                        <div className="flex flex-col gap-3 pl-3">
                        <p className=''>{item.date}</p>
                        <h3 className=''>{item.h3}</h3>
                        <p className=''>
                            {item.p1}
                            <br />
                            {item.p1}

                        </p>
                        <Button>Buy Now</Button>

                        </div>
                    </div>
                ))
            }
            </section>
    </div>
    </div>
  )
}

export default OurLatestNews