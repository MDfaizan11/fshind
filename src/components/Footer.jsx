import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import "../style/footer.css";
function Footer() {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_first_block">
          <div className="footer_first_block_heading">
            <h1>Fs Hind</h1>
          </div>
          <div className="footer_first_block_lorem">
            <p>
              "At FSHind, we are committed to providing high-quality furniture
              and exceptional customer service. From custom-made designs to
              reliable repair services, we are here to meet all your home
              furnishing needs. Explore our wide range of products and
              experience convenience, quality, and style with FSHind."
            </p>
          </div>
          <div className="footer_first_block_social_icon">
            <a
              href="https://www.facebook.com/profile.php?id=61563510463512&mibextid=ZbWKwL"
              target="_blank"
              className="social_link"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/fs_hind?igsh=N201MHFqcHFid2Ru"
              target="_blank"
              className="social_link"
            >
              <FaInstagramSquare size={32} />
            </a>
            <a href="tel:+917666864381" className="social_link">
              <IoMdCall size={32} />
            </a>

            <a href="https://wa.me/917666864381" className="social_link">
              <IoLogoWhatsapp size={32} />
            </a>
          </div>
        </div>
        <div className="footer_secound_block">
          <div className="secound_link">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li> Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer_third_block">
          <div className="footer_email">
            <p>fshind12@gmail.com</p>
          </div>
          <div className="footer_address">
            <p>Wanjra Layout, Shiv Nagar, Nagpur 440026</p>
          </div>
          <div className="footer_number">
            <p>7666864381, 749958773</p>
          </div>
        </div>
      </div>
      <div className="footer_copy_write_section">
        <p>Fs - Hind Copyright © {year} . All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
