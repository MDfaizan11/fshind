import React, { useState } from "react";
import { Client, Storage } from "appwrite";
import "../style/uplode.css";

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint(process.env.REACT_APP_APPWRITE_URL) // Appwrite Endpoint from environment variables
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID); // Project ID from environment variables

const storage = new Storage(client);

function Uplode() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  // Allowed file types
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg+xml",
    "image/gif",
    "text/html",
    "application/pdf",
    "video/mp4",
  ];

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file type:", file.type); // Log the file type for debugging
      if (allowedTypes.includes(file.type)) {
        setImage(file);
      } else {
        alert(
          "Invalid file type. Allowed types are JPG, PNG, SVG, GIF, HTML, PDF, MP4."
        );
      }
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!beforeImage || !afterImage) {
      alert("Please select both images/files before uploading.");
      return;
    }

    try {
      const beforeImageResponse = await storage.createFile(
        process.env.REACT_APP_APPWRITE_BUCKET_ID, // Bucket ID from environment variables
        "unique()", // Use "unique()" for a unique ID
        beforeImage
      );

      const afterImageResponse = await storage.createFile(
        process.env.REACT_APP_APPWRITE_BUCKET_ID, // Bucket ID from environment variables
        "unique()", // Use "unique()" for a unique ID
        afterImage
      );

      console.log("Before file uploaded:", beforeImageResponse);
      console.log("After file uploaded:", afterImageResponse);

      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files.");
    }
  };

  return (
    <>
      <div className="main_wrapper_admin_uplode_img">
        <div className="admin_uplode_img">
          <h2>Admin Upload Files</h2>
          <form className="uplode_image_form" onSubmit={handleUpload}>
            <div className="before_input">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setBeforeImage)}
                required
              />
              <p>Please Upload Before File (JPG, PNG, etc.)</p>
            </div>
            <div className="after_input">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setAfterImage)}
                required
              />
              <p>Please Upload After File (JPG, PNG, etc.)</p>
            </div>
            <button type="submit" className="uplode_button">
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Uplode;
