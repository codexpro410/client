"use client"
import Categories from '@/components/Categories'
import FeatureCollection from '@/components/FeatureCollection'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Brands from '@/components/Brands'
import React from 'react'
import OurLatestNews from '@/components/OurLatestNews'
import SpecialProducts from '@/components/SpecialProducts'
import OurPopularProducts from '@/components/OurPopularProducts'
import Section4 from '@/components/Section4'


const HomePage = () => {
  return (
      <main className=''>
        <Hero/>
        <Service/>
        <Categories/>
        <FeatureCollection/>
        <Section4/>
        <SpecialProducts/>
        <OurPopularProducts/>
        <Brands/>
        <OurLatestNews/>
      </main>
  )
}
export default HomePage