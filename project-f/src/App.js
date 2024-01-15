import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dishes from './pages/Dishes';
import './style/App.css';
import './style/IPadPro.css'
import './style/Phone.css';
import './style/Tablet.css'
import { useNavigate  } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import axios from 'axios';



function App() {
  const [showLinks, setShowLinks] = useState(true);
  const [showGoBack, setGoBack] = useState(false);
  const location = useLocation();
  const navigate  = useNavigate ();

  const [fetchCategories, setFetchCategories] = useState([])
  const [fetchDishes, setFetchDishes] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const source = axios.CancelToken.source();
  
    axios.get('http://127.0.0.1:8000/category/', { cancelToken: source.token })
      .then(response => {
        setFetchCategories(response.data);
        console.log(response.data)
      })
      .catch(error => {
        if (axios.isCancel(error)) {
        } else {
        }
      });
  
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
  
    axios.get('http://127.0.0.1:8000/dish/', { cancelToken: source.token })
      .then(response => {
        setFetchDishes(response.data.reverse());
        console.log(response.data)
      })
      .catch(error => {
        if (axios.isCancel(error)) {
        } else {
        }
      });
  
    return () => {
      source.cancel();
    };
  }, [refreshPage]);
  
  
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
              <Navbar bg="primary" data-bs-theme="dark" className='justify-content-between'>
                <div className='NavbarButtons'>
                <Link className='btn' onClick={() => navigate(-1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
              </Link>
              <Link to="/" className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
              </Link>
              </div>
              <p className='NavbarText'>Project F</p>
                <img
                    alt="Logo"
                    src="/uploads/Logo.jpeg"
                    className="d-inline-block align-top"
                  />
            </Navbar>)
      }
      <Routes>
        <Route path="/home" element={
        <HomePage 
        fetchCategories={fetchCategories} 
        fetchDishes={fetchDishes}
        />
        } 
        />
        <Route path="/dishes" element={
        <Dishes 
        fetchCategories={fetchCategories} 
        fetchDishes={fetchDishes} 
        refreshPage={refreshPage}
        setRefreshPage={setRefreshPage}
        />
      } 
        />
      </Routes>

      {showLinks && (
        <div>
          <Link to="/dishes" className='DishesLink'>
            Dishes
          </Link>
          <Link to="/home" className='ChooseDishLink'>
            Choose For Me
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;

