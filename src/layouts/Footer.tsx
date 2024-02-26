import React from 'react';
import newsletter from '../../public/images/newsletter.png';
import {BsLinkedin, BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=' bg-[#144861] text-white overflow-hidden'>
      <div className="container mx-auto">
      {/* 1st */}
      <section className='grid grid-cols-1 lg:flex justify-between lg:w-4/6 m-auto py-10'>
        <div className="flex items-center justify-center pb-5 lg:pb-0">
          <Image src={newsletter} alt='newsletter'/>
          <p className='ml-2 text-2xl'>Sign Up For Newsletter</p>
        </div>
        <div className="bg-white flex items-center  rounded-md  2xl:w-2/6 lg:w-full">
          <input type="text" id='subscribe' name='subscribe' className='outline-none text-black p-1 flex-1 h-16'/>
          <button className='text-white bg-cyan-900 uppercase rounded-md  m-1 p-4'>subscribe</button>
        </div>
      </section>
      <hr className='border-cyan-700' />

        {/* 2nd */}
      <section className='sm:grid sm:grid-cols-12 lg:flex justify-between pt-4 mb-10'>
        <div className="sm:col-span-6 ">
          <h2 className='text-2xl font-bold pb-4'>Contact Us</h2>
          <address className=''>
            Demo Store
          <br />
          No. 59 Freedom, ismailia, 1111
          <br />
          Egypt
          <br />
          </address>
          <Link href="tel:+02 01094530343" className='pt-4'>+02 01094530343</Link>
          <br />
          <Link href="mailto:islamabozeed247@gmail.com" className='pt-4'>islamabozeed247@gmail.com</Link>        
          <div className="social flex gap-10 mt-4">
              <Link href='/' className='text-2xl'>
                <BsLinkedin/>
              </Link>
             <Link href='/' className='text-2xl'>
                <BsGithub/>
              </Link>
             <Link href='/' className='text-2xl'>
                <BsYoutube/>
              </Link>
             <Link href='/' className='text-2xl'>
                <BsInstagram/>
              </Link>
          </div>
        </div>
        <div className="sm:col-span-6 flex flex-col">
          <h2 className='text-2xl font-bold pb-4'>Information</h2>
          {/* TODO: privacy-policy path is not working even if i change the file name */}
          <Link href="/privacy" className='pb-4'>Privacy Policy</Link>
          <Link href="/refund-policy" className='pb-4'>Refund Policy</Link>
          <Link href="/shipping-policy" className='pb-4'>Shipping Policy</Link>
          <Link href="/term-conditions" className='pb-4'>Terms Of Service</Link>
          <Link href="/blogs" className='pb-4'>Blogs</Link>
        </div>
        <div className="sm:col-span-6 ">
          <h2 className='text-2xl font-bold pb-4'>Account</h2>
          <p className='pb-4'>Search</p>
          <p className='pb-4'>FAQ</p>
          <p className='pb-4'>Contact</p>
          <p className='pb-4'>Size Chart</p>
        </div>
        <div className="sm:col-span-6 ">
          <h2 className='text-2xl font-bold pb-4'>Quick Links</h2>
          <p className='pb-4'>Accessories</p>
          <p className='pb-4'>Laptops</p>
          <p className='pb-4'>Headphones</p>
          <p className='pb-4'>Smart Watches</p>
          <p className='pb-4'>Tablets</p>
        </div>
        <div className="sm:col-span-6 ">
          <h2 className='text-2xl font-bold pb-4'>Our App</h2>
          <p className='pb-4'>
            Download our App and get extra 15% Discount on 
            <br />
            your first Order...!
          </p>
          <div className="icons">

          </div>
        </div>
      </section>

      <hr className='border-cyan-700' />
            {/* 3rd */}
      <section className='text-center pt-4'>
        <p>&copy; {new Date().getFullYear()}: Powerd by Developer&#39;s Corner, Presented by Islam M. Abozeed</p>
        <div className="pay">
          
        </div>
      </section>
      </div>
    </footer>
  )
}

export default Footer