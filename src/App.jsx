import React from 'react'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import Conctacts from './components/Conctacts'

export default function App() {
  return (
 <main>
   <Navbar/>
   <Home/>
   <Services/>
   <Portfolio/>
   <About/>
   <Reviews/>
   <Conctacts/>
 </main>
  )
}
