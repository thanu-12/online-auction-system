// Contact.js (React Component)

import React, { useState } from 'react';
import './contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic here to handle the form submission
    // For example, you can send the form data to a server using fetch or axios

    console.log('Form submitted:', formData);

    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="ganesh">
    <div className="oggu">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
<br></br>
<br></br>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
<br></br>
<br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
