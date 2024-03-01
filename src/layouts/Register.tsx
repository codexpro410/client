import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Meta from '@/utlis/Meta'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Login = () => {
  return (
    <>
        <Meta title='Register'/>
        <BreadCrumb href='auth/register' title='Create Account'/>
        <div className="bg-gray-200">
        <div className=' text-black container mx-auto py-10'>
        <section className='mb-10'>
          <div className="flex justify-center items-center bg-gray-300 w-full m-auto p-3 rounded-lg">
            <form action="" className='flex flex-col gap-7 w-4/6'>
            <h1 className='text-center text-3xl font-bold p-5'>Create Account</h1>
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='First name' type="First name" name="First name" id="First name" required />
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Last name' type="Last name" name="Last name" id="Last name" required/>
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Mobile Number' type="tel" name="mobileNumber" id="mobileNumber" required/>
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Password' type="password" name="password" id="password" required />
              <div className="flex justify-center">
                <Button  className={twMerge('bg-orange-300 text-[#000]')}>
                Sign Up
                </Button>
              </div>
            </form>
          </div>
        </section>
        </div>
        </div>
    </>
  )
}

export default Login