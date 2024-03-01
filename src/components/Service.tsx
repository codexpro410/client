import { servicesSection } from '@/utlis/Arrays'
import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black grid grid-cols-10 container mx-auto py-5 gap-2'>
        {
            servicesSection.map(item =>(
                <div className="col-span-5 md:col-span-2 flex items-center" key={item.id}>
                    <Image src={item.imgs} alt='serivce'/>
                    <div className="pl-5">
                        <h4>{item.h4}</h4>
                        <p>{item.p}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Service