import Image from 'next/image'
import React, { useState } from 'react'
import Meta from '@/utlis/Meta';

import gr from '../../public/images/gr.svg';
import gr2 from '../../public/images/gr2.svg';
import gr3 from '../../public/images/gr3.svg';
import gr4 from '../../public/images/gr4.svg';

import BreadCrumb from '@/components/BreadCrumb';
import StoreFilter from '@/layouts/StoreFilter';
import StoreProduct from '../components/StoreProduct';

const OurStore = () => {
        const [grid, setgrid] = useState<number>(4)
  return (
    <>
    <Meta title='Our Store'/>
        <BreadCrumb href='store' title='our store'/>
        <div className="bg-gray-200">
    <div className=' text-black container mx-auto py-10'>
        <div className='grid grid-cols-[330px_repeat(5,1fr)] grid-rows-subgrid gap-3'>
            <StoreFilter/>
            <div className="flex flex-col justify-between gap-3 col-span-5">
                <div className="flex flex-col gap-3">
                    <section className='flex items-center px-3 rounded-lg justify-between h-14 bg-gray-100'>
                        <div className="flex items-center gap-3">
                        <p className='font-bold'>sort by:</p>
                        <select name="" id="" className='bg-gray-200 rounded-lg h-10'>
                            <option value="">Best selling</option>
                            <option value="">Featured</option>
                            <option value="">Aphabetically, A-Z</option>
                            <option value="">Aphabetically, Z-A</option>
                            <option value="">Price, high to low</option>
                            <option value="">Price, low to high</option>
                            <option value="">Date, old to new</option>
                            <option value="">Date, new to old</option>
                        </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <p>21 products</p>     
                            <Image onClick={()=>{setgrid(1)}} className='p-3 bg-gray-200 hover:bg-gray-700 rounded-lg cursor-pointer' src={gr} alt="something" width={40}/>
                            <Image onClick={()=>{setgrid(2)}} className='p-3 bg-gray-200 hover:bg-gray-700 rounded-lg cursor-pointer' src={gr2} alt="something" width={30}/>
                            <Image onClick={()=>{setgrid(3)}} className='p-3 bg-gray-200 hover:bg-gray-700 rounded-lg cursor-pointer' src={gr3} alt="something" width={35}/>
                            <Image onClick={()=>{setgrid(4)}} className='p-3 bg-gray-200 hover:bg-gray-700 rounded-lg cursor-pointer' src={gr4} alt="something" width={40}/>
                        </div>
                    </section>
                    {/* products */}
                    <section className={`row-span-2 grid grid-cols-${grid} gap-3`}>
                    <StoreProduct grid={grid}/>
                    </section>
                </div>
                <div className="">
                    <section className='flex p-3 h-14 justify-between items-center rounded-lg bg-gray-100'>
                        <p>Showing 15 of 21</p>            
                        <div className="flex items-center justify-center gap-3 ">
                            <p className='p-2 w-10 bg-gray-700 rounded-full text-white flex items-center justify-center cursor-pointer'>1</p>
                            <p className='p-2 w-10 bg-gray-700 rounded-full text-white flex items-center justify-center cursor-pointer'>2</p>
                            <p className='cursor-pointer'>&gt;</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default OurStore;