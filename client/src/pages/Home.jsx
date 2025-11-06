import React from 'react'
import Hero from '../context/Hero'
import CategoryCard from '../components/CategoryCard'
import { categories } from '../assets/assets'
import BestSeller from '../components/BestSeller'
import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
        <Hero />
        <CategoryCard />
        <BestSeller />
        <Banner />
        <NewsLetter />
    </div>
  )
}

export default Home