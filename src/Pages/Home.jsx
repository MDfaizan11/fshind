import React from "react";
import "../style/home.css";
import hero_img from "../assets/images/Group 1 (2).svg";
import Material from "../components/Material";
import TestimonialSlider from "../components/TestimonialSlider";
import Choose from "./Choose";
import combine_pic from "../assets/images/Group 26 (3).svg";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const navigate = useNavigate();
  function handleclick() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="home_hero_section">
        <div className="hero_section_contain">
          <div className="hero_section_contain_heading" data-aos="fade-up">
            <h1>Exotic minimal furniture</h1>
          </div>
          <div className="hero_section_contain_lorem">
            <p data-aos="fade-down">
              Furnish Your Life with Style, Comfort, Elegance & Bringing warmth
              to every living space.
            </p>
          </div>
          <div className="hero_section_contain_buttons" data-aos="zoom-in-down">
            <button>Discover Our Furnishings</button>
            <button onClick={handleclick}>Enquiry</button>
          </div>
        </div>
        <div className="hero_section_img">
          <img src={hero_img} alt="placeholder" data-aos="zoom-in" />
        </div>
      </div>
      <div className="material_section">
        <Material />
      </div>
      <div className="choose_section">
        <Choose />
      </div>
      <div className="combine_section">
        <img src={combine_pic} alt="placeholder" />
      </div>
      <div className="testimonial_section">
        <TestimonialSlider />
      </div>
    </>
  );
}

export default Home;
