import React, { ReactNode } from 'react'

type Btn = {
    children:ReactNode;
    className?:string;
    type?:"submit" | "button"
}
const Button : React.FC<Btn>= ({children,className,type="submit"}) => {
  return (
    <button type={type} className={`uppercase bg-cyan-900 text-white p-3 w-5/6 rounded-full hover:bg-white hover:text-cyan-900 ${className}`}>
        {children}
    </button>
  )
}
export default Button