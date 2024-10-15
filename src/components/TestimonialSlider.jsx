import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { databases } from "../appwriteConfig"; // Import your Appwrite configuration
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/TestimonialSlider.css"; // Optional: custom CSS for styling

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]); // State to hold testimonials
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await databases.listDocuments(
          "66f15816002babdf364a", // Your Database ID
          "66f15837002884ba12e0" // Your Collection ID
        );
        setTestimonials(response.documents); // Set the fetched documents to state
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false); // Update loading status
      }
    };

    fetchTestimonials(); // Call the fetch function
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Loading state handling
  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.$id} className="testimonial">
              <p className="message">"{testimonial.feedback}"</p>
              <div className="stars">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                  ))}
              </div>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSlider;
