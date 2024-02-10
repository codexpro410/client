import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Meta from '@/utlis/Meta'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Login = () => {
  return (
    <>
        <Meta title='Login'/>
        <BreadCrumb href='auth/login' title='Account'/>
        <main className='bg-gray-200 text-black px-52 py-10'>
        <section className='mb-10'>
          <div className="flex justify-center items-center bg-gray-300 w-3/6 m-auto p-3 rounded-lg">
            <form action="" className='flex flex-col gap-7 w-4/6'>
            <h1 className='text-center text-3xl font-bold p-5'>Login</h1>
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Email' type="email" name="email" id="email" required />
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Password' type="password" name="password" id="password" required/>
              <Link href="forgotpassword" className='font-medium'>Forgot your password?</Link>
              <div className="flex justify-between gap-8 ">
                <Button>Login</Button>
                <Button type='button' className={twMerge('bg-orange-300 text-[#000]')}>
                <Link href="register">Sign Up</Link>
                  </Button>
              </div>
            </form>
          </div>
        </section>
        </main>
    </>
  )
}

export default Login