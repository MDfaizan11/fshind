import React, { useEffect, useState } from "react";
import { databases } from "../appwriteConfig"; // Import Appwrite config
import "../style/myenquiry.css"; // Import CSS file for styling

function Myenquiry() {
  const [enquiries, setEnquiries] = useState([]);
  console.log(enquiries);
  // Fetch enquiries when the component mounts
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await databases.listDocuments(
          "66f15816002babdf364a", // Replace with your Database ID
          "670df8ef0025cc746b53" // Replace with your Collection ID
        );
        setEnquiries(response.documents);
      } catch (error) {
        console.error("Failed to fetch enquiries:", error);
      }
    };

    fetchEnquiries();
  }, []);

  // Handle delete enquiry
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );
    if (!confirmDelete) return;

    try {
      await databases.deleteDocument(
        "66f15816002babdf364a", // Replace with your Database ID
        "670df8ef0025cc746b53", // Replace with your Collection ID
        id // The ID of the document to delete
      );

      // Update state after deletion
      setEnquiries(enquiries.filter((enquiry) => enquiry.$id !== id));
      alert("Enquiry deleted successfully.");
    } catch (error) {
      console.error("Failed to delete enquiry:", error);
      alert("Error deleting enquiry.");
    }
  };

  return (
    <div className="enquiry-container">
      <h2>Submitted Enquiries</h2>
      {enquiries.length > 0 ? (
        <table className="enquiry-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Service</th>
              <th>Location</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.$id}>
                <td>{enquiry.name}</td>
                <td>{enquiry.number}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.address}</td>
                <td>{enquiry.service}</td>
                <td>{enquiry.location}</td>
                <td>{enquiry.enquiry}</td>
                <td>
                  <button
                    onClick={() => handleDelete(enquiry.$id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No enquiries found.</p>
      )}
    </div>
  );
}

export default Myenquiry;
