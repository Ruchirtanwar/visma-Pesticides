import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomeComponent/Hero'
import FeaturesCard from '../components/HomeComponent/FeaturedCard'
import TwoImageCards from '../components/HomeComponent/TwoImageCards'
import BottomCard from '../components/HomeComponent/BottomCard'
import CountUpCard from '../components/HomeComponent/CountUpCard'
import ProductCarousel from '../components/HomeComponent/ProductCarousel'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductCarousel/>
      <FeaturesCard/>
      <TwoImageCards/>
      <CountUpCard/>
      <BottomCard/>

    </div>
   
  )
}

export default Home

//agro star website se our solution k pages utha skhte hai///////
//modesto se our products vala section ////
//our services 
//contact page from dehaat se 
