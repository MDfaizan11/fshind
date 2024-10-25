import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { databases } from "../appwriteConfig"; // Import from appwriteConfig
import "../style/feedback.css";

function Feedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABSE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
        "unique()", // Unique ID generation
        {
          name,
          feedback,
          rating: parseInt(rating), // Rating must be an integer
        }
      );

      console.log("Feedback submitted", response);

      // Reset form
      setName("");
      setFeedback("");
      setRating("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback", error);
      alert("Error submitting feedback.");
    }
  };

  return (
    <>
      <h1 className="feedback_form_heading">Feedback Form</h1>
      <div className="feedback_form_wrapper">
        <form onSubmit={handleSubmit} className="feedback_form">
          <div className="feedback_name">
            <h2>Name:</h2>
            <input
              type="text"
              placeholder="Please Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="feedback_message">
            <h2>Feedback:</h2>
            <textarea
              placeholder="Enter Your Feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="feedback_rating">
            <h2>Rating:</h2>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => setRating(value)}
                style={{ cursor: "pointer" }}
              >
                <FaStar
                  color={rating >= value ? "#ffc107" : "#e4e5e9"}
                  size={30}
                />
              </span>
            ))}
          </div>
          <div className="feedback_submit_button">
            <button type="submit">Submit Feedback</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Feedback;
