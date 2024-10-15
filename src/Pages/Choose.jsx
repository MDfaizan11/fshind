import React from "react";
import "../style/choose.css";
import bus from "../assets/images/Group 20.svg";
import easy from "../assets/images/Group 21 (2).svg";
import support from "../assets/images/Group 22.svg";
import retun from "../assets/images/Group 23 (1).svg";
import c_img from "../assets/images/Group 19.svg";
function Choose() {
  return (
    <>
      <h2 className="choose_heading"> Why Choose Us</h2>
      <div className="choose_wrapper">
        <div className="contain_side">
          <div className="upper_contain_side">
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div className="four_contain">
            <div className="first_choose_contain" data-aos="fade-up">
              <img src={bus} alt="bus" />
              <h3>Fast & Free Delivery</h3>
              <p>
                Nulla facilisi. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                tempor tristique.
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-down">
              <img src={easy} alt="bus" />
              <h3>Easy To Shop</h3>
              <p>
                Nulla facilisi. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                tempor tristique.
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-up">
              <img src={support} alt="bus" />
              <h3>24/7 Support</h3>
              <p>
                Nulla facilisi. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                tempor tristique.
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-down">
              <img src={retun} alt="bus" />
              <h3>Hassle Free Exchange</h3>
              <p>
                Nulla facilisi. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                tempor tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="choose_image_side">
          <img src={c_img} alt="c_img" data-aos="fade-up" />
        </div>
      </div>
    </>
  );
}

export default Choose;
