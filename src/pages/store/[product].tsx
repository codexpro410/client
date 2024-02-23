import BreadCrumb from '@/components/BreadCrumb';
import Layout from '@/layouts/Layout';
import Meta from '@/utlis/Meta';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Icons, payment, services } from '@/utlis/Arrays'
import ReactStars from 'react-rating-stars-component'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
// import styles from '../../components/FeatureCollection.module.css';
import Button from '@/components/Button';
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiAttachment } from "react-icons/ti";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiRulerAlt } from "react-icons/tfi";
import { CiBoxes } from "react-icons/ci";
import { twMerge } from 'tailwind-merge';
import StoreProduct from '@/components/StoreProduct';
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import ReactImageZoom from 'react-image-zoom';
import Table from '@/components/Table';

type ProductProps = {
  services: {
    id:number;
    imgs: StaticImageData;
    imgs2: StaticImageData;
    brand?: string;
    desc?: string;
    rating?: number;
    price?: number;
    discount?: number;
    type?:string;
  };
  Icons:{
    id:number;
    icon:string;
    name:string;
    arrow:string;
  }
};

const options = [
  {id:1,arrowLeft:<MdKeyboardArrowLeft size={25}/>,icon:<LiaShippingFastSolid size={25} />,name:"Shipping & Returns",arrow:<IoIosArrowDown />,desc:"Free shipping and returns available on all orders!",desc2:"We ship all US domestic orders within 5~10 business days!"},
  {id:2,arrowLeft:<MdKeyboardArrowLeft size={25}/>,icon:<CiBoxes size={25} />,name:"Materials",arrow:<IoIosArrowDown />,desc:"Running Shoes cushion your strude with soft form to keep you running in comfort, Lightweight knit material",desc2:"wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you."},
  {id:3,arrowLeft:<MdKeyboardArrowLeft size={25}/>,icon:<TfiRulerAlt size={25} />,name:"Dimensions",arrow:<IoIosArrowDown />,desc:<Table/>,desc2:""},
  {id:4,arrowLeft:<MdKeyboardArrowLeft size={25}/>,icon:<CiHeart size={25}/>,name:"Care instructions",arrow:<IoIosArrowDown />,desc:"use a soft damp cloth and a drop of mild soap to remove any haze, Air dry",desc2:""},
  {id:5,arrowLeft:"",icon:<TiAttachment size={25}/>,name:"Share",arrow:"",desc:"",desc2:""},
]

