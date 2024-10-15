import React from "react";
import "../style/bed.css";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import b5 from "../assets/images/b5.webp";
import b6 from "../assets/images/b6.webp";
import b7 from "../assets/images/b7.jpg";
import b8 from "../assets/images/b8.jpg";
import b9 from "../assets/images/b9.jpg";
import b10 from "../assets/images/b10.jpg";
import b11 from "../assets/images/b11.jpg";
import b12 from "../assets/images/b12.webp";
import { useNavigate } from "react-router-dom";
function Bed() {
  const navigate = useNavigate();
  function handlebed() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="bed_heading">
        <p>"The Perfect Bed to Complete Your Bedroom"</p>
      </div>
      <div className="bedimg_wrapper">
        <img src={b1} alt="" data-aos="fade-up" />
        <img src={b2} alt="" data-aos="fade-down" />
        <img src={b3} alt="" data-aos="fade-up" />
        <img src={b4} alt="" data-aos="fade-down" />
        <img src={b5} alt="" data-aos="fade-up" />
        <img src={b6} alt="" data-aos="fade-down" />
        <img src={b7} alt="" data-aos="fade-up" />
        <img src={b8} alt="" data-aos="fade-down" />
        <img src={b9} alt="" data-aos="fade-up" />
        <img src={b10} alt="" data-aos="fade-down" />
        <img src={b11} alt="" data-aos="fade-up" />
        <img src={b12} alt="" data-aos="fade-down" />
      </div>
      <div className="bed_button" onClick={handlebed}>
        <button>Enquiry Now</button>
      </div>
    </>
  );
}

export default Bed;
