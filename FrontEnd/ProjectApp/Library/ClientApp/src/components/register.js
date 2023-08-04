import React, { useState} from 'react';

import '../assets/loginStyle.css';
import video from '../assets/Snapinsta.app_video_292328304_584067219917347_7825907334609580174_n.mp4';
import { Link } from 'react-router-dom';


const RegisterForm = () => {
  
  const[username,setUserName]=useState('');
  const[pass,setpass]=useState('');

  const handleSave = () => {
    const url = 'https://localhost:7022/api/Admin';
    const data = {
      "id": 0,
      "username": username,
      "password": pass
    };
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  
    fetch(url, requestOptions)
    .then(response => response.json())
    .then((result) => {
     // getData();
     // clear();
    })
    .catch(error => {
      console.log(error);
    });
  
      
  };
  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autoComplete="off" className="sign-in-form">
              <div className="logo">
                <h4>Library App</h4>
                <h2>New account?</h2>
                <Link to="/">Login</Link>
              </div>

              <div className="heading">
                <h2>Register</h2>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Name"
                    value={username}
                    onChange={(e)=>{
                      setUserName(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    placeholder="password"
                    className="input-field"
                    autoComplete="off"
                    value={pass}
                    onChange={(e)=>{
                      setpass(e.target.value);
                    }}
                    required
                  />
                </div>

               
                  <button onClick={handleSave} className='reg12'>Submit</button>

                <p className="text">
                  Forgotten your password or your login details? <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <video src={video} autoPlay loop muted controls={false} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
