import { Inter } from 'next/font/google'
import Layout from '@/layouts/Layout';
import HomePage from '@/layouts/HomePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* TODO:Loading for each page */}
        <Layout>
          <HomePage/>
        </Layout>
    </main>
  )
}
