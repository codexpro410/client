import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import Button from '@/components/Button'

import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const info = [
    {icon:<AiOutlineHome/>,p:"33 New Cairo, Egypt"},
    {icon:<AiOutlineMail/>,p:"+0201094530343"},
    {icon:<BiPhoneCall/>,p:"islamabozeed247@gmail.com"},
    {icon:<BiInfoCircle/>,p:"Monday - Friday 10 AM ~ 8 PM"},
]
const ContactUs = () => {
  return (
     <>
        <Meta title='Contacts'/>
            <BreadCrumb href='contact' title='contact us'/>
        <main className='bg-gray-200 text-black container mx-auto py-10'>
            <section className='mb-10'>
                <iframe
                src='https://maps.app.goo.gl/vxxkEL4kakmm4or87'
                height={450} style={{width:"100%"}}
                allowFullScreen={true} loading='lazy'
                no-referrer-when-downgeade
                >

                </iframe>
            </section>
            <section className='rounded-lg flex gap-10 bg-gray-100'>
                <div className="py-10 pl-10 w-1/2">
                    <h3 className='text-3xl font-bold pb-4'>Contact</h3>
                    <form action="" className='flex flex-col gap-5'>
                        <input type="text" placeholder='Name' className='bg-gray-200 p-2'/>
                        <input type="email" placeholder='Email *' className='bg-gray-200 p-2'/>
                        <input type="tel" placeholder='Phone Number' className='bg-gray-200 p-2'/>
                        <textarea cols={30} rows={4} placeholder='Comments' className='bg-gray-200 p-2'></textarea>
                        <Button>Send</Button>
                    </form>
                </div>
                <div className="pt-10 w-1/2 flex flex-col justify-start gap-6">
                <h3 className='text-3xl font-bold pb-4'>Get in Touch With Us</h3>
                {
                    info.map(infos =>(
                        <div className='flex gap-5' key={infos.p}>
                            <div className="text-2xl">{infos.icon}</div>
                            <p>{infos.p}</p>
                        </div>

                    ))
                }

                </div>
            </section>
        </main>
    </>
  )
}
export default ContactUs