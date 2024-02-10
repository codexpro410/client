import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Meta from '@/utlis/Meta'
import Layout from '@/layouts/Layout'
import {useRouter} from 'next/router'

// const SingleBlog = () => {
//   const router = useRouter();
//   const {id} = router.query
//   return (
//     <Layout>
//         <Meta title='Single Blog'/>
//         <BreadCrumb href='' title='Single Blog'/>
//         <main className='bg-gray-200 text-black px-52 pyb-10'>
//         <section className='mb-10'>
//           Single Blog : {id}
//         </section>
//         </main>
//     </Layout>

//   )
// }
// export default SingleBlog