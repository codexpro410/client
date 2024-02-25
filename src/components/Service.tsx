import Image from 'next/image'
import React from 'react'
import srv1 from '../../public/images/service.png';
import srv2 from '../../public/images/service-02.png';
import srv3 from '../../public/images/service-03.png';
import srv4 from '../../public/images/service-04.png';
import srv5 from '../../public/images/service-05.png';
const services = [
    {imgs:srv1, h4:'Free Shipping',p:'From all orders over $100'},
    {imgs:srv2, h4:'Daily Surprise Offers',p:'Save up to 25% off'},
    {imgs:srv3, h4:'Support 24/7',p:'Shop with an export'},
    {imgs:srv4, h4:'Affordable Prices',p:'Get Factory direct price'},
    {imgs:srv5, h4:'Secure Payments',p:'100% Protected Payments'},
]
const Service = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black grid grid-cols-10 container mx-auto py-20 gap-2'>
        {
            services.map(item =>(
                <div className="col-span-5 md:col-span-2 flex items-center" key={item.h4}>
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