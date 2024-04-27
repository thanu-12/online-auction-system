import React, { useState } from 'react';
import axios from 'axios'; 

function DeleteBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setBookTitle(e.target.value);
  };

  const deleteBook = async () => {
    try {
      const response = await axios.delete('http://localhost:8081/deletebook', {
        data: { title: bookTitle },
      });

      if (response.status === 200) {
        alert(response.data.message);
      } else {
        // If the response status is not 200, handle it as an error
        throw new Error(`Server responded with status ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <label htmlFor="bookTitle">Item Name:</label>
      <input
        type="text"
        id="bookTitle"
        placeholder="Enter item name"
        value={bookTitle}
        onChange={handleInputChange}
      />
      <button onClick={deleteBook}>Delete Item</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default DeleteBook;
