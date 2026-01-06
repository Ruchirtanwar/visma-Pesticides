import { useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Solution from './pages/Gallery.jsx'
import Products from './pages/Products.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contactus from './pages/Contactus.jsx'
import Navbar from './components/Navbar.jsx'
import Gallery from './pages/Gallery.jsx'
import ProductCinematicCarousel from './components/HomeComponent/ProductCarousel.jsx'
import Solutions from './pages/Solutions.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
 <Route path='/Gallery' element={<Gallery/>} />
<Route path='/products' element={<Products/>}/>
<Route path='/about' element={<AboutUs/>}/>
{/* <Route path='/Solutions' element={<Solutions/>}/> */}
 <Route path="/Solutions/:id" element={<Solutions />} /> 

<Route path='/contact' element={<Contactus/>}/>
 </Routes>
      {/* Mobile Contact Us Button */}
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:hidden">
  <a
    href="/contact"
    className="flex items-center justify-center gap-3 bg-[#e4a648] text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
  >
    Contact Us
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M12 5l7 7-7 7"
      />
    </svg>
  </a>
</div>
<Footer/>

    </div>
  )
}

export default App
