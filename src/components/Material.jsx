import React from "react";
import "../style/material.css";
import sofa from "../assets/images/Group 13.svg";
import furniture from "../assets/images/Group 14.svg";
import bed from "../assets/images/Group 15 (2).svg";
import wardrobe from "../assets/images/Group 16.svg";
import Dressing from "../assets/images/Group 17 (3).svg";
import Modular_Kitchen from "../assets/images/Group 18 (3).svg";
import sofa_image from "../assets/images/IMG-20240906-WA0115(1).jpg";
import { useNavigate } from "react-router-dom";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";

function Material() {
  const navigate = useNavigate();
  function handlerepair() {
    navigate("/repair");
  }
  function handleSwitch() {
    navigate("/sofaimg");
  }
  function handledining() {
    navigate("/dining");
  }
  function handlebed() {
    navigate("/bed");
  }
  function handlewardrobe() {
    navigate("/wardrobe");
  }
  function handleDressing() {
    navigate("/dressing");
  }
  function handlekitchen() {
    navigate("/kitchen");
  }
  return (
    <>
      <div className="main_material_wrapper">
        <div className="merial_heading">
          <h2 data-aos="zoom-out-up">
            Crafted With Excellent{" "}
            <b style={{ color: "orangered" }}>Material </b>
          </h2>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Each piece is meticulously designed to bring both elegance and
            comfort into your home, ensuring that it stands the test of time
            while enhancing your living space.
          </p>
        </div>
        <div className="material_logos">
          <div
            className="sofa_material"
            data-aos="fade-up"
            data-aos-duration="3000"
            onClick={handleSwitch}
          >
            <img src={sofa} alt="" />
            <p>Sofa</p>
          </div>
          <div
            className="sofa_material"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            onClick={handledining}
          >
            <img src={furniture} alt="" />
            <p>Dining Table</p>
          </div>
          <div
            className="sofa_material"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            onClick={handlebed}
          >
            <img src={bed} alt="" />
            <p>Bed</p>
          </div>
          <div
            className="sofa_material"
            data-aos="fade-up"
            data-aos-duration="3000"
            onClick={handlewardrobe}
          >
            <img src={wardrobe} alt="" />
            <p>wardrobe</p>
          </div>
          <div
            className="sofa_material"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            onClick={handleDressing}
          >
            <img src={Dressing} alt="" />
            <p>Dressing</p>
          </div>
          <div
            className="sofa_material"
            data-aos="fade-up"
            data-aos-duration="3000"
            onClick={handlekitchen}
          >
            <img src={Modular_Kitchen} alt="" />
            <p>Modular Kitchen</p>
          </div>
        </div>
      </div>
      <div className="explor_services">
        <div className="explor_services_heading">
          <h2> Explore Our Services</h2>
        </div>
        <div className="renew_sofa_repair">
          <div className="renew_sofa" data-aos="fade-up">
            <div className="sofa_image">
              <img src={sofa_image} alt="sofa_image" />
            </div>
            <p>
              Our expert sofa repair services bring new life to your beloved
              furniture.
            </p>
            <p className="button" onClick={handlerepair}>
              Sofa Repair
            </p>
          </div>
          <div className="renew_sofa" data-aos="fade-down">
            <div className="sofa_image">
              <img src={s1} alt="sofa_image" />
            </div>
            <p>
              Revitalize your living space with our professional sofa renewal
              service.
            </p>
            <p className="button" onClick={handlerepair}>
              Sofa Renew
            </p>
          </div>
          <div className="renew_sofa" data-aos="fade-up">
            <div className="sofa_image">
              <img src={s2} alt="sofa_image" />
            </div>
            <p>
              Upgrade your living room effortlessly with our sofa exchange
              program.
            </p>
            <p className="button" onClick={handlerepair}>
              Sofa Exchange
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Material;