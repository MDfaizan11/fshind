import React from "react";
import hero_img from "../assets/images/Group 1 (2).svg";
import phone from "../assets/images/phone (1) 1.019439fdb33275979ac1354f2c8f0e2e.svg";
import whatapp from "../assets/images/whatsapp (2) 1.ea0907697459ebac8a82ce1d60c0a53e.svg";
import "../style/Contact.css";
function Contact() {
  return (
    <>
      <div className="home_hero_section">
        <div className="hero_section_contain">
          <div className="hero_section_contain_heading">
            <h1 data-aos="fade-up">Contact Us</h1>
          </div>
          <div className="hero_section_contain_lorem">
            <p data-aos="fade-down">
              Furnish Your Life with Style, Comfort, Elegance & Bringing warmth
              to every living space.
            </p>
          </div>
          <div className="hero_section_contain_buttons">
            <button data-aos="fade-up">Discover Our Furnishings</button>
            <button data-aos="fade-down">Contact Us</button>
          </div>
        </div>
        <div className="hero_section_img">
          <img src={hero_img} alt="placeholder" data-aos="fade-up" />
        </div>
      </div>

      <div className="contact_wrapper">
        <div className="contact_info">
          <div className="information">
            <h2>Email : fshind12@gmail.com</h2>
            <h2>Address : Wanjra Layout, Shiv Nagar, Nagpur 440026</h2>
            <h2>Contact : 7666864381, 749958773</h2>
          </div>
          <div className="contact_icon">
            <a href="tel:+917666864381" data-aos="fade-up">
              <img src={phone} alt="Phone Icon" />
            </a>
            <a
              href="https://wa.me/917666864381"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatapp} alt="WhatsApp Icon" data-aos="fade-up" />
            </a>
          </div>
        </div>
        <div className="contact_map_side"></div>
      </div>
    </>
  );
}

export default Contact;
