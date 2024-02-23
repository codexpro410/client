
import Layout from '@/layouts/Layout'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import BlogCard from '@/components/BlogCard'
import BlogFilter from '../../layouts/BlogFilter'

import cat1 from '../../../public/images/blog-1.jpg';
import cat2 from '../../../public/images/blog-2.jpg';
import cat3 from '../../../public/images/blog-3.jpg';
export const array = [
  {
    id:1,
    date: '1 Dec, 2022',
    title: 'A Beautiful Sunday Morning Renaissance',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,',
    p2: 'alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi.',
    img:cat1,
  },
  {
    id: 2,
    date: '1 Dec, 2023',
    title: 'Captivating Culinary Adventures',
    p1: 'Embark on a culinary odyssey as you savor the diverse flavors and aromas of exquisite dishes from around the world.',
    p2: 'Indulge your taste buds in a symphony of tastes, from savory delights to sweet confections, each dish telling a unique story.',
    img: cat2,
  },
  {
    id: 3,
    date: '1 Dec, 2024',
    title: 'Whimsical Artistic Expressions',
    p1: 'Dive into the world of art and creativity, where imagination knows no bounds and every stroke on the canvas tells a tale.',
    p2: 'Experience the magic of artistic expressions that transport you to different realms, igniting a spark of inspiration within.',
    img: cat3,
  },
];

const blogs = () => {
  return (
    <Layout>
        <Meta title='Blogs'/>
        <BreadCrumb href='blogs' title='blogs'/>
        <div className="bg-gray-200">
        <div className=' text-black container mx-auto py-10'>
        <section className='mb-10 grid grid-cols-[330px_1fr] gap-4'>
          <BlogFilter/>
          <div className="grid grid-cols-2 gap-4">
            {
              array.map((content)=>(
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
export default blogs