import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Signin.css';
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";


function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8081/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      // Assuming the response contains a property like 'success'
      if (data.success) {
        // Redirect to the successful login page
        navigate('/Sucess')
        
     
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
   
  };

  return (
   
    <div className="main" align="center">
      <div className="sub-main" style={{ height: "470px" }}>
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="user name"
                className="name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="password"
                className="name"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-button">
              <button onClick={handleLogin}>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Signin;