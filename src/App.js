import React from 'react'
import "./App.css"


import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Services/>
        <Experience/>
        <Portfolio/>
        {/* <Testimonial/> */}
        <ContactMe/>
    </>
  )
}


export default App;
