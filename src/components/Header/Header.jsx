// import { IoIosArrowDown } from "react-icons/io";
// import { TbWorld } from "react-icons/tb";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import "./Header.css";
import FloatingButtons from "../buttons/floatingButtons";

export default function Header() {
  return (
      <div className="header">
        <div className="transtationAndIcons">
          {/* <div className="translation">
            <div>
              <IoIosArrowDown />
            </div>
            <a className="ar">AR</a>
            <div>
              <TbWorld />
            </div>
          </div> */}
          <div>
          </div>
          <div className="icons">
            <div className="iconStyle">
              <BsSnapchat />
            </div>
            <div className="iconStyle">
              <FaTiktok />
            </div>
            <div className="iconStyle">
              <FaInstagram />
            </div>
            <div className="iconStyle">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div>
          <hr className="hr" />
        </div>
        <div>
            <nav className="navbar mt-4">
              <div className="container-fluid">
                <div className="mainHeader">
                  <div className="links-container">
                    <p className="links">
                       مؤسسة سعد للاثاث الجديد
                    </p>
                  </div>
                  <div className="logo-section">
                    <img className="logoImage" src="/logo2.png" alt="logo" loading="lazy" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        <FloatingButtons />  
        
      </div>
      
  );
}
