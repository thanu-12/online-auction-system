import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ShowNavBar from './ShowNavbar2';


const Navbar2 = () => {
  return (
    <div>
      <ShowNavBar>
      <ul className='navbar'>
      <center><li className='navbar-heading' ><Link to="/">Online Auction System</Link></li></center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li><Link to="/books">Items</Link></li>
        <li><Link to="/cart">Bid</Link></li> 
        <li><Link to="/myorders">My Orders</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/feedback">FeedBack</Link></li>
        <li><Link to="/home">Logout</Link></li>

      </ul>
      </ShowNavBar>
    </div>
  );
};
export default Navbar2;
