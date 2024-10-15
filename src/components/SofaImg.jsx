import React from "react";
import "../style/sofaimg.css";
import s1 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.10_ed703781.jpg";
import s2 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_2f888328.jpg";
import s3 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_70835bca.jpg";
import s4 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_0fe9f2d9.jpg";
import s5 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_5e7c263f.jpg";
import s6 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_7cbbd10f.jpg";
import s7 from "../assets/images/s1.jpg";
import s8 from "../assets/images/s2.jpg";
import s9 from "../assets/images/s3.jpg";
import s10 from "../assets/images/s4.jpg";
import s11 from "../assets/images/s5.jpg";
import s12 from "../assets/images/s6.jpg";
import { useNavigate } from "react-router-dom";

function SofaImg() {
  const navigate = useNavigate();
  function hanldeclick() {
    navigate("/enquiry");
  }
  return (
    <>
      <p className="sofaimg_heading">
        Stylish Sofa Designs Crafted for Comfort
      </p>
      <div className="sofa_design_wrapper">
        <img src={s1} alt="placeholder" data-aos="fade-up" />
        <img src={s2} alt="placeholder" data-aos="fade-down" />
        <img src={s3} alt="placeholder" data-aos="fade-up" />
        <img src={s4} alt="placeholder" data-aos="fade-down" />
        <img src={s5} alt="placeholder" data-aos="fade-up" />
        <img src={s6} alt="placeholder" data-aos="fade-down" />
        <img src={s7} alt="placeholder" data-aos="fade-up" />
        <img src={s8} alt="placeholder" data-aos="fade-down" />
        <img src={s9} alt="placeholder" data-aos="fade-up" />
        <img src={s10} alt="placeholder" data-aos="fade-down" />
        <img src={s11} alt="placeholder" data-aos="fade-up" />
        <img src={s12} alt="placeholder" data-aos="fade-down" />
      </div>
      <div className="sofaimg_enquiry">
        <button onClick={hanldeclick}> Enquiry Now</button>
      </div>
    </>
  );
}

export default SofaImg;
