import React from 'react'
import GreenHeroSection from '../components/GalleryComponents/GreenHeroSection.jsx'
import LocationTracker from '../components/GalleryComponents/LocationTracker.jsx'
import GalleryGardenSection from '../components/GalleryComponents/GalleryGardenSection.jsx'
import GalleryBottomCard from '../components/GalleryComponents/GalleryBottomCard.jsx'

const Gallery = () => {
  return (
    <div>
        <GreenHeroSection/>
        <LocationTracker/>
        <GalleryGardenSection/>
        <GalleryBottomCard/>
    </div>
  )
}

export default Gallery