import React from 'react'
import GreenHeroSection from '../components/SolutionComponent/GreenHeroSection'
import LocationTracker from '../components/SolutionComponent/LocationTracker'
import SolutionGardenSection from '../components/SolutionComponent/SolutionGardenSection'
import SolutionBottomCard from '../components/SolutionComponent/SolutionBottomCard'

const Solution = () => {
  return (
    <div>
        <GreenHeroSection/>
        <LocationTracker/>
        <SolutionGardenSection/>
        <SolutionBottomCard/>
    </div>
  )
}

export default Solution