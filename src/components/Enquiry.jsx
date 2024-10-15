import React, { useState, useEffect } from "react";
import { databases } from "../appwriteConfig"; // Import from appwriteConfig
import "../style/enquiry.css";

const databaseId = "66f15816002babdf364a"; // Replace with your Database ID
const collectionId = "670df8ef0025cc746b53"; // Replace with your Collection ID

function Enquiry() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [select, setSelect] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [toggled, setToggled] = useState(false);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data && data.address) {
                // Extract street, city, and postcode
                const street =
                  data.address.road ||
                  data.address.neighbourhood ||
                  data.address.suburb ||
                  "Street not found";
                const city =
                  data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  "City not found";
                const postcode =
                  data.address.postcode || "Postal code not found";

                // Constructing the address with the required details
                const fullAddress = [street, city, postcode]
                  .filter(Boolean)
                  .join(", ");
                setLocation(fullAddress); // Set the location state with the required address
              } else {
                setLocation("Location not found");
              }
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
              setLocation("Unable to fetch location");
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLocation("Unable to get your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLocation("Geolocation is not supported");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !select || !address) {
      alert("Please fill in the required fields");
      return;
    }

    // Save form data to Appwrite database
    try {
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        "unique()", // Generate unique document ID
        {
          name,
          number: parseInt(number),
          email: email || "N/A",
          address,
          service: select,
          location: location || "N/A",
          enquiry: message || "No message provided",
        }
      );
      console.log("Enquiry stored successfully:", response);

      alert("Enquiry sent successfully and stored in the database!");
    } catch (error) {
      console.error("Error storing enquiry:", error);
      alert("Error storing enquiry.");
    }

    // Reset form fields
    setName("");
    setNumber("");
    setEmail("");
    setAddress("");
    setSelect("");
    setMessage("");
    setLocation("");
  };

  function handleToggle() {
    setToggled(!toggled);
  }

  return (
    <>
      <div className="note">
        {toggled ? (
          <>
            <p className="english_text">
              Note : Hamari service aisi hai ke ham pehle visit karne aate hai
              Febric ke catlog or foam ke sample saath me laate hai phir sofa ka
              perfect measurement leke or aap ki requirement ke hisaab se
              estimate batate hai. Visit ke koi charges nhi hai bilkul free hai
              visit
            </p>
          </>
        ) : (
          <>
            <p className="hindi_text">
              Note : Our service is such that we first come for a visit,
              bringing along fabric catalogs and foam samples. Then, we take the
              perfect measurements of the sofa and provide an estimate based on
              your requirements. There are no charges for the visit it's
              completely free.
            </p>
          </>
        )}
        <div className="lang_button">
          <button onClick={handleToggle} className="lang">
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
            <input
              type="text"
              placeholder="Live location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
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
