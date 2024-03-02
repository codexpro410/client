import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Meta from '@/utlis/Meta'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ResetPassword = () => {
  return (
    <>
        <Meta title='reset-password'/>
        <BreadCrumb href='auth/reset-password' title='Reset Password'/>
        <main className='bg-gray-200 text-black container mx-auto max-w-6xl py-10'>
        <section className='mb-10'>
          <div className="flex justify-center items-center bg-gray-300 w-3/6 m-auto p-3 rounded-lg">
            <form action="" className='flex flex-col gap-7 w-4/6'>
            <h1 className='text-center text-3xl font-bold p-5'>Create Account</h1>
                <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Password' type="password" name="password" id="password" required />
                <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Confirm Password' type="password" name="password" id="password" required />
              <div className="flex justify-center">
                <Button className={twMerge('hover:bg-orange-300 text-[#000]')}>OK</Button>
              </div>
            </form>
          </div>
        </section>
        </main>
    </>
  )
}

export default ResetPassword