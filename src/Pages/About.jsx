import React from "react";
import hero_img from "../assets/images/Group 1 (2).svg";
import about_hero_pic from "../assets/images/Group 26 (3).svg";
import "../style/about.css";
import craftman from "..//assets/images/craftman.svg";
import innovation from "../assets/images/innovative.svg";
import Customer from "../assets/images/customer.svg";
import after from "../assets/images/after 1.svg";
import img1 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.10_ed703781.jpg";
import img2 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_2f888328.jpg";
import img3 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_70835bca.jpg";
import img4 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_0fe9f2d9.jpg";
import img5 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_5e7c263f.jpg";
import img6 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.21_7cbbd10f.jpg";
import TestimonialSlider from "../components/TestimonialSlider";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/enquiry");
  }
  return (
    <>
      <div className="home_hero_section">
        <div className="hero_section_contain">
          <div className="hero_section_contain_heading">
            <h1 data-aos="fade-up">About Us</h1>
          </div>
          <div className="hero_section_contain_lorem">
            <p data-aos="fade-down">
              Furnish Your Life with Style, Comfort, Elegance & Bringing warmth
              to every living space.
            </p>
          </div>
          <div className="hero_section_contain_buttons">
            <button data-aos="fade-up">Discover Our Furnishings</button>
            <button data-aos="fade-down" onClick={handleclick}>
              Enquiry
            </button>
          </div>
        </div>
        <div className="hero_section_img" data-aos="fade-up">
          <img src={hero_img} alt="placeholder" />
        </div>
      </div>
      <div className="about_section_img">
        <img src={about_hero_pic} alt="" />
      </div>
      <div className="about_cards">
        <div className="about_card" data-aos="fade-up">
          <div className="about_card_img">
            <img src={craftman} alt="" />
          </div>
          <div className="about_card_content">
            <h3>Exceptional Craftsmanship</h3>
            <p>
              Our furnishings are crafted with the utmost care and attention to
              detail. We use high-quality materials and meticulously plan and
              execute each piece to create a comfortable, elegant, and stylish
              space.
            </p>
          </div>
        </div>
        <div className="about_card" data-aos="fade-down">
          <div className="about_card_img">
            <img src={innovation} alt="" />
          </div>
          <div className="about_card_content">
            <h3>Innovative Design</h3>
            <p>
              We blend tradition with innovation, offering designs that are both
              timeless and contemporary, ensuring our pieces not only fit
              seamlessly into your space but also stand out as works of art.
            </p>
          </div>
        </div>
        <div className="about_card" data-aos="fade-up">
          <div className="about_card_img">
            <img src={Customer} alt="" />
          </div>
          <div className="about_card_content">
            <h3>Customer Satisfaction</h3>
            <p>
              We strive to provide a seamless shopping experience, from
              personalized design consultations to prompt customer service,
              ensuring you receive the best possible care.
            </p>
          </div>
        </div>
        <div className="about_card" data-aos="fade-down">
          <div className="about_card_img">
            <img src={after} alt="" />
          </div>
          <div className="about_card_content">
            <h3>After-Sales Support</h3>
            <p>
              We provide comprehensive after-sales support, including care
              instructions, warranties, and repair services to ensure your
              furniture stays in perfect condition.
            </p>
          </div>
        </div>
      </div>
      <div className="mission_vission_container">
        <div className="fs_mission_section">
          <div className="fs_mission_section_heading">
            <h2 data-aos="flip-right">Our Mission</h2>
          </div>
          <div className="fs_mission_section_content">
            <p data-aos="flip-left">
              At FS Hind, our mission is to provide expert sofa repair and
              restoration services that enhance the beauty, comfort, and
              longevity of your furniture. We are dedicated to delivering
              high-quality craftsmanship, personalized solutions, and
              exceptional customer service, ensuring every sofa we restore
              exceeds expectations and brings joy back into your home.
            </p>
          </div>
        </div>

        <div className="fs_vission_section">
          <div className="fs_vission_section_heading">
            <h2 data-aos="flip-left">Our Vision</h2>
          </div>
          <div className="fs_vission_section_content">
            <p data-aos="flip-right">
              Our vision is to become the leading sofa repair and restoration
              service provider in India, known for our commitment to quality,
              innovation, and customer satisfaction. We aim to inspire a culture
              of sustainability by encouraging the repair and renewal of
              furniture, helping homes preserve memories while reducing waste.
            </p>
          </div>
        </div>
      </div>
      <div className="about_gallery">
        <h2 data-aos="fade-up">Our Gallery</h2>
        <div className="about_gallery_images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
      <div className="testimonal">
        <TestimonialSlider />
      </div>
    </>
  );
}

export default About;
