import React from 'react'

import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';

type BlogCardContent = {
  date: string;
  title: string;
  p1: string;
  p2: string;
  img:string | "";
};

type BlogCardId = {
  id?:number;
  btn?:boolean;
  btnText?:string | boolean;
  content?: BlogCardContent;
}

const BlogCard : React.FC<BlogCardId>= ({id,btn=true,btnText=false,content}) => {
  return (
    <div className='grid grid-rows-[repeat(2,1fr)_20px] rounded-lg text-wrap bg-gray-100 p-0 m-0' >
      <div className="">
        <Image src={content?.img} alt="picture" className='w-full' style={{ height: "300px"}} />
      </div>
      <div className="flex flex-col gap-2 p-3">
      <p>{content?.date}</p>
      <h3 className='font-bold'>{content?.title}</h3>
      <p>{content?.p1}</p>
      <p>{content?.p2}</p>
      </div>
      <div className="flex items-end p-3 ">
      {btn && 
        <Link href={`blogs/${id}`} className='w-full flex justify-center'>
          <Button>Read More</Button>
          </Link> 
      }
      {btnText && 
        <Link href={`/blogs`} className='w-full flex justify-center '>
          <Button>
            <div className="flex justify-center items-center gap-10">
              <HiOutlineArrowLeft/> {btnText}
            </div>
          </Button>
        </Link> }
      </div>
    </div>
  )
}

export default BlogCard