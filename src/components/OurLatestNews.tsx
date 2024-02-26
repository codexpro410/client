import Image from 'next/image'
import React from 'react'
import cat1 from '../../public/images/blog-1.jpg';
import cat2 from '../../public/images/blog-1.jpg';
import cat3 from '../../public/images/blog-1.jpg';
import cat4 from '../../public/images/blog-1.jpg';

import Button from './Button';

const date = '11 JUNE, 2022'
const news = [
    {imgs:cat1, date:date,h3:"A Beatiful Sunday Morning Renaissance",p1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ",p2:"alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi."},
    {imgs:cat2, date:date,h3:"Sed Ut Perspiciatis Unde Omnis...",p1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ",p2:"alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi."},
    {imgs:cat3, date:date,h3:"Vitae Magnis Fusce Laoreet Porttitor...",p1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ",p2:"alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi."},
    {imgs:cat4, date:date,h3:"Urna Pretium Ellt Mauris Cursus Curabitu",p1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ",p2:"alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi."},
]

const OurLatestNews = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto pb-10'>
        <h2 className='text-3xl font-bold pb-10'>Our Latest News</h2>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center'>
            {
                news.map((item,index) =>(
                    <div className="pb-5 flex flex-col gap-3 bg-white rounded-lg cursor-pointer" key={index}>
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