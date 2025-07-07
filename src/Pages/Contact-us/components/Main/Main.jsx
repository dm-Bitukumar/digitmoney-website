import React from 'react'
import './Main.css'
import Icons from '../../../../Components/Social_Icons/Icons'
const Main = () => {
  return (
   <div className="main">
     <div className='main-block'>
       <div className="contact-info">
         <div className="contact-block">
              <div className="icon-label">
                 <img src="/assets/Icons/Layer_1 (1).png" alt="Email" />
                 <h3>Email us</h3>
             </div>
         
             <p>Our friendly team is here to help.</p> 
             <a href="mailto:hello@digitmoney.in">hello@digitmoney.in</a>
         </div>

         <div className="contact-block">
             <div className="icon-label">
                 <img src="/assets/Icons/Social Icons (5).png" alt="Email" />
                 <h3>WhatsApp</h3>
             </div>    
             <p><strong>+91 9833377977</strong></p>
         </div>

         <div className="contact-block">
              <div className="icon-label">
                 <img src="/assets/Icons/Layer_1 (2).png" alt="Email" />
                 <h3>Address</h3>
              </div>
         
             <p>Plot No. 17/18. Level 13, Regus Platinum Business Centre Pvt  <br />
             Ltd, Platinum Techno Park, Sector 30A, Vashi, Navi Mumbai, <br />
             Thane, Maharashtra - 400705</p>
         </div>

         <div className="main-social-icons">
            <Icons />
            {/* <div className="icon">
                <img src="/assets/Icons/Social Icons.png" alt="Facebook" height={14}/>
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (1).png" alt="Instagram" height={14} />
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (2).png" alt="LinkedIn" height={14} />
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (3).png" alt="Yotube" height={14} />
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (4).png" alt="X" height={14} />
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (5).png" alt="WhatsApp" height={14} />
            </div> */}
       </div>
       </div>
       <div className="callback-form">
         <h2>Request a Call Back</h2>

         <label>Full Name</label>
         <input type="text" placeholder='Prakash Sharma' />

         <label >Mobile Number</label>
         <input type="number" placeholder='9890246745'/>

         <label >Email ID</label>
          <input type="text" placeholder='Example@gmail,com'/>

          <label>Type your message</label>
          <textarea name="" id="" placeholder='How can we help you?'></textarea>

          <button type="submit">
              Submit your Query! <span className="arrow">
                <img src="/assets/Icons/Layer_1 (4).png" alt="Arrow" />
              </span>
          </button>
       </div>
    </div>
       <div className="map-section">
          {/* <img src="/assets/Img/image (3).png" alt="Map Location" className='map-image' /> */}
          <iframe src="https://www.google.com/maps/embed?pb=..."
          width="100%" height="332" 
          style={{border:0, borderRadius: '10px'}}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='Map'></iframe>
       </div>
   </div>
  )
}

export default Main
