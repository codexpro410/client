import { categories } from '@/utlis/Arrays'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto py-5'>
        <section className='bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {
            categories.map(item =>(
                <div className="flex items-center justify-between" key={item.id}>
                    <div className="">
                        <h4 className='text-wrap'>{item.h4}</h4>
                        <p>{item.amount} items</p>
                    </div>
                    <Image src={item.imgs} alt='serivce' className='' width={70} height={70}/>
                </div>
            ))
        }
        </section>
    </div>
    </div>
  )
}

export default Categories

