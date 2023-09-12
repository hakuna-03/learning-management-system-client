import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

function AddProfessor() {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collageId: "",
    gpa: "",
    natId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your API endpoint
      const response = await axios.post(`${baseURL}/professor`, formData);
      console.log("Professor added:", response.data);

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        collageId: "",
        gpa: "",
        natId: "",
      });
    } catch (error) {
      console.error("Error adding professor:", error);
    }
  };

  return (
    <div>
      <h2>Add New Professor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="collageId"
          placeholder="Collage ID"
          value={formData.collageId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gpa"
          placeholder="GPA"
          value={formData.gpa}
          onChange={handleChange}
        />
        <input
          type="text"
          name="natId"
          placeholder="National ID"
          value={formData.natId}
          onChange={handleChange}
        />
        <button type="submit">Add Professor</button>
      </form>
    </div>
  );
}

export default AddProfessor;
