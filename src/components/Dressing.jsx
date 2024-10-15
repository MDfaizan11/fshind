import React from "react";
import "../style/dressing.css";
import d1 from "../assets/images/dr1.webp";
import d2 from "../assets/images/dr2.jpg";
import d3 from "../assets/images/dr3.webp";
import d4 from "../assets/images/dr4.jpg";
import d5 from "../assets/images/dr5.webp";
import d6 from "../assets/images/dr6.webp";
import d7 from "../assets/images/dr7.webp";
import d8 from "../assets/images/dr8.jpg";
import d9 from "../assets/images/dr9.jpeg";
import d10 from "../assets/images/dr10.webp";
import d11 from "../assets/images/dr11.webp";
import d12 from "../assets/images/dr12.webp";
import { useNavigate } from "react-router-dom";
function Dressing() {
  const navigate = useNavigate();
  const handledressing = () => {
    navigate("/enquiry");
  };

  return (
    <>
      <div className="dressing_heading">
        <p>"Discover Stylish Dressing Tables for Every Space"</p>
      </div>
      <div className="dressing_img">
        <img src={d1} alt="placeholder" data-aos="fade-up" />
        <img src={d2} alt="placeholder" data-aos="fade-down" />
        <img src={d3} alt="placeholder" data-aos="fade-up" />
        <img src={d4} alt="placeholder" data-aos="fade-down" />
        <img src={d5} alt="placeholder" data-aos="fade-up" />
        <img src={d6} alt="placeholder" data-aos="fade-down" />
        <img src={d7} alt="placeholder" data-aos="fade-up" />
        <img src={d8} alt="placeholder" data-aos="fade-down" />
        <img src={d9} alt="placeholder" data-aos="fade-up" />
        <img src={d10} alt="placeholder" data-aos="fade-down" />
        <img src={d11} alt="placeholder" data-aos="fade-up" />
        <img src={d12} alt="placeholder" data-aos="fade-down" />
      </div>
      <div className="dressing_enquiry">
        <button onClick={handledressing}>Enquiry Now</button>
      </div>
    </>
  );
}

export default Dressing;
