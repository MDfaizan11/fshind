import React, { useState } from "react";
import "../style/enquiry.css";
import { databases } from "../appwriteConfig";

function Enquiry() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [select, setSelect] = useState("");
  const [SelectDay, setSelectDay] = useState("");
  const [SelectTime, setSelectTime] = useState("");
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
          Day: SelectDay,
          Time: SelectTime,
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
              <option value="" disabled>
                Select Service
              </option>
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
            <select
              value={SelectDay}
              onChange={(e) => setSelectDay(e.target.value)}
            >
              <option value="" disabled>
                {" "}
                Select Day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="name">
            <select
              value={SelectTime}
              onChange={(e) => setSelectTime(e.target.value)}
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="9am-10am">9am-10am</option>
              <option value="10am-11am">10am-11am</option>
              <option value="11am-12pm">11am-12pm</option>
              <option value="12pm-1pm">12pm-1pm</option>
              <option value="1pm-2pm"> 1pm-2pm</option>
              <option value="2pm-3pm">2pm-3pm</option>
              <option value="3pm-4pm">3pm-4pm</option>
              <option value=" 4pm-5pm"> 4pm-5pm</option>
              <option value=" 5pm-6pm"> 5pm-6pm</option>
              <option value=" 6pm-7pm"> 6pm-7pm</option>
              <option value=" 7pm-8pm"> 7pm-8pm</option>
              <option value=" 8pm-9pm"> 8pm-9pm</option>
              <option value=" 9pm-10pm"> 9pm-10pm</option>
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