const Product: React.FC<ProductProps> = ({ services }) => {
  const [clicked, setClicked] = useState("")
  const [writeReview, setWriteReview] = useState(false)

  const handleClick = (size:string) => { 
    setClicked(size)
   }
   
  const [show, setShow] = useState<number | null>(null)
  const handelShow = (optionId: number) => {
    setShow(show === optionId ? null : optionId);
  }
  //  TODO: transition
  // TODO: Link
  const props = {width: 400, height: 250, zoomWidth: 500, img: "https://i.ebayimg.com/images/g/fzEAAOSw3aBjKtcR/s-l1200.jpg"};
  return (
    <Layout>
      <Meta title='Store'/>
      <BreadCrumb href={`/store/${services.id}`} title={`${services.desc}`}/>
      <section className='  container mx-auto py-10 bg-gray-300'>
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-100 p-10">
          <div className='hover1 flex justify-center items-center pr-4 min-h-screen bg-gray-200 border border-gray-500'>
            {/* TODO: cannot hover */}
            {/* <Image src={services.imgs} alt="Service Image"className={`${styles.imgPerPage}`} width={300}  height={200}/> */}
            {/* <Image src={services.imgs} alt='serivce' className="img1" width={300}  height={200}/> */}
            {/* <Image src={services.imgs2} alt="Service Hover" className={`${styles.img2}`}  width={300}  height={200}/> */}
            {/* <InnerImageZoom src="../../../public/images/blog-2.jpg" /> */}
            {/* TODO: image zoom library 
            https://www.npmjs.com/package/react-image-zoom
            */}
            <ReactImageZoom {...props} />
          </div>
          <div className="bg-gray-100 flex flex-col gap-4 capitalize">
            <p className='text-3xl font-bold'>{services.desc}</p>
            <p className='text-3xl font-bold'>${services.price}.00</p>
            <div className="flex items-center">
            <ReactStars count={5} size={24} value={services.rating} edit={false} activeColor="#ffd700"/>
            <p className='text-1xl font-bold pl-3'>(2 reviews)</p>
            </div>
            <p>Write a review</p>
            <input type="text" className='bg-gray-100 border-b-2 border-gray-400 w-full h-7 outline-none'/>
            <h2 className='text-2xl text-black'> <span className=' font-bold'>Type: </span>{services.type}</h2>
            <h2 className='text-2xl '> <span className=' font-bold'>Brand: </span>{services.brand}</h2>
            <p className=' font-bold'>Categories:</p>
            <p className='capitalize'>
              Airpods camera Computers & Laptop headphones mini speaker our store Portable Speakers smart phones
               Smart Teleivsion Smartwatches
            </p>
            <p><span className='font-bold'>Tags: </span>headphones Laptops mobile oppo speaker</p>
            <p><span className='font-bold'>SKU: </span>SKUO27</p>
            <p><span className='font-bold'>Availability: </span>641 in Stock</p>
            <p className='font-bold'>Size</p>
            <div className="switchSize flex gap-5">
              <p className={`border border-gray-300 hover:border-black cursor-pointer py-2 px-4 ${clicked === "S" ? "border-black" :""}`} onClick={()=>handleClick("S")}>S</p>
              <p className={`border border-gray-300 hover:border-black cursor-pointer py-2 px-4 ${clicked === "L" ? "border-black":""}`} onClick={()=>handleClick("L")}>L</p>
            </div>
            <p className='font-bold'>Color</p>
            <div className="switchColor flex">
              <p className='p-3 w-8 bg-orange-800 rounded-full m-1 border outline-orange-800 outline-4 outline-double'></p>
              <p className='p-4 bg-orange-950 rounded-full m-1 border'></p>
            </div>
            <div className="switchQuantity flex items-center justify-between gap-5">
              <p className="font-bold">Quantity</p>
              <input type="number" name="" id="" min={0} max={10} className=' h-10 w-1/6'/>
              <Button>ADD To CART</Button>
              <Button className={twMerge("bg-orange-400 text-black")}>Buy it Now</Button>
            </div>
            {/*  function to copy but i think it's useless */}
            <a className="font-bold">Copy Product Link:</a>
            <div className="switchIcons flex items-center gap-10 ">
              <div className="flex items-center gap-2">
              {/* <Image src={Icons.wishlistBlack} alt='wishlist' style={{ fill: 'black' }} /> */}
              {/* <CiHeart size={28} color="white"/> */}
              <CiHeart size={28}/>
                <p className="hover:font-bold cursor-pointer">Add to wishlist</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Icons.compare} alt='wishlist'/>
                <p className="hover:font-bold cursor-pointer">Add to compare</p>
              </div>
            </div>
            {
              options.map((option,index) =>(
              <div className="flex flex-col " key={option.id}>
                <div className="flex justify-between items-center pl-3 w-full"  onClick={() => handelShow(option.id)}>
                  <div className="flex ">
                  <div className="pr-3">
                    {/* TODO: toglle to another icon left arrow */}
                    {/* solution can be by create stand alone component and array will be outside it */}
                  {option.icon }
                  </div>
                  <p>{option.name}</p>
                  </div>
                  <p className='cursor-pointer' > { show === option.id ? option.arrowLeft :option.arrow}</p>
                </div>
                {
                  show === option.id && <>
                <div className="pl-12">{option.desc}</div>
                <div className="pl-12">{option.desc2}</div>
                  </>
                }
                <hr className='border border-gray-300 mt-2'/>
              </div>
              ))
            }
            <div className="flex flex-col bg-gray-200">
              <h3 className='font-bold text-center'>Payment methods</h3>
              <div className="flex justify-center gap-5 p-4">
                  {
                    payment.map((icon:StaticImageData,index:any) =>(
                      <div className="" key={index}>
                        <Image src={icon} alt='icon'/>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-3xl font-bold py-4'>Description</h2>
        <p className='bg-gray-100 p-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae fugit itaque magni eum consequatur, odit labore, molestiae, laudantium eius ex quo temporibus quos. A nam praesentium harum quisquam quas?
        </p>
        <h2 className='text-3xl font-bold py-4'>Reviews</h2>
        <div className='bg-gray-100 p-4 '>
            <h4 className='text-2xl font-semibold pb-3'>Customer Reviews</h4>
            <div className="flex  justify-between">
              <div className="flex items-center">
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                <p>Based on 2 reviews</p>
              </div>
            <p className='underline cursor-pointer hover:font-bold hover:no-underline'
            onClick={()=>setWriteReview(!writeReview)}
            >write a review</p>
            </div>
            { writeReview &&
              <form className="w-full flex flex-col gap-5 pt-10">
              <h4 className='text-2xl font-semibold pb-3'>Write A Review</h4>
              <p>Name:</p>
              <input className='w-full h-9 p-2' type="text" placeholder='Enter your name' />
              <p>Email:</p>
              <input className='w-full h-9 p-2' type="email" placeholder='your@email.com' />
              <p>Rating:</p>
              <ReactStars count={5} size={24} value={0} edit={true} activeColor="#ffd700"/>
              <p>Review Title</p>
              <input className='w-full h-9 p-2' type="text" placeholder='Give your review a title' />
              <p>Body of Review [1500]</p>
              <textarea className='h-20 p-3' name="comment" id="comment" placeholder='Write your comments here'></textarea>
              <div className="flex justify-end w-2/6 ml-auto">
              <Button type='submit'>Submit Review</Button>
              </div>
              </form>
            }
            <div className="pt-10">
              <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
               <p className='font-semibold'>Good</p>   
               <p>Lorem ipsum dolor sit amet. <span className='font-bold'>,on Aug 29,2022</span></p>   
               <p>consectetur adipisicing elit. Dolore, porro.</p>
               <p className='underline text-right'>Report as client</p>
            </div>
            <div className="pt-10 flex flex-col gap-4">
              <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700"/>
               <p>Nice Quality, I&#39;ll Buy it Again</p>   
               <p>admin <span className='font-bold'>,on Aug 20,2022</span></p>   
               <p>Great stuff, I think i will get more orders from you guys</p>
            </div>
            <div className="bg-gray-200 m-7 p-4">
              <h3>- Digitic</h3>
              <p>Thank you for your purchase from, Please let us know if we can do anything else for you</p>
            </div>
            <p className='underline text-right'>Report as client</p>
        </div>
        <h2 className='text-3xl font-bold py-4'>You May Also Like</h2>
        <div className="grid grid-cols-6 gap-5">
          <StoreProduct grid={4}/>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = services.map((service, index) => ({ params: { product: `${index + 1}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }:Params) {
  const productIndex = Number(params.product) - 1;
  const servicesData = services[productIndex];
  return {
    props: {
      services: servicesData,
    },
  };
}
 
export default Product;
