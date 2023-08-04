import '../assets/nav.css';
import '../assets/catalog.css';
import img1 from '../assets/books/b1.jpg';
import img2 from '../assets/books/b2.jpg';
import img3 from '../assets/books/b3.jpg';
import img4 from '../assets/books/b4.jpg';
import img5 from '../assets/books/b5.jpg';
import img6 from '../assets/books/b6.jpg';
import img7 from '../assets/books/b7.jpg';
import img8 from '../assets/books/b8.jpg';
import img9 from '../assets/books/b9.jpg';
import img10 from '../assets/books/b10.jpg';
import img11 from '../assets/books/b11.jpg';
import img12 from '../assets/books/b12.jpg';
import img13 from '../assets/books/b13.jpg';
import img14 from '../assets/books/b14.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


// import { useSession } from 'react-session';


const MainPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
    useEffect(() => {
      // Retrieve the session from localStorage
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--total-width', '1000px');
    document.documentElement.style.setProperty('--total-width2', '1000px');
  }, []);

  const smoothScroll = (target) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
          
            <li>
              <Link to="/authorss">Authors</Link>
            </li>
            <li>
            <Link to="/books">Books</Link>

            </li>
            <li>
            <button onClick={(event)=>{
            event.preventDefault();

            localStorage.setItem('username', 'null');
            navigate("/", {replace: true});
         }}> Log out</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row">
        <div className="col">
          <h1>Welcome, {username}!</h1>
          <p>
          Welcome to your library's web app homepage! We are thrilled to have you here. Our web app is designed to be your ultimate gateway to the world of knowledge, imagination, and adventure. Whether you're an avid reader or a curious learner, our vast collection of books, e-books, and resources awaits you.
          </p>
          <button type="button" onClick={() => smoothScroll('#catalog_area')}>
            Explore
          </button>
        </div>
        <div className="col">
          <div className="card card1"></div>
          <div className="card card2"></div>
          <br />
          <div className="card card3"></div>
          <div className="card card4"></div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="catalog-area" id="catalog_area">
        <div className="catalog-slider">
          <div className="catalog-slide-track">
            <div className="catalog-slide">
              <img src={img1} alt="Book 9" />
            </div>
            <div className="catalog-slide">
              <img src={img2} alt="Book 11" />
            </div>
            <div className="catalog-slide">
              <img src={img3} alt="Book 12" />
            </div>
            <div className="catalog-slide">
              <img src={img4} alt="Book 13" />
            </div>
            <div className="catalog-slide">
              <img src={img5} alt="Book 5" />
            </div>
            <div className="catalog-slide">
              <img src={img6} alt="Book 8" />
            </div>
            <div className="catalog-slide">
              <img src={img7} alt="Book 9" />
            </div>
            <div className="catalog-slide">
              <img src={img8} alt="Table" />
            </div>
            <div className="catalog-slide">
              <img src={img9} alt="Image 2" />
            </div>
            <div className="catalog-slide">
              <img src={img10} alt="Image 2" />
            </div>
            <div className="catalog-slide">
              <img src={img11} alt="Image 1" />
            </div>
            <div className="catalog-slide">
              <img src={img12} alt="Kate" />
            </div>
            <div className="catalog-slide-2">
              <img src={img13} alt="Library" />
            </div>
          </div>
        </div>

        <div className="catalog-slider-2">
          <div className="catalog-slide-track-2">
            <div className="catalog-slide-2">
              <img src="../assets/books/b14.jpg" alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img14} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img2} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img10} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img5} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img8} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img4} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img6} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img3} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img4} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img3} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img2} alt="Book 5" />
            </div>
            <div className="catalog-slide-2">
              <img src={img7} alt="Book 5" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainPage;
