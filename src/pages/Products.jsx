import React from 'react'
import NatureHeroShowcase from '../components/ProductsComponent/NatureHeroShowcase'
import CardsCarousel from '../components/ProductsComponent/CardsCarousel'
import BannerSection from '../components/ProductsComponent/BannrSection'
import InfoSection from '../components/ProductsComponent/InfoSection'
import CardSection from '../components/ProductsComponent/CardSection'
import ProductsGrid from '../components/ProductsComponent/ProductsGrid'

const Products = () => {
  return (
    <div>
        <NatureHeroShowcase/>

<CardsCarousel/>
<ProductsGrid/>
<BannerSection/>
<InfoSection/>
<CardSection/>


    </div>
  )
}

export default Products