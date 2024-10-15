import React from "react";
import "../style/kitchen.css";
import k1 from "../assets/images/k1.jpg";
import k2 from "../assets/images/k2.jpg";
import k3 from "../assets/images/k3.jpg";
import k4 from "../assets/images/k4.jpg";
import k5 from "../assets/images/k5.jpg";
import k6 from "../assets/images/k6.jpg";
import k7 from "../assets/images/k7.jpg";
import k8 from "../assets/images/k8.webp";
import k9 from "../assets/images/k9.jpg";
import k10 from "../assets/images/k10.png";
import k11 from "../assets/images/k11.webp";
import k12 from "../assets/images/k12.jpg";
import { useNavigate } from "react-router-dom";
function Kitchen() {
  const navigate = useNavigate();
  function handleEnquiry() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="kitechen_heading">
        <p>"Crafted Modular Kitchens for Seamless Functionality"</p>
      </div>
      <div className="kitchen_img">
        <img src={k1} alt="placeholder" data-aos="fade-up" />
        <img src={k2} alt="placeholder" data-aos="fade-down" />
        <img src={k3} alt="placeholder" data-aos="fade-up" />
        <img src={k4} alt="placeholder" data-aos="fade-down" />
        <img src={k5} alt="placeholder" data-aos="fade-up" />
        <img src={k6} alt="placeholder" data-aos="fade-down" />
        <img src={k7} alt="placeholder" data-aos="fade-up" />
        <img src={k8} alt="placeholder" data-aos="fade-down" />
        <img src={k9} alt="placeholder" data-aos="fade-up" />
        <img src={k10} alt="placeholder" data-aos="fade-down" />
        <img src={k11} alt="placeholder" data-aos="fade-up" />
        <img src={k12} alt="placeholder" data-aos="fade-down" />
      </div>
      <div className="kitchen_enquiry">
        <button onClick={handleEnquiry}>Enquiry Now</button>
      </div>
    </>
  );
}

export default Kitchen;
