import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import React from 'react'

const SignUp = () => {
  return (
    <>
        <Meta title='Signup'/>
        <main className='bg-gray-200 text-black px-52 pb-10'>
        <BreadCrumb href='auth/signup' title='Sign Up'/>
        <section className='mb-10'>
        </section>
        </main>
    </>
  )
}

export default SignUp