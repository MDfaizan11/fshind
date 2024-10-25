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
              "People choose us for our exceptional craftsmanship, high-quality
              materials, and personalized service. We deliver durable, stylish
              furniture and reliable repair solutions tailored to your needs."
            </p>
          </div>
          <div className="four_contain">
            <div className="first_choose_contain" data-aos="fade-up">
              <img src={bus} alt="bus" />
              <h3>Fast & Free Delivery</h3>
              <p>
              At FSHind, we offer fast and free delivery on all our products, ensuring your furniture reaches you quickly and without any extra cost, right to your doorstep.
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-down">
              <img src={easy} alt="bus" />
              <h3>Easy To Shop</h3>
              <p>
              Shopping with FSHind is simple and convenient. Our user-friendly website makes it easy for you to browse, select, and order your favorite furniture from the comfort of your home
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-up">
              <img src={support} alt="bus" />
              <h3>24/7 Support</h3>
              <p>
              Our dedicated team at FSHind is available around the clock to assist you. Whether you have questions or need help, our 24/7 support ensures you’re never left waiting.
              </p>
            </div>
            <div className="first_choose_contain" data-aos="fade-down">
              <img src={retun} alt="bus" />
              <h3>Hassle Free Exchange</h3>
              <p>
              We believe in a smooth shopping experience, which is why FSHind offers a hassle-free exchange policy. If you're not satisfied, we’ll make it right with easy exchanges.
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
