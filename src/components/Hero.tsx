
import React, { useEffect, useState } from 'react'
import HeroImages from './heroImages'
import mainb from '../../public/images/hero.jpg';

import { twMerge } from 'tailwind-merge'
import axios from 'axios';
import { StaticImageData } from 'next/image';
import { heroArray } from '@/utlis/Arrays';


type heroProps = {
  id:number;
  imgs:StaticImageData;
  ptext:string;
  h1text:string;
  desc1:string;
  desc2:string;
}
const Hero = () => {
  const [hero, setHero] = useState<heroProps[]>([])
  const URL = "http://localhost:4000/hero"
  // useEffect(() => {
  //   axios.get(URL).then(res =>{
  //     setHero(res.data)
  //   })
  // }, [])
  
  return (
    <main className=''>
      <div className='grid  grid-cols-12 gap-4 container mx-auto pt-10 pb-5 text-black'>
        <div className="col-span-12 md:col-span-12 lg:col-span-6 w-full relative font-bold p-1">
            <HeroImages imgs={mainb} divStyle={twMerge('top-10 left-10 gap-5')} h1Style='text-4xl' p1text='supercharged for pros' h1Text='iPad S13+Pro.' desc1='From $999.00 or $41.62/mo.' desc2='for 24 mo. Footnote*'  showBtn={true}/>
        </div>
        <div className="col-span-6 sm:grid hidden grid-cols-2 gap-4 ">
                {
                    heroArray.map(item =>(
                    <div key={item.id}  className="relative hidden lg:block">
                        {/* TODO: edit the array and call it in the HeroImages */}
                        <HeroImages imgs={item.imgs} divStyle={twMerge('top-10 left-5')} p1text={item.ptext} h1Text={item.h1text} desc1={item.desc1} desc2={item.desc2}/>
                    </div>
                        ))
                    }
                    </div>
      </div>
      </main>
  )
}
export default Hero