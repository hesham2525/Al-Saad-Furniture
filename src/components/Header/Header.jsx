import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./Header.css";
import FloatingButtons from "../buttons/floatingButtons";

export default function Header() {
  return (
      <div className="header">
        <div className="transtationAndIcons">
          <div className="translation">
            <div>
              <IoIosArrowDown />
            </div>
            <a className="ar">AR</a>
            <div>
              <TbWorld />
            </div>
          </div>
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
          <Navbar expand="lg" className="mt-4">
            <Container fluid>
                <Offcanvas.Body dir="ltr" className="offcanvas-body">
                  <Nav className="mainHeader">
                    <div className="links-container">
                      <p className="links" href="#action1">
                        مؤسسة نوف  مسعود بن مطلق الدوسري للاثاث المستعمل
                      </p>
                    </div>
                    <div className="logo-section">
                      <img
                        className="logoImage"
                        src="/public/logo2.png"
                        alt="logo"
                        loading="lazy"
                      />
                    </div>
                  </Nav>
                </Offcanvas.Body>
            </Container>
          </Navbar>
        </div>
        <FloatingButtons />  
        
      </div>
      
  );
}
