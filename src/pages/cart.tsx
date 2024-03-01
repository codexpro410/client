import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Layout from '@/layouts/Layout'
import { services } from '@/utlis/Arrays'
import Meta from '@/utlis/Meta'
import { countAtom } from '@/utlis/atoms/count-atom'
import { totalAtom } from '@/utlis/atoms/total-atom'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
let price:number = 100;
const Cart = () => {
  const [count, setCount] = countAtom.useState()
  const [totals, setTotals] = totalAtom.useState()
  const total = count * price;


  useEffect(() => {
 
    // Disable text selection for elements
    // with class "no-select"
    const noSelectElements =
        document.querySelectorAll(".no-select");
    noSelectElements.forEach((element) => {
        element.style.webkitUserSelect = "none";
        element.style.mozUserSelect = "none";
        element.style.msUserSelect = "none";
        element.style.userSelect = "none";
    });
}, []);

useEffect(() => {
  console.log(totals)
},[totals]);
  return (
    <Layout>
    <Meta title='cart'/>
    <BreadCrumb href='/cart' title='Your Shopping Cart'/>
    { count >= 1?
    <div className="bg-gray-100 overflow-hidden no-select ">
  <section className=' container mx-auto py-10 grid grid-cols-12 content-center gap-10'>
    {/* Head */}
      <h3 className='col-span-4 text-2xl pb-5 uppercase text-gray-500'>product</h3>
      <h3 className='col-span-2 text-2xl pb-5 text-center uppercase text-gray-500'>price</h3>
      <h3 className='col-span-2 text-2xl pb-5 text-center uppercase text-gray-500'>quantity</h3>
      <h3 className='col-start-11 col-span-4 text-center text-2xl pb-5 uppercase text-gray-500'>total</h3>
      {/* Data */}
    <div className="col-span-4 text-gray-500">
      <div className="flex flex-row items-center gap-10">
        <Image src={services[0].imgs} alt="image" width={100} height={100} className='hidden sm:block'/>
        <div className="">
          <p>Kids headphones bulk 10 pack</p>
          <p className='hidden sm:block'><span className='font-bold'>Size:</span> S</p>
          <p className='hidden sm:block'><span className='font-bold '>Color:</span> #AB5A5A</p>
        </div>
      </div>
    </div>
    <div className="col-span-2 flex items-center justify-center">
          <p className='text-2xl'>${price}.00</p>
      </div>
    <div className="col-span-2 flex items-center justify-center gap-5 ">
        <div className="flex items-center  bg-white">
         <input type="number" className='py-4 text-center cursor-pointer text-black' min="1" max="20" value={count} 
        //  onChange={e => setCount(parseInt(e.target.value))}
         onChange={e =>{
          const newCount = parseInt(e.target.value);
           setCount(newCount);
            setTotals(newCount * price)  
          }}/>
           <div className="flex flex-col justify-center items-center">
          <div className="text-2xl cursor-pointer hover:bg-black hover:text-white" onClick={()=>setCount(count +1)}><IoIosArrowUp/></div>
          {/* <hr className='border border-gray-200'/> */}
          <div className="text-2xl cursor-pointer hover:bg-black hover:text-white" onClick={()=>setCount(count -1)}><IoIosArrowDown/></div>
          </div>
          {/* {count}</input> */}
        </div>
         <div className='p-4 rounded-full bg-white flex justify-center items-center border-2 hover:border-black cursor-pointer'>
          <FaRegTrashAlt color='red' onClick={()=>setCount(0)}/>
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