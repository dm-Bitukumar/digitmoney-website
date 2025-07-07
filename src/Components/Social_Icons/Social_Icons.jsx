import React from 'react'
import "./Social_Icons.css"

const Social_Icons = ({logo, name}) => {

   
  return (
    <div>
       <div className="logo-container">
           <img src={logo} alt={`${name} Logo`} className="Sociaal-icons" />
        </div>  
    </div>
  )
}

export default Social_Icons
