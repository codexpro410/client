import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Layout from '@/layouts/Layout'
import { services } from '@/utlis/Arrays'
import Meta from '@/utlis/Meta'
import { countAtom } from '@/utlis/atoms/count-atom'
import { totalAtom } from '@/utlis/atoms/total-atom'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
let price:number = 100;
const Cart = () => {
  const [count, setCount] = countAtom.useState()
  const total = count * price;

  return (
    <Layout>
    <Meta title='cart'/>
    <BreadCrumb href='/cart' title='Your Shopping Cart'/>
    { count >= 1?
    <div className="bg-gray-100 md:overflow-hidden sm:overflow-hidden">
  <section className=' container mx-auto py-10 grid grid-cols-12 content-center gap-10'>
    {/* Head */}
      <h3 className='col-span-4 text-2xl pb-5 uppercase text-gray-500'>product</h3>
      <h3 className='col-span-2 text-2xl pb-5 text-center uppercase text-gray-500'>price</h3>
      <h3 className='col-span-2 text-2xl pb-5 text-center uppercase text-gray-500'>quantity</h3>
      <h3 className='col-start-11 col-span-4 text-center text-2xl pb-5 uppercase text-gray-500'>total</h3>
      {/* Data */}
    <div className="col-span-4 text-gray-500">
      <div className="flex items-center gap-10">
        <Image src={services[0].imgs} alt="image" width={100} height={100}/>
        <div className="">
          <p>Kids headphones bulk 10 pack</p>
          <p><span className='font-bold'>Size:</span> S</p>
          <p><span className='font-bold'>Color:</span> #AB5A5A</p>
        </div>
      </div>
    </div>
    <div className="col-span-2 flex items-center justify-center">
          <p className='text-2xl'>${price}.00</p>
      </div>
    <div className="col-span-2 flex items-center justify-center gap-5">
        <div className="flex items-center  bg-white">
          <div className="flex flex-col">
          <div className="text-2xl cursor-pointer hover:bg-black hover:text-white" onClick={()=>setCount(count +1)}>+</div>
          <hr className='border border-gray-200'/>
          <div className="text-2xl cursor-pointer hover:bg-black hover:text-white" onClick={()=>setCount(count -1)}>-</div>
          </div>
         <p className='p-4 text-center cursor-pointer'>{count}</p>
        </div>
         <div className='p-3 rounded-full bg-white flex justify-center items-center'>
          <FaRegTrashAlt color='red' />
          </div>
      </div>
    <div className="col-start-11 col-span-4 flex items-center justify-center">
          <p className='text-2xl'>${total}.00</p>
      </div>
      <div className="col-span-12 flex flex-col gap-5">
      <Link href="/store" className='w-2/6 uppercase'>
    <Button>continue shopping</Button>
    </Link>
    <div className="flex justify-between">
    <p>Order special instructions</p>
    <div className="flex flex-col gap-5">
      <p className='text-2xl text-right'>Subtotal: ${total}.00</p>
      <p className='text-2xl text-right'>Taxes and shipping calcualted at checkout</p>
      <Link href="/checkout" className='flex justify-end uppercase'>
      <Button>Check Out</Button>
      </Link>
    </div>
    </div>

      </div>
  </section>
  </div>
      :
      
  <section className='bg-gray-100 p-40 text-center h-[500px] flex flex-col gap-10'>
    <h1 className='capitalize text-5xl text-gray-500'>your cart is empty</h1>
    <Link href="/store" className='capitalize'>continue shopping</Link>
  </section>
  
    }
    
</Layout>
  )
}

export default Cart