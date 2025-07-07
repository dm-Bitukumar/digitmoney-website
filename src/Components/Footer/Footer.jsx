import React from 'react'
import './Footer.css'
import Icons from '../Social_Icons/Icons'

const Footer = () => {
  return (
    <div className='footer'>
        <footer className="footer-container">
            <div className="footer-head">
                <img src="/assets/Icons/Layer_1 (3).png" alt="" />
            </div>   
            <h1>Personal Loan Simplified.</h1> 
            <div className="footer-content-block">
                 <div className="footer-content">
                   <p> DigitMoney Technologies Pvt Ltd.<br/>
                   1341 Regus Platinum Business Centre Pvt Ltd,<br />
                   Level 13, Platinum Techno Park,<br />
                   Plot no. 17 & 18, Sector 30A, Vashi,<br />
                   Navi Mumbai - 400705 </p>

                   <small>Grievance Redressal Officers <br />
                     Ammy Pinheiro: grievance@digitmoney.in
                   </small>
                 </div>
                 <ul>
                    <li href="">Personal Loan</li>
                    <li href="">Business Loan</li>
                    <li href="">PayOff</li>
                 </ul>
                 <ul>
                    <li href="">FAQs</li>
                    <li href="">Blogs</li>
                    <li href="">Career</li>
                    <li href="">EMI Calculator</li>
                 </ul>
                 <ul>
                    <li href="">Terms of use</li>
                    <li href="">Digital Lending Partners</li>
                    <li href="">Contact us</li>
                    <li href="">Unsubscribe</li>
                 </ul>
            </div> 
            <div className="social-icons">
                <Icons />
            {/* <div className="icon">
                <img src="/assets/Icons/Social Icons.png" alt="Facebook" height={14}/>
            </div>
            <div className="icon">
                <img src="/assets/Icons/Social Icons (1).png" alt="Instagram" height={14} />
            </div>
            <div className="icon">
                <img src="/assets/Icons/Vector (1).png" alt="LinkedIn" height={14} />
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
       <div className="hr">

       </div>
        <div className="copyright-section">
            <ul>
                <li href="">Terms & Conditions</li>
                <li href="">Privacy Policy</li>
                <li href="">RBI Sachet</li>
            </ul>
            <p>A Products of iPerformance © 2024. All Rights Reserved</p>
        </div>
        </footer>   
    </div>
  )
}

export default Footer
