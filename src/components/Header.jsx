// import React, { useState } from "react";
// import header_logo from "../assets/images/fS hIND lOGO-04 1.svg";
// import { NavLink } from "react-router-dom";
// import "../style/header.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <>
//       <div className="header">
//         <div className="header_logo">
//           <img src={header_logo} alt="fS hIND logo" />
//         </div>
//         <div className={menuOpen ? "header_menuu" : "header_menu"}>
//           <NavLink
//             to={"/"}
//             className={"Navlink"}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to={"/about"}
//             className={"Navlink"}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             About
//           </NavLink>
//           <NavLink
//             // to={"/services"}
//             className={"Navlink"}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             Services
//           </NavLink>

//           <NavLink
//             to={"/contact"}
//             className={"Navlink"}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             Contact Us
//           </NavLink>
//         </div>
//         <div className="menu_icons" onClick={toggleMenu}>
//           {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
import React, { useState } from "react";
import header_logo from "../assets/images/fS hIND lOGO-04 1.svg";
import { NavLink } from "react-router-dom";
import "../style/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // State for services dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={header_logo} alt="fS hIND logo" />
        </div>
        <div className={menuOpen ? "header_menuu" : "header_menu"}>
          <NavLink
            to={"/"}
            className={"Navlink"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={"Navlink"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div className="Navlink dropdown" onClick={toggleServicesDropdown}>
            Services
            {servicesOpen && (
              <div className="dropdown_content">
                <NavLink
                  to={"/repair"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Repair
                </NavLink>
                <NavLink
                  to={"/newsofa"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  New Sofa
                </NavLink>
                <NavLink
                  to={"/dining"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  New Dining
                </NavLink>
                <NavLink
                  to={"/bed"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  New Bed
                </NavLink>
                <NavLink
                  to={"/wardrobe"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  New Wardrobe
                </NavLink>
                <NavLink
                  to={"/dressing"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  New Dressing
                </NavLink>
                <NavLink
                  to={"/kitchen"}
                  className={"dropdown_item"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Modular Kitchen
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to={"/feedback"}
            className={"Navlink"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Feedback
          </NavLink>
          <NavLink
            to={"/contact"}
            className={"Navlink"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="menu_icons" onClick={toggleMenu}>
          {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>
    </>
  );
}

export default Header;
