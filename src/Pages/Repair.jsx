import React, { useEffect, useState } from "react";
import "../style/repair.css";
import hero_img from "../assets/images/Group 1 (2).svg";
import img1 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.10_ed703781.jpg";
import img2 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_2f888328.jpg";
import img3 from "../assets/images/WhatsApp Image 2024-09-20 at 13.52.20_70835bca.jpg";
import poster from "../assets/images/p3.jpg";

import { Client, Storage } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("66f1567a0004216da07b"); // Replace with your project ID
const storage = new Storage(client);
function Repair() {
  const [filePairs, setFilePairs] = useState([]);

  useEffect(() => {
    // Fetch all files from the storage bucket
    const fetchImages = async () => {
      try {
        const response = await storage.listFiles("66f165ac00251b62f512"); // Your Bucket ID
        // Assuming you want to create pairs of files
        const pairedFiles = [];
        for (let i = 0; i < response.files.length; i += 2) {
          pairedFiles.push(response.files.slice(i, i + 2)); // Create pairs
        }
        setFilePairs(pairedFiles);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchImages();
  }, []);

  // Get image URL from file ID
  const getImageUrl = (fileId) => {
    return `https://cloud.appwrite.io/v1/storage/buckets/66f165ac00251b62f512/files/${fileId}/view?project=66f1567a0004216da07b`;
  };

  console.log(getImageUrl);
  return (
    <>
      <div className="home_hero_section">
        <div className="hero_section_contain">
          <div className="hero_section_contain_heading">
            <h1>REPAIRING SERVICES</h1>
          </div>
          <div className="hero_section_contain_lorem">
            <p>
              Furnish Your Life with Style, Comfort, Elegance & Bringing warmth
              to every living space.
            </p>
          </div>
          <div className="hero_section_contain_buttons">
            <button>Discover Our Furnishings</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="hero_section_img">
          <img src={hero_img} alt="placeholder" />
        </div>
      </div>

      <h2 className="our_work_heading"> Our Work</h2>
      <div className="our_work_images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="repairing_work_heading">
        <h2>Our Repair Work</h2>
        <p>
          Your trusted solution for quick, reliable, and affordable repairs. We
          bring your devices back to life with precision and care, ensuring
          quality service every time.
        </p>
      </div>
      <div className="poster_center">
        {filePairs.length > 0 ? (
          filePairs.map((pair, index) => (
            <div key={index} className="repair_images_poster_wrapper">
              <div className="repair_images_poster">
                <img src={poster} alt="Poster" />
              </div>
              <div className="repiar_before_img">
                {pair[0] && (
                  <img
                    className="before"
                    src={getImageUrl(pair[0].$id)}
                    alt={pair[0].name}
                  />
                )}
              </div>
              <div className="repiar_after_img">
                {pair[1] && (
                  <img
                    className="after"
                    src={getImageUrl(pair[1].$id)}
                    alt={pair[1].name}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No Images Found</p>
        )}
      </div>
    </>
  );
}

export default Repair;
