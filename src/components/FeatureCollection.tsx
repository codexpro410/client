import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component'
import styles from './FeatureCollection.module.css';

import abs1 from '../../public/images/add-cart.svg';
import abs2 from '../../public/images/view.svg';
import abs3 from '../../public/images/prodcompare.svg';
import abs4 from '../../public/images/wishlist.svg';
import axios from 'axios';
import { productsAtom } from '@/utlis/atoms/products-atom';

const FeatureCollection = () => {
    const [hover, setHover] = useState<number | null>(null)
    const products = productsAtom.useValue()
    const URL = "http://localhost:4000/products"
    useEffect(() => {
        axios.get(URL).then((res)=>{
            productsAtom.update(res.data)
        })
    }, [])
    console.log(products)
  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto pb-10 h-max'>
        <div className="flex justify-between">
        <h2  className='text-3xl font-bold pb-10'>Featured Collection</h2>
        <div className="flex gap-4">
            <p className='text-2xl cursor-pointer'>&lt;</p>
            <p className='text-2xl cursor-pointer'>&gt;</p>
        </div>
        </div>
        <section className='grid grid-cols-4 gap-2 justify-between items-center '>
        {
            products.map((product,index) =>(
                <div className={`${styles.product} relative flex flex-col rounded-md bg-white text-wrap pl-3 cursor-pointer`} key={index}
                onMouseEnter={()=> setHover(index)}
                onMouseLeave={()=> setHover(null)}
                > 
                {/* TODO: transition, will delete this and make it out the box + overflow to box then transition */}
                    {hover === index &&
                    <div className="absolute right-2 top-16 flex flex-col-reverse gap-4">
                    <Image src={abs1} alt='serivce' width={20} height={20}/>
                    <Image src={abs2} alt='serivce' width={20} height={20}/>
                    <Image src={abs3} alt='serivce' width={20} height={20}/>
                    </div>
                    }
                     <div className="absolute right-2 top-2">
                    <Image src={abs4} alt='serivce' height={25} className=''style={{ filter: 'invert(1)' }} width={20} />
                     </div>
                    <div  className='flex justify-center items-center pr-4 '>
                    <Image src={""+product.imgs} alt='serivce'className={`${styles.img1}`} width={100} height={100}/>
                    <Image src={""+product.imgs2} alt='serivce'className={`${styles.img2}`} width={100} height={100} />
                    </div>
                        <h4 className='text-red-500 font-bold'>{product.brand}</h4>
                        <p className='font-bold'>{product.desc}</p>
                        <ReactStars count={5} size={24} value={product.rating} edit={false} activeColor="#ffd700"/>
                        <div className="flex gap-5 font-bold">
                        {
                            product.discount > 0?
                            <>
                            <p className='text-red-500 pb-3'>${product.price}.00</p>
                            <p className='line-through'>${product.discount}.00</p>
                            </>
                            : <p className='pb-3'>${product.price}.00</p>
                        }
                        </div>
                </div>
            ))
        }
        </section>
    </div>
    </div>
  )
}

export default FeatureCollection;