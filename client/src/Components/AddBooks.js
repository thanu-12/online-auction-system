import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar3 from './Navbar3';
import './AddBooks.css';

const AddBooks = () => {
  const [books, setBooks] = useState({
    title:'',
    author:'',
    price:'',
    quantity:'',
    genre:'',
    imageUrl: ''
  });

  const [bookAdded, setBookAdded] = useState(false);

  const handleChange = (e) => {
    setBooks({...books, [e.target.id]: e.target.value});
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getBooks');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async () => {
    try {
      await axios.post('http://localhost:8081/addbooks', books);
      fetchBooks();
      setBooks({
        title:'',
        author:'',
        price:'',
        quantity:'',
        genre:'',
        imageUrl: '' 
      });
      setBookAdded(true); 
      setTimeout(() => {
        setBookAdded(false);
      }, 300000);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <Navbar3 />
      <div className="container">
        <div className="add-book-form">
          <h2>Add a Item (Admin)</h2>
          <label>Item Name:</label>
          <input type="text" id="title" value={books.title} onChange={handleChange} />

          <label>Name of seller:</label>
          <input type="text" id="author" value={books.author} onChange={handleChange} />

          <label>Base Price:</label>
          <input type="text" id="price" value={books.price} onChange={handleChange} />

          <label>Bid start time:</label>
          <input type="text" id="genre" value={books.genre} onChange={handleChange} />

          <label>Bid end time:</label>
          <input type="text" id="quantity" value={books.quantity} onChange={handleChange} />

          <label>Image Url:</label>
          <input type="text" id="imageUrl" value={books.imageUrl} onChange={handleChange} />

          <button onClick={addBook}>Add Item</button><br></br>
          {bookAdded && <p>Book Added Successfully</p>} 
        </div>
      </div>
    </div>
  );
};

export default AddBooks;