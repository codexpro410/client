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
import Ads from '@/components/Ads'


const HomePage = () => {
  return (
      <main className=' bg-gray-200'>
        <div className="max-w-6xl mx-auto">
        <Hero/>
        <Service/>
        <Categories/>
        <FeatureCollection/>
        <Ads/>
        <SpecialProducts/>
        <OurPopularProducts/>
        <Brands/>
        <OurLatestNews/>
        </div>
      </main>
  )
}
export default HomePage