import React, { useEffect, useState} from 'react';

import '../assets/loginStyle.css'
import video from '../assets/Snapinsta.app_video_292328304_584067219917347_7825907334609580174_n.mp4'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignInSignUpForm = () => {

  const navigate = useNavigate(); 

    useEffect(()=>{
      if(localStorage.getItem("username") !== 'null'){
        navigate("/mainPage", {replace: true});
      }
    }, [])
    const [password, setPassword] = useState('');
  const storedUsername = localStorage.getItem('username');

  const [username, setUsername] = useState(storedUsername || '');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const url = `https://localhost:7022/api/Admin/${username}/${password}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            localStorage.setItem('username', username);
            navigate("/mainPage", {replace: true})
            // setSignInSuccess(true);
          } else {
            console.log(result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };




  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">

              <div className="logo">
                <h4>Library App</h4>
                <h2>New account?</h2>
                <Link to="/register">
                  Register
                </Link>
              </div>

              <div className="heading">
                <h2>Log in</h2>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                <input
                  type="text"
                  className="input-field"
                  autoComplete="off"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />

                </div>

                <div className="input-wrap">
                <input
                      type="password"
                      className="input-field"
                      autoComplete="off"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />

                </div>
            
                                 <input type="submit" value="Sign In" className="sign-btn" />
            
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

export default SignInSignUpForm;
