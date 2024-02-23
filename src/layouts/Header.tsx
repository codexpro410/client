import Image from 'next/image'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import compare from '../../public/images/compare.svg'
import wishlist from '../../public/images/wishlist.svg'
import user from '../../public/images/user.svg'
import cart from '../../public/images/cart.svg'
import menu from '../../public/images/menu.svg'
import Link from 'next/link'

const navIcons = [
  {imgs:compare, text1:'Compare', text2:'Products',link:"/compareproducts"},
  {imgs:wishlist, text1:'Favorate', text2:'Wishlist',link:"/wishlist"},
  {imgs:user, text1:'Login', text2:'MyAccount',link:"/auth/login"},
]
const Header = () => {
  return (
      <main className='pt-3  bg-gray-900 text-white '>
        <section className="flex justify-between container mx-auto">
          <p className='text-1xl'>Free Shipping over $100 & Free Returns</p>
          <p className='text-1xl hover:text-orange-300'>Hotline <a href="tel:+201094530343">+2 01094530343</a></p>
        </section>

        <div className="container mx-auto">
        <hr className='border-gray-500 mt-3 '/>
        </div>
        <section className="flex py-3 gap-10 container mx-auto ">
          <Link href="/" className='text-2xl w-52'>Dev Corner</Link>
          <div className="bg-white flex justify-between items-center ml-20 rounded-md w-3/6">
          <input type="text" name="search" id="search" placeholder="Search product here..." className='h-6 lg:w-full outline-none text-black pl-3 '/>
          <p className=' text-black bg-orange-300  h-full flex items-center w-20 lg:w-1/6 rounded-md justify-center cursor-pointer'><BsSearch/></p>
          </div>
          <div className="flex gap-10">
            {
              navIcons.map((icon)=>(
                <Link href={icon.link} className={`flex gap-2 cursor-pointer`} key={icon.imgs}>
                  <Image src={icon.imgs} alt={icon.text1} className=' '/>
                  <p className='hover:text-orange-300'>{icon.text1} <br /> {icon.text2}</p>
                </Link>
              ))
            }
            <Link href="/cart" className="flex items-center cursor-pointer">

              <Image src={cart} alt='cart'/>
              <div className="pl-2">
              <p className='bg-white text-black text-center rounded-lg'>0</p>
              <p>$0.00</p>
              </div>
            </Link>
          </div>
        </section>

            {/* Third */}
        <section className=' py-2 bg-gray-800  uppercase'>
          <div className="container mx-auto flex">

          <div className="flex text-black pr-3 ">
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
          </div>
        </section>
      </main>
  )
}

export default Header