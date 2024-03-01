import Image from 'next/image'
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

import cart from '../../public/images/cart.svg'
import menu from '../../public/images/menu.svg'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navIcons } from '@/utlis/Arrays'


const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleMd, setToggleMd] = useState(false)
  return (
      <main className='pt-3  bg-gray-900 text-white overflow-hidden'>
        <section className="flex justify-between container mx-auto">
          <p className='text-1xl text-center flex-auto sm:text-left'>Free Shipping over $100 & Free Returns</p>
          <p className='text-1xl hover:text-orange-300 hidden sm:block'>Hotline <a href="tel:+201094530343">+2 01094530343</a></p>
        </section>

        <div className="container mx-auto">
        <hr className='border-gray-500 mt-3'/>
        </div>
        <section className="hidden sm:grid grid-cols-12 py-3 gap-10 container mx-auto">
          <Link href="/" className='text-2xl col-span-2 sm:text-sm sm:col-span-1 md:text-2xl md:col-span-2'>Dev Corner</Link>
          <div className="bg-white flex justify-between items-center rounded-md col-span-8 md:col-span-4 lg:col-span-5">
          <input type="text" name="search" id="search" placeholder="Search product here..." className='pl-2 overflow-hidden outline-none text-black '/>
          <p className=' text-black bg-orange-300  h-full flex items-center w-20 lg:w-1/6 rounded-md justify-center cursor-pointer'><BsSearch/></p>
          </div>
          <div className="flex gap-10">
            {
              navIcons.map((icon)=>(
                <Link href={icon.link} className={`hidden md:flex gap-4 cursor-pointer`} key={icon.id}>
                  <Image src={icon.imgs} alt={icon.text1} className='block'/>
                  <p className='hover:text-orange-300'>{icon.text1} <br /> {icon.text2}</p>
                </Link>
              ))
            }
            <Link href="/cart" className=" flex items-center cursor-pointer">

              <Image src={cart} alt='cart'/>
              <div className="pl-2">
              <p className='bg-white text-black text-center rounded-lg'>0</p>
              <p>$0.00</p>
              </div>
            </Link>
          </div>
        </section>
            {/* Third */}
        <section className='hidden sm:block py-2 bg-gray-800  uppercase'>
          <div className="container mx-auto flex items-center">

          <div className="flex item text-black pr-3 ">
            <Image src={menu} alt='shop' className='mr-3'/>
            <select className='bg-gray-800 text-white outline-none cursor-pointer'>
              <option value="">shop categories</option>
              <option value="">Action</option>
              <option value="">Another action</option>
              <option value="">Something else here</option>
            </select>
          </div>
          <div className="">
            <Link className='pr-3 hover:text-orange-300' href={'/'}>Home</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/store'}>our store</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/blogs'}>blogs</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/contact'}>contact</Link>
          </div>
          {/* side Menu for MD*/}
        <div className="flex justify-between px-5 md:hidden">
          <GiHamburgerMenu size={30} className='cursor-pointer hover:text-orange-300'
          onClick={()=>setToggleMd(!toggleMd)}/>
        </div>
          </div>
        {
          toggleMd &&
          <div className="h-fit py-5 flex flex-col md:hidden gap-5 text-2xl pl-5 uppercase" onClick={()=>setToggleMd(false)}>
            <Link className='pr-3 hover:text-orange-300' href={'/compareproducts'}>Compare Products</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/wishlist'}>Favorate Wishlist</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/auth/login'}>Login My Account</Link>
          </div>
        }
        </section>
        {/* side Menu */}
        <div className="flex justify-between px-5 py-10 sm:hidden">
          <Link href="/" className='text-2xl'>Dev Corner</Link>
          <GiHamburgerMenu size={30} className='cursor-pointer hover:text-orange-300'
          onClick={()=>setToggle(!toggle)}/>
        </div>
        {
          toggle &&
          <div className="h-fit pb-5 flex flex-col sm:hidden gap-5 text-2xl pl-5 uppercase" onClick={()=>setToggle(false)}>
            <Link className='pr-3 hover:text-orange-300' href={'/'}>Home</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/store'}>our store</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/blogs'}>blogs</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/contact'}>contact</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/compareproducts'}>Compare Products</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/wishlist'}>Favorate Wishlist</Link>
            <Link className='pr-3 hover:text-orange-300' href={'/auth/login'}>Login My Account</Link>
          </div>
        }
      </main>
  )
}

export default Header