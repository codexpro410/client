import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps ={
  children?:React.ReactNode;
}
const Layout :React.FC<LayoutProps> = ({children}) => {
  return (
    <div className=''>
      <Header/>
        <main>{children}</main>
        {/* <style jsx global>
          {`
            html, body{
              background:gray;
              display:flex;
              justify-content:center;
              align-items:center;
            }
          `}
        </style> */}
      <Footer/>
    </div>
  )
}

export default Layout