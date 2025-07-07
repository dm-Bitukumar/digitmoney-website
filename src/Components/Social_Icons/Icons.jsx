import React from 'react'
import "./Social_Icons";
import Social_Icons from './Social_Icons'

const Icons = () => {

     const icons = [
        {nam:"Facebook", logo: "/assets/Icons/Social Icons.png"},
        {name: "Instagram", logo: "/assets/Icons/Social Icons (1).png"},
        {name: "Linked-in", logo: "/assets/Icons/Social Icons (2).png"},
        {name: "Youtube", logo: "/assets/Icons/Social Icons (3).png"},
        {name: "X", logo: "/assets/Icons/Social Icons (4).png"}, 
        {name: "WhatsApp", logo: "/assets/Icons/Social Icons (5).png"},  
    ]
  return (
    <div>
       <div className="icons">
         {icons.map((social_media, index) => (
        <Social_Icons key={index} logo={social_media.logo} name={social_media.name} />
      ))}
       </div>
    </div>
  )
}

export default Icons
