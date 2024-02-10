import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import BlogCard from '@/components/BlogCard'
const Blogs = () => {
  const array = [
    {
      date: '1 Dec, 2022',
      title: 'A Beautiful Sunday Morning Renaissance',
      p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,',
      p2: 'alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi.',
    },
    {
      date: '1 Dec, 2022',
      title: 'A Beautiful Sunday Morning Renaissance',
      p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,',
      p2: 'alias impedit error ipsa a vitae pariatur voluptatem temporibus consequatur nisi.',
    },
    // Add content for other blogs
  ];
  return (
    <>
        <Meta title='Blogs'/>
        <BreadCrumb href='blogs' title='blogs'/>
        <main className='bg-gray-200 text-black px-52 py-10'>
        <section className='mb-10 grid grid-cols-[330px,1fr] gap-4'>
          <div className="">
            <div className="bg-gray-100 flex flex-col gap-4 capitalize p-3 cursor-pointer text-gray-500 ">
            <h4 className='font-bold text-black'>find by categories</h4>
            <p className='hover:text-black hover:font-bold hover:underline'>watch</p>
            <p className='hover:text-black hover:font-bold hover:underline'>Tv</p>
            <p className='hover:text-black hover:font-bold hover:underline'>Camera</p>
            <p className='hover:text-black hover:font-bold hover:underline'>laptop</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {
              array.map((content,index)=>(
                <div className="" key={index}>
                {/* change the array by adding new text to button */}
                  <BlogCard id={index+1} content={content}/>
                </div>
              ))
            }
         
          </div>

        </section>
        </main>
    </>
  )
}
export default Blogs