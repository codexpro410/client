import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import React from 'react'

const SignUp = () => {
  return (
    <>
        <Meta title='Signup'/>
        <div className="bg-gray-200">
        <div className=' text-black container mx-auto pb-10'>
        <BreadCrumb href='auth/signup' title='Sign Up'/>
        <section className='mb-10'>
        </section>
        </div>
        </div>
    </>
  )
}

export default SignUp