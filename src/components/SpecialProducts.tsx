import React from 'react'
import Button from './Button'
import ReactStars from 'react-rating-stars-component'
import './FeatureCollection.module.css'
import styles from'./FeatureCollection.module.css'

import cat1 from '../../public/images/watch2.png';
import cat2 from '../../public/images/camera.jpg';
import cat3 from '../../public/images/tv.jpg';
import cat4 from '../../public/images/headphone.jpg';
import cat5 from '../../public/images/laptop.jpg';
import cat6 from '../../public/images/tv.jpg';

import hover1 from '../../public/images/watch1.png';
import hover2 from '../../public/images/camera.jpg';
import hover3 from '../../public/images/tv.jpg';
import hover4 from '../../public/images/headphone.jpg';
import hover5 from '../../public/images/laptop.jpg';
import hover6 from '../../public/images/tv.jpg';
import Image from 'next/image';

import abs1 from '../../public/images/add-cart.svg';
import abs2 from '../../public/images/view.svg';
import abs3 from '../../public/images/prodcompare.svg';

import abs4 from '../../public/images/wishlist.svg';


const products = [
  {imgs:cat1,img:cat1,imgs2:hover1, brand:'havels',desc:"kids headphones bulk 10 pack multi colored for..",days:743,h:"06",m:"41",sec:"43",stock:200,available:100, rating:5,price:60,discount:75},
  {imgs:cat2,img:cat1,imgs2:hover2, brand:'Sony',desc:"olympus pen e-PL9 kit with 14-42, EZ Lens, Camera",days:743,h:"06",m:"41",sec:"43",stock:200,available:125, rating:2,price:16,discount:30},
  {imgs:cat3,img:cat1,imgs2:hover3, brand:'havels',desc:"Honor T1 7.01 GB RAM 8 GB something ROM...",days:743,h:"06",m:"41",sec:"43",stock:200,available:5, rating:3,price:500,discount:750},
  {imgs:cat4,img:cat1,imgs2:hover4, brand:'Bajaj',desc:"Beoplay A1 Portable Bluetooth Speaker with...",days:743,h:"06",m:"41",sec:"43",stock:200,available:70, rating:4,price:100,discount:150},
  {imgs:cat5,img:cat1,imgs2:hover5, brand:'Sony',desc:"Milanese Loop Watch Band For 42mm/44mm Apple",days:743,h:"06",m:"41",sec:"43",stock:200,available:190, rating:5,price:10,discount:20},
  {imgs:cat6,img:cat1,imgs2:hover6, brand:'Bajaj',desc:"Sony EXTRA BASS Portable Splash-Proof Wireless...",days:743,h:"06",m:"41",sec:"43",stock:200,available:45, rating:4,price:220,discount:250},
]

const productsWithPercent = products.map(product => {
  const percent = (product.available / product.stock) * 100;
  return { ...product, percent };
});

const SpecialProducts: React.FC = () => {


  return (
    <main className='bg-gray-200 text-black px-52 py-20'>
        <h2  className='text-3xl font-bold pb-10'>Special Products</h2>
      <div className="grid  grid-cols-6 gap-4  ">

      
        {
            productsWithPercent.map((product,index) =>(
                <div className="col-span-2 bg-gray-100 flex content-center rounded-lg" key={index}>
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
    </main>
  )
}

export default SpecialProducts