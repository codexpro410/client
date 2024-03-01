
import Layout from '@/layouts/Layout'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import BlogCard from '@/components/BlogCard'
import BlogFilter from '../../layouts/BlogFilter'
import { blogsArray } from '@/utlis/Arrays'

const Blogs = () => {
  return (
    <Layout>
        <Meta title='Blogs'/>
        <BreadCrumb href='blogs' title='blogs'/>
        <div className="bg-gray-200">
        <div className=' text-black container mx-auto py-10'>
        <section className='mb-10 grid  lg:grid-cols-[330px_1fr] gap-4'>
          <BlogFilter/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
              blogsArray.map((content)=>(
                <div className="" key={content.id}>
                  <BlogCard id={content.id} content={content}/>
                </div>
              ))
            }
          </div>
        </section>
        </div>
        </div>
    </Layout>
  )
}
export default Blogs