import BreadCrumb from '@/components/BreadCrumb'
import Button from '@/components/Button'
import Meta from '@/utlis/Meta'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ForgotPassword = () => {
  return (
    <>
     <Meta title='Login'/>
        <BreadCrumb href='auth/login' title='Account'/>
        <main className='bg-gray-200 text-black px-52 pb-10 mt-'>
        <section className='py-10'>
          <div className="flex justify-center items-center bg-gray-300 w-3/6 m-auto p-3 rounded-lg">
            <form action="" className='flex flex-col gap-7 w-4/6'>
            <h1 className='text-center text-3xl font-bold p-5'>Reset Your Password</h1>
            <h2 className='text-center text-1xl font-bold p-5'>We will send you an email to reset your password</h2>
              <input className='bg-slate-200 h-10 rounded-lg p-2 text-black' placeholder='Email' type="email" name="email" id="email" />
              <div className="flex flex-col items-center gap-8 ">
              <Button>Submit</Button>
                {/* TODO: need className Probs to change color and font / hover  vurses/ width  */}
                <Button type='button' className={twMerge('bg-orange-300 text-black')}>
                  <Link href="login">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </section>
        </main>
</>
  )
}

export default ForgotPassword