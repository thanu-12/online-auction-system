import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css';
import Navbar2 from './Navbar2';
import Cart from './Cart'; 

const Books = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getbooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);


  const addToCart = async (book) => {
    try {
      await axios.post('http://localhost:8081/addToCart', { book });
      setCart(prevCart => [...prevCart, book]);
    } catch (error) {
      console.error('Error adding book to cart:', error);
    }
  };

  return (
    <div>
      <Navbar2/>
      <div className="books-container">
      
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <div className='imgtag' style={{justifyContent:"center"}} ><img className="artimg" src={book.imageUrl} alt="img_here" /></div>
            <br></br><p><h3>{book.title}</h3></p>
            <p>Owner: {book.author}</p>
            <p>Base Price Rs.{book.price}</p>
            {/* <p>Quantity: {book.quantity}</p> */}
            <p>Bid start time: {book.genre}</p>
            <p>Bid end time: {book.genre}</p>
            <br></br>
            <button onClick={() => addToCart(book)}>Bid</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Books;