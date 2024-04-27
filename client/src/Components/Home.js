import React from 'react';
import './Home.css';
import NavBar from './Navbar';

function Home() {
  return (
    <div>
      <NavBar />
      <div className='home'>
        <marquee>
          <h1>Welcome to Our Online Aucion System.</h1>
        </marquee>
      </div>
    </div>
  );
}

export default Home;
