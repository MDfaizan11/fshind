import React, { useEffect, useState } from "react";
import { Client, Storage } from "appwrite";
import "../style/list.css"
// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("66f1567a0004216da07b"); // Replace with your project ID
const storage = new Storage(client);

function List() {
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

  // Handle file deletion for a specific pair
  const handleDelete = async (filesToDelete) => {
    try {
      await Promise.all(
        filesToDelete.map((file) =>
          storage.deleteFile("66f165ac00251b62f512", file.$id)
        )
      ); // Delete selected files
      // Update state to remove deleted pairs
      setFilePairs((prevPairs) =>
        prevPairs.filter((pair) => pair[0].$id !== filesToDelete[0].$id)
      );
      alert("Selected files deleted successfully!");
    } catch (error) {
      console.error("Error deleting files:", error);
      alert("Failed to delete selected files.");
    }
  };

  return (
    <div className="list_main_wrapper">
      <h2>Uploaded Images</h2>
      <table className="maintable">
        <thead className="thead">
          <tr>
            <th>S.No</th>
            <th>Image 1</th>
            <th>Image 2</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filePairs.map((pair, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {pair[0] && (
                  <img
                    src={getImageUrl(pair[0].$id)}
                    alt={pair[0].name}
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
              </td>
              <td>
                {pair[1] && (
                  <img
                    src={getImageUrl(pair[1].$id)}
                    alt={pair[1].name}
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(pair)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
