import React from 'react'
import './Contact_us.css'
import Header from '../../Components/Header/Header'
import Hero from './components/Hero-Section/Hero'
import Main from './components/Main/Main'
import Footer from '../../Components/Footer/Footer'

const Contact_us = () => {
  return (
    <div className="contact-us">
      <div className="pages">
        <Hero />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Contact_us
