import React from "react";
import "../style/bed.css";
import b1 from "../assets/images/bd1.jpg";
import b2 from "../assets/images/bd2.jpg";
import b3 from "../assets/images/bd3.jpg";
import b4 from "../assets/images/bd4.jpg";
import b5 from "../assets/images/bd5.jpg";
import b6 from "../assets/images/bd6.jpg";
import b7 from "../assets/images/bd7.jpg";
import b8 from "../assets/images/bd8.jpg";
import b9 from "../assets/images/bd9.jpg";
import b10 from "../assets/images/bd10.jpg";
import b11 from "../assets/images/bd11.jpg";
import b12 from "../assets/images/bd12.jpg";
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
