import React from 'react'
import Image, { StaticImageData } from 'next/image'
import mainb from '../../public/images/main-banner.jpg';
import Button from './Button';

type heroProps ={
  imgs?:StaticImageData;
  divStyle?:string;
  pStyle?:string;
  p1text?:string;
  h1Style?:string;
  h1Text?:string;
  desc1?:string;
  desc2?:string;
  showBtn?:boolean;
}


const heroImages :React.FC<heroProps> = ({imgs,divStyle,pStyle,p1text,h1Style,h1Text,desc1,desc2,showBtn}) => {
  return (
    <>
    <Image src={imgs ?? mainb} alt='banner' className='rounded-lg '/>
            <div className={`absolute flex flex-col items-start  ${divStyle}`}>
            <p className={`uppercase text-red-500 font-bold ${pStyle}`}>{p1text}</p>
            <h1 className={` ${h1Style}`}>{h1Text}</h1>
            <p>
                {desc1}
                <br />
                {desc2}
            </p>
            {showBtn &&
            <Button>buy now</Button>
            }
            </div>

    </>
  )
}

export default heroImages 