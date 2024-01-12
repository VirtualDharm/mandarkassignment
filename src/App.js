// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Image Click App</h1>
              <div>
                <Link to="/page1">
                  <img src="image1.jpg" alt="Image 1" />
                </Link>
                <Link to="/page2">
                  <img src="image2.jpg" alt="Image 2" />
                </Link>
              </div>
            </>
          }
        />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
