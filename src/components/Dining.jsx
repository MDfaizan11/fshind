import React from "react";
import "../style/dining.css";
import f1 from "../assets/images/f1.jpg";
import f2 from "../assets/images/f2.jpg";
import f3 from "../assets/images/f3.jpg";
import f4 from "../assets/images/f4.jpg";
import f5 from "../assets/images/f5.jpg";
import f6 from "../assets/images/f6.jpg";
import f7 from "../assets/images/f7.jpg";
import f8 from "../assets/images/f8.jpg";
import f9 from "../assets/images/f9.webp";
import f10 from "../assets/images/f10.jpg";
import f11 from "../assets/images/f11.webp";
import f12 from "../assets/images/f12.jpg";
import { useNavigate } from "react-router-dom";
function Dining() {
  const navigate = useNavigate();
  function handledining() {
    navigate("/enquiry");
  }
  return (
    <>
      <p className="dining_heading">
        "Elegant Dining Tables for Every Occasion"
      </p>
      <div className="dining_table_wrapper">
        <img src={f1} alt="" data-aos="fade-up" />
        <img src={f2} alt="" data-aos="fade-down" />
        <img src={f3} alt="" data-aos="fade-up" />
        <img src={f4} alt="" data-aos="fade-down" />
        <img src={f5} alt="" data-aos="fade-up" />
        <img src={f6} alt="" data-aos="fade-down" />
        <img src={f7} alt="" data-aos="fade-up" />
        <img src={f8} alt="" data-aos="fade-down" />
        <img src={f9} alt="" data-aos="fade-up" />
        <img src={f10} alt="" data-aos="fade-down" />
        <img src={f11} alt="" data-aos="fade-up" />
        <img src={f12} alt="" data-aos="fade-down" />
      </div>
      <div className="dining_enquiry">
        <button onClick={handledining}> Enquiry Now</button>
      </div>
    </>
  );
}

export default Dining;
