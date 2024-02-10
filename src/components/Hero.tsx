
import React from 'react'
import HeroImages from './heroImages'
import mainb from '../../public/images/hero.jpg';
import catb1 from '../../public/images/catbanner-01.jpg';
import catb2 from '../../public/images/catbanner-02.jpg';
import catb3 from '../../public/images/catbanner-03.jpg';
import catb4 from '../../public/images/catbanner-04.jpg';
import { twMerge } from 'tailwind-merge'

const heroArray = [
    {imgs:catb1,
    ptext:'best sale',
    h1text:'Laptops Max',
    desc1:'From $1699.00 or',
    desc2:'$41.62/mo.'},
    {imgs:catb2,
    ptext:'new arrival',
    h1text:'Buy IPad Air',
    desc1:'From $599.00 or ',
    desc2:'$49.91/mo. for 12 mo.*'},
    {imgs:catb3,
    ptext:'15% off',
    h1text:'Smartwatch 7',
    desc1:'Shop the latest band',
    desc2:'style and colors'},
    {
      imgs:catb4,
    ptext:'free engraving',
    h1text:'AirPods Max',
    desc1:'High-fideitly playback &',
    desc2:'ultra-low distortion'
  },
  ]
const Hero = () => {
  return (
      <main className='grid bg-gray-100 grid-cols-12 gap-4 px-52 py-20 text-black'>
        <div className="col-span-6 relative font-bold p-1">
            <HeroImages imgs={mainb} divStyle={twMerge('top-10 left-10 gap-5')} h1Style='text-4xl' p1text='supercharged for pros' h1Text='iPad S13+Pro.' desc1='From $999.00 or $41.62/mo.' desc2='for 24 mo. Footnote*'  showBtn={true}/>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-4 ">
                {
                    heroArray.map(item =>(
                    <div key={item.ptext}  className=" relative">
                        {/* TODO: edit the array and call it in the HeroImages */}
                        <HeroImages imgs={item.imgs} divStyle={twMerge('top-24 left-10')} p1text={item.ptext} h1Text={item.h1text} desc1={item.desc1} desc2={item.desc2}/>
                    </div>
                        ))
                    }
                    </div>
      </main>
  )
}
export default Hero