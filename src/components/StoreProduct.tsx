
import React, { useState } from 'react'
import styles from '../components/../components/FeatureCollection.module.css';

import ReactStars from 'react-rating-stars-component'


import Image from 'next/image';
import Link from 'next/link';
import { Icons, services } from '@/utlis/Arrays';
type StoreProductProps = {
    grid:number;
}
const StoreProduct : React.FC<StoreProductProps> = ({grid}) => {
    const [hover, setHover] = useState<number | null>(null)
  return (
    <>
        
    {
        services.map((item, index) => (
        <Link href={`/store/${index +1}`} key={index}>
        <div className={`${styles.item} relative flex flex-${grid ===1?"row gap-10":"col"} rounded-md bg-white text-wrap pl-3 cursor-pointer`} key={index}
        onMouseEnter={()=> setHover(index)}
        onMouseLeave={()=> setHover(null)}
        > 
        {/* TODO: transition, will delete this and make it out the box + overflow to box then transition */}
            {hover === index &&
            <div className={`absolute ${grid === 1?"left-40 top-8":"right-2 top-16"} flex flex-col-reverse gap-4`}>
            <Image src={Icons.addCart} alt='serivce'/>
            <Image src={Icons.view} alt='serivce'/>
            <Image src={Icons.compare} alt='serivce'/>
            </div>
            }
            <div className="absolute right-2 top-2">
            <Image src={Icons.wishlist} alt='serivce' height={25} className=''style={{ filter: 'invert(1)' }} />
            </div>
            <div  className='relative flex justify-center items-center pr-4 '>
            <Image src={item.imgs} alt='serivce'className={`${styles.img1}`}/>
            <Image src={item.imgs2} alt='serivce'className={`${styles.img2}`}/>
            </div>
            <div className={``}>
                <h4 className='text-red-500 font-bold capitalize'>{item.brand}</h4>
                <p className='font-bold'>{item.desc}</p>
                <ReactStars count={5} size={24} value={item.rating} edit={false} activeColor="#ffd700"/>
                <div className="flex gap-5 font-bold">
                {
                    item.discount > 0?
                    <>
                    <p className='text-red-500 pb-3'>${item.price}.00</p>
                    <p className='line-through'>${item.discount}.00</p>
                    </>
                    : <p className='pb-3'>${item.price}.00</p>
                }
                </div>
            </div>
        </div>
    </Link>
        ))
    }
    </>
  )
}

export default StoreProduct