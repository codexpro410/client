import React from 'react'
import { Helmet } from 'react-helmet'

type MetaTitle ={
    title:string;
}
const Meta : React.FC<MetaTitle> = ({title}) => {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
    </Helmet>
  )
}

export default Meta