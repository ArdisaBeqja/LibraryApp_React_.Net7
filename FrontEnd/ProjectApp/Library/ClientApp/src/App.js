
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import MainPage from './components/mainPage';
import Author12 from './components/authorss';
import Books from './components/books';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/authorss" element={<Author12 />} />
        <Route path="/books" element={<Books />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
