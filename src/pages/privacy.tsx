import BreadCrumb from '@/components/BreadCrumb'
import Layout from '@/layouts/Layout'
import Meta from '@/utlis/Meta'
import React from 'react'

const privacyPolicy = () => {
  return (
    <Layout>
        <Meta title='privacy'/>
        <BreadCrumb href='/privacy' title='Privacy Policy'/>
      <section className='bg-gray-100 m-20 p-4'>
        <div className="mb-8 ">
        <h3 className="font-bold text-2xl mb-2">Data Collection</h3>
        <p>
          We collect personal information from you, such as your name, email
          address, shipping address, and payment details, when you make a
          purchase on our website.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="font-bold text-2xl mb-2">Data Usage</h3>
        <p>
          The information we collect is used to process your orders, provide
          customer support, and improve our products and services. We may also
          use your information to send you promotional emails or newsletters.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="font-bold text-2xl mb-2">Data Sharing</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal
          information to third parties without your consent. However, we may
          share your information with trusted third-party service providers
          who assist us in operating our website, conducting our business, or
          servicing you.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl mb-2">Data Security</h3>
        <p>
          We implement a variety of security measures to protect your personal
          information. Your data is encrypted and transmitted securely using
          Secure Socket Layer (SSL) technology. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
      </div>
      </section>
    </Layout>
  )
}

export default privacyPolicy