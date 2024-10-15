import React from "react";
import "../style/Wardrobe.css";
import w2 from "../assets/images/w2.jpg";
import w3 from "../assets/images/w3.jpg";
import w4 from "../assets/images/w4.jpeg";
import w5 from "../assets/images/w5.jpg";
import w6 from "../assets/images/w6.jpg";
import w7 from "../assets/images/w7.webp";
import w8 from "../assets/images/w8.jpg";
import w9 from "../assets/images/w9.jpg";
import w10 from "../assets/images/w10.jpg";
import w11 from "../assets/images/w11.jpg";
import w12 from "../assets/images/w12.webp";
import w13 from "../assets/images/w13.jpg";
import { useNavigate } from "react-router-dom";
function Wardrobe() {
  const navigate = useNavigate();
  function Wardrobeclick() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="wardrobe_heading">
        <p>"Elegant Wardrobe Designs to Maximize Your Space"</p>
      </div>
      <div className="wardrobeimg_wrapper">
        <img src={w13} alt="" data-aos="fade-up" />
        <img src={w2} alt="" data-aos="fade-down" />
        <img src={w3} alt="" data-aos="fade-up" />
        <img src={w4} alt="" data-aos="fade-down" />
        <img src={w5} alt="" data-aos="fade-up" />
        <img src={w6} alt="" data-aos="fade-down" />
        <img src={w7} alt="" data-aos="fade-up" />
        <img src={w8} alt="" data-aos="fade-down" />
        <img src={w9} alt="" data-aos="fade-up" />
        <img src={w10} alt="" data-aos="fade-down" />
        <img src={w11} alt="" data-aos="fade-up" />
        <img src={w12} alt="" data-aos="fade-down" />
      </div>
      <div className="wardrobe_button">
        <button onClick={Wardrobeclick}>Enquiry Now</button>
      </div>
    </>
  );
}

export default Wardrobe;
