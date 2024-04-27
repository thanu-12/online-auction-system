import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div>
      <Link to="/" className="back-to-home-button">
        Back to Home
      </Link>
      <div className='about'>
        <h1>About Us</h1>
        <p>
        Welcome to our online auction platform! We're thrilled to bring together buyers and sellers from around the world to engage in exciting 
        bidding wars and discover unique treasures.
        </p>
        <p>
        Our mission is to provide a dynamic marketplace where users can explore a diverse array of items up for auction, ranging from rare 
        collectibles to everyday essentials. Whether you're searching for vintage antiques, cutting-edge technology, exquisite artwork, or 
        one-of-a-kind memorabilia, you'll find it here.
        </p>
        <p>
        Our team is committed to delivering an exceptional auction experience. We've designed our platform to be intuitive and user-friendly, 
        ensuring that participants can easily navigate through listings, place bids, and track their favorite items. With robust security 
        measures in place, you can bid with confidence, knowing that your transactions are safe and protected.
        </p>
        <p>
        Thank you for choosing our online auction platform. Happy bidding and may the highest bidder win!
        </p>
      </div>
    </div>
  );
}

export default About;
