import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import Dishes from './Dishes';
import './App.css';
import { useNavigate  } from 'react-router-dom';


function App() {
  const [showLinks, setShowLinks] = useState(true);
  const [showGoBack, setGoBack] = useState(false);
  const location = useLocation();
  const navigate  = useNavigate ();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      setGoBack(false);
    } else {
      setGoBack(true);
    }
  }, [location]);

  return (
    <div className='App'>
      {showGoBack && (
            <div className='GoBack'>
            <button type="button" class="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
            <Link to="/" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
            </Link>
            </div>)
      }
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>

      {showLinks && (
        <div className='HomeLink'> 
          <Link to="/home" class="btn btn-primary">
            Home
          </Link>
          <Link to="/dishes" class="btn btn-primary">
            Dishes
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;

