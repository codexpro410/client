import React from 'react'
import Button from './Button'
import ReactStars from 'react-rating-stars-component'
import './FeatureCollection.module.css'
import styles from'./FeatureCollection.module.css'

import cat1 from '../../public/images/watch2.png';

import Image from 'next/image';

import abs1 from '../../public/images/add-cart.svg';
import abs2 from '../../public/images/view.svg';
import abs3 from '../../public/images/prodcompare.svg';
import { products } from '@/utlis/Arrays'




const productsWithPercent = products.map(product => {
  const percent = (product.available / product.stock) * 100;
  return { ...product, percent };
});

const SpecialProducts: React.FC = () => {


  return (
    <div className="bg-gray-200 overflow-hidden">
    <div className=' text-black container mx-auto py-5'>
        <h2  className='text-3xl font-bold pb-5'>Special Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">      
        {
            productsWithPercent.map((product) =>(
                <div className="bg-gray-100 flex content-center rounded-lg" key={product.id}>
                    <section className='relative'>
                      <div className="hidden absolute right-2 top-16 hover:flex flex-col-reverse gap-4">
                    <Image src={abs1} alt='serivce' />
                    <Image src={abs2} alt='serivce'/>
                    <Image src={abs3} alt='serivce'/>
                    </div>

                      <div className="pb-14">
                      <Image src={cat1} alt='serivce' className={`${styles.img1}`}/>
                      <div className="flex justify-between">
                      <Image src={cat1} alt='serivce' width={50} height={50}/>
                      <Image src={cat1} alt='serivce' width={50} height={50}/>
                      </div>
                      </div>
                    </section>

                    <section className='flex flex-col gap-3 pl-3'>
                      <p className='text-red-500 uppercase font-bold'>{product.brand}</p>
                      <h4>{product.desc}</h4>
                      <ReactStars count={5} size={24} value={product.rating} edit={false} activeColor="#ffd700"/>
                      <div className="flex gap-5">
                      <p className='text-red-500 font-bold'>${product.price}.00</p>
                      <p className='line-through'>${product.discount}.00</p>
                      </div>
                      <p>{product.days} Days <span className='p-3 bg-orange-500 rounded-full mr-2'>{product.m}</span>: <span className='p-3 bg-orange-500 rounded-full mr-2'>{product.h}</span> :<span className='p-3 bg-orange-500 rounded-full ml-2'>{product.sec}</span> </p>
                      <p className='text-gray-500'>Products: {product.available}</p>
                      <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 ">
                        <div className="bg-green-600 h-2.5 rounded-full " style={{width: `${product.percent}%`}}></div>
                      </div>
                      <Button>Add to cart</Button>
                    </section>
                </div>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default SpecialProducts