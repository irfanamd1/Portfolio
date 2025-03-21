import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Education from './components/Education'

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className='mt-24 lg:mt-28'>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
