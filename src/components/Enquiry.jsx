import React, { useState } from "react";
import "../style/enquiry.css";
import { databases } from "../appwriteConfig";

function Enquiry() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState("");
  const [toggled, setToggled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !select) {
      alert("Please fill in the required fields");
      return;
    }

    try {
      const response = await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABSE_ID, // Replace with your Database ID
        process.env.REACT_APP_APPWRITE_COLLECTION_ID, // Replace with your Collection ID
        "unique()",
        {
          name,
          number: parseInt(number),
          email,
          address,
          service: select,
          message,
        }
      );
      console.log("Document created successfully", response);

      setName("");
      setNumber("");
      setEmail("");
      setAddress("");
      setSelect("");
      setMessage("");

      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error("Error creating document:", error);
      alert("Failed to submit enquiry. Please try again later.");
    }
  };

  function handleToggle() {
    setToggled(!toggled);
  }

  return (
    <>
      <div className="note">
        {toggled ? (
          <p className="hindi_text">
            Note : Hamari service aisi hai ke ham pehle visit karne aate hai
            Febric ke catlog or foam ke sample saath me laate hai phir sofa ka
            perfect measurement leke or aap ki requirement ke hisaab se estimate
            batate hai. Visit ke koi charges nhi hai bilkul free hai visit
          </p>
        ) : (
          <p className="english_text">
            Note : Our service is such that we first come for a visit, bringing
            along fabric catalogs and foam samples. Then, we take the perfect
            measurements of the sofa and provide an estimate based on your
            requirements. There are no charges for the visit it's completely
            free.
          </p>
        )}
        <div className="lang_button">
          <button onClick={handleToggle} className="tbutton">
            Translate
          </button>
        </div>
      </div>

      <div className="enquiry_form">
        <form className="main_enquiry_form" onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="name">
            <input
              type="number"
              required
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="name">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="name">
            <input
              type="text"
              required
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="name">
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="Sofa Repair">Sofa Repair</option>
              <option value="Sofa Renew">Sofa Renew</option>
              <option value="New Sofa">New Sofa</option>
              <option value="New Furniture">New Dining</option>
              <option value="New Bed">New Bed</option>
              <option value="New Wardrobe">New Wardrobe</option>
              <option value="New Dressing">New Dressing</option>
              <option value="Modular Kitchen">Modular Kitchen</option>
            </select>
          </div>
          <div className="name">
            <textarea
              placeholder="Please Write Your Enquiry Here ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="enquiry_submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Enquiry;
