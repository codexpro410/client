import Link from 'next/link';
import React from 'react'

type BreadCrumbTitle = {
    title:string | undefined;
    href:string;
}
const BreadCrumb :React.FC<BreadCrumbTitle> = ({title,href}) => {
  return (
    <div className='text-2xl font-bold py-10  text-center bg-slate-50 text-black'>
        <a href="/">Home</a>
        <span> / </span>
        <Link href={href} className='capitalize'>{title}</Link>
    </div>
  )
}
export default BreadCrumb