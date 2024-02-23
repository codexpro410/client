import Layout from '@/layouts/Layout'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import BlogCard from '@/components/BlogCard';
import { array } from '@/pages/blogs';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import BlogFilter from '../../layouts/BlogFilter';
import Button from '@/components/Button';
import { StaticImageData } from 'next/image';


type SingleBlogProps = {
  content: {
    id:number;
    date: string;
    title: string;
    p1: string;
    p2: string;
    img:StaticImageData | "";
  };
};
const SingleBlog : React.FC<SingleBlogProps> = ({content}) => {
 
  return (
    <Layout>
        <Meta title='Blogs'/>
        <BreadCrumb href={`${content.id}`} title={content.title}/>
        <div className="bg-gray-300">
        <section className=' grid grid-cols-[330px,1fr] gap-4 container mx-auto py-10 '>
          <BlogFilter/>
          <div className="">
            <h1 className='text-3xl'>{content.title}</h1>
            <div className='my-10 flex flex-col gap-2 rounded-lg text-wrap w-5/6 '>
              <BlogCard btn={false} btnText="back" content={content}/>
            </div>
            <form className="p-3 bg-gray-200 flex flex-col items-stretch gap-4 rounded-lg w-5/6">
              <h3>Leave A Comment</h3>
              <div className="flex gap-4 rounded-lg">
                <input className='w-full p-3 bg-gray-100' type="text" placeholder='Name *' required/>
                <input className='w-full p-3 bg-gray-100' type="email" placeholder='Email *' required/>
              </div>
              <textarea className='w-full p-3 bg-gray-100' name="comment" placeholder='Comment *' id="comment" required></textarea>
              <div className="flex justify-center">
              <Button type='submit' className=''>Post Comment</Button>

              </div>
            </form>
          </div>
        </section>
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = array.map((_, index) => ({ params: { blog: `${index + 1}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps ({ params}:Params) {
  const blogIndex = Number(params.blog) - 1;
  const content = array[blogIndex];
  return {
    props: {
      content,
    },
  };
}

export default SingleBlog