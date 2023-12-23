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
            </div>)
      }
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>

      {showLinks && (
        <div className='HomeLink'> 
          <Link to="/home">
            <button type="button" class="btn btn-primary">Home</button>
          </Link>
          <Link to="/dishes">
            <button type="button" class="btn btn-primary">Dishes</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;

