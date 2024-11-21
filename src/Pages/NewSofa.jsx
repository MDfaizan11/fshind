import React from "react";
import hero_img from "../assets/images/Group 1 (2).svg";
import "../style/newsofa.css";

import img12 from "../assets/images/sf1.jpg";
import img13 from "../assets/images/sf2.jpg";
import img14 from "../assets/images/sf3.jpg";
import img15 from "../assets/images/sf4.jpg";
import img16 from "../assets/images/sf5.jpg";
import img17 from "../assets/images/sf6.jpg";
import s1 from "../assets/images/sf7.jpg";
import s2 from "../assets/images/sf8.jpg";
import s3 from "../assets/images/sf9.jpg";
import s4 from "../assets/images/sf10.jpg";
import s5 from "../assets/images/sf11.jpg";
import s6 from "../assets/images/sf12.jpg";

import { useNavigate } from "react-router-dom";
function NewSofa() {
  const navigate = useNavigate();
  function handleEnquiry() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="home_hero_section">
        <div className="hero_section_contain">
          <div className="hero_section_contain_heading">
            <h1>New Sofa SERVICES</h1>
          </div>
          <div className="hero_section_contain_lorem">
            <p>
              Furnish Your Life with Style, Comfort, Elegance & Bringing warmth
              to every living space.
            </p>
          </div>
          <div className="hero_section_contain_buttons">
            <button>Discover Our Furnishings</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="hero_section_img">
          <img src={hero_img} alt="placeholder" />
        </div>
      </div>
      <div className="new_design_images_wrapper">
        <div className="new_design_images">
          <img src={img12} alt="" data-aos="flip-left" />
          <img src={img13} alt="" data-aos="fade-up" />
          <img src={img14} alt="" data-aos="fade-down" />
          <img src={img15} alt="" data-aos="flip-left" />
          <img src={img16} alt="" data-aos="flip-right" />
          <img src={img17} alt="" data-aos="fade-up" />
          <img src={s1} alt="" data-aos="fade-down" />
          <img src={s2} alt="" data-aos="flip-right" />
          <img src={s3} alt="" data-aos="flip-left" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
          <img src={s6} alt="" />
        </div>
      </div>
      <div className="nsofa_enquiry">
        <button onClick={handleEnquiry}>Enquiry Now</button>
      </div>
    </>
  );
}

export default NewSofa;
