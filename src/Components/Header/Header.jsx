import "./Header.css";

const Header = () => {
  return (
    <div>
       <div className="header">
        <div className="icons">
            <img src="/assets/Icons/Layer_1.png" alt="DigitMoney"/>
        </div>
            <ul>
                
              <li> 
                <a href="/">Personal Loan</a>
                <b><a href="">Business Loan</a></b>
                <a href=""> PayOff</a>
              </li>
                
            </ul>
        
       </div>
    </div>
  )
}

export default Header
