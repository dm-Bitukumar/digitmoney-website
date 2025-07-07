
import React from "react";
import "./Main.css";

const partners = [
  { name: "Canara HSBC", logo: "/assets/Img/image 6.png" },
  { name: "HDFC Life", logo: "/assets/Img/image 8.png" },
  { name: "Fino Payments Bank", logo: "/assets/Img/image 9.png" },
  { name: "Lenskart", logo: "/assets/Img/image 11.png" },
  { name: "Kapiva", logo: "/assets/Img/image 13.png" },
  { name: "Bajaj Allianz", logo: "/assets/Img/image 22.png" },
  { name: "Oliva", logo: "/assets/Img/image 14.png" },
  { name: "HSBC", logo: "/assets/Img/image 19.png" },
  { name: "PaySense", logo: "/assets/Img/image 16.png" },
  { name: "ACKO", logo: "/assets/Img/image 12.png" },
  { name: "DigitCards", logo: "/assets/Img/image 21.png" },
  { name: "FPAY", logo: "/assets/Img/image 23.png" },
  { name: "MAXLIFE", logo: "/assets/Img/image 7.png" },
  { name: "MONEYTAP", logo: "/assets/Img/image 17.png" },
  { name: "citibank", logo: "/assets/Img/image 18.png" },
  { name: "PHOCKET", logo: "/assets/Img/image 10.png" },
];

const LendingPartners = () => {
  return (
    <div className="lending-section">
      <div className="lending-content">
       <h2>Our Digital Lending Partners</h2>
       <p>
          We don’t just generate leads; we help you acquire long-term customers through data-driven <br />
           strategies tailored to your business goals.
       </p>
      </div>
      

      <div className="lending-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            
            <hr className="divider" />
            <p>Grievance Redressal Officer:<br/> Ammy Prietina <br />
            <span> <a href="mailto:grievance@digitmoney.in">grievance@digitmoney.in</a></span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LendingPartners;
