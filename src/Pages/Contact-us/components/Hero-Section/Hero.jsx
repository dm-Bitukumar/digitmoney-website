import React from 'react'

 import './Hero.css'
import Header from '../../../../Components/Header/Header'

const Hero = () => {
  return (
    <div className="hero">
        {/* <Header /> */}
        <Header />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Let's Talk! We Don't Ghost!</h1>
          <p>Got a question? Or just in the mood for a chat?<br />
             We're all ears and keyboards! Hit us up—we make <br />
             insurance talk less ‘ugh’ and more ‘aha!’
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
