import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../scss/include/navbar.scss";
import { GiClover } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdOutlineAutoStories } from "react-icons/md";
import { FaHandHoldingMedical, FaHandsHelping, FaUserCircle } from "react-icons/fa";
import UseToken from "../../helper/useToken";

const CustomNav = () => {
   const { User, clearToken } = UseToken();
   return (
      <Navbar expand="lg">
         <Container className="navBar__container ">
            <Navbar.Brand href="/" className="navBar__brand">
               Serenity
               <GiClover size={20} style={{ marginLeft: "2px" }} />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="nav__links">
                  <Nav.Link href="/" className="navBar_singleLink">
                     <div className="iconLink">
                        <RiMentalHealthFill size={18} />
                        <p className="text">Mental Health</p>
                     </div>
                  </Nav.Link>
                  <Nav.Link href="/stories" className="navBar_singleLink">
                     <div className="iconLink">
                        <MdOutlineAutoStories size={18} />
                        <p className="text">Stories</p>
                     </div>
                  </Nav.Link>
                  <Nav.Link href="/doctors" className="navBar_singleLink">
                     <div className="iconLink">
                        <FaHandHoldingMedical size={18} />
                        <p className="text">Find Doctors</p>
                     </div>
                  </Nav.Link>
                  <Nav.Link
                     href="tel:16600185080"
                     className="navBar_singleLink"
                     style={{ width: "fit-content", marginLeft: "8px" }}
                  >
                     <div className="iconLink" style={{ flexDirection: "row", gap: "3px" }}>
                        <FaHandsHelping size={18} />
                        <p className="text-display">Helpline:16600185080</p>
                     </div>
                  </Nav.Link>
               </Nav>
               <Nav className="nav__icons ms-auto">
                  <Nav.Link
                     href={User ? "" : "/login"}
                     onClick={() => {
                        if (User) {
                           let confirm = window.confirm("Do you want to logouy ?");
                           confirm ? clearToken() : console.log("");
                        }
                     }}
                     className="navBar_iconLink"
                  >
                     {!User && <FaUserCircle size={24} />}
                     {User && (
                        <div
                           class="rounded-circle border d-flex justify-content-center align-items-center"
                           style={{ width: "32px", height: "32px" }}
                           alt="Avatar"
                        >
                           <span style={{ fontSize: "16px", fontWeight: "600" }}>
                              {User?.name?.charAt(0)?.toUpperCase()}
                           </span>
                        </div>
                     )}
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default CustomNav;
