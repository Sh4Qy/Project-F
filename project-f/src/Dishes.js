import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import AddDishModal from './Modals/AddDish';
import ShowDishModal from './Modals/ShowDish';
import EditDishModal from './Modals/EditDish';
import DeleteDishModal from './Modals/DeleteDish'
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';

const Dishes = () => {

  const [fetchCategories, setFetchCategories] = useState([])
  const [fetchDishes, setFetchDishes] = useState([])

  const [addDishModalShow, setaddDishModalShow] = useState(false);
  const [editDishModalShow, setEditDishModalShow] = useState(false);
  const [showDishModalShow, setShowDishModalShow] = useState(false);
  const [deleteDishModalShow, setDeleteDishModalShow] = useState(false);

  const [editDishModalInfo, setEditDishModalInfo] = useState({})
  const [showDishModalInfo, setShowDishModalInfo] = useState({})
  const [deleteDishModalInfo, setDeleteDishModalInfo] = useState('')


  const [showOptions, setShowOptions] = useState(false)
  const optionsSectionRef = useRef(null);

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
        setFetchDishes(response.data);
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
    const handleClickOutside = (event) => {
      if (addDishModalShow || editDishModalShow || showDishModalShow || deleteDishModalShow) {
        return;
      }
      if (optionsSectionRef.current && !optionsSectionRef.current?.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [addDishModalShow, editDishModalShow, showDishModalShow, deleteDishModalShow]);

  const toggleOptions = (index, event) => {
    event.stopPropagation();
    showOptions === index
    ? setShowOptions(false)
    : setShowOptions(index)
  }

  return (
    <div className='DishPage'>
      <div>
        <Button variant="primary" onClick={(event) => {setaddDishModalShow(true); event.stopPropagation()}}>
            Add Dish
        </Button>
      </div>
      <AddDishModal
        show={addDishModalShow}
        onHide={() => setaddDishModalShow(false)}
        onClose={() => setaddDishModalShow(false)}
        Categories={fetchCategories}
      />

      <EditDishModal
        show={editDishModalShow}
        onHide={() => setEditDishModalShow(false)}
        onClose={() => setEditDishModalShow(false)}
        info={editDishModalInfo}
        Categories={fetchCategories}
      />

      <ShowDishModal
          show={showDishModalShow}
          onHide={() => setShowDishModalShow(false)}
          info={showDishModalInfo}
      />

      <DeleteDishModal
      show={deleteDishModalShow}
      onHide={() => setDeleteDishModalShow(false)}
      info={deleteDishModalInfo}
      />
        <div className='DishList'>
        {
          fetchDishes.map((dish, index)=>
            <div>
            <Card className="bg-dark text-white Card" onClick={() => {setShowDishModalShow(true); setShowDishModalInfo(dish)}}>
              <Card.Img src={`/${dish.img}.jpeg`} alt="Card image" style={{height: '200px', width: '300px'}}/>
              <Card.ImgOverlay>
                <Card.Title>{dish.name}</Card.Title>
                <div className='OptionsIcon' onClick={(event) => toggleOptions(index, event)} aria-controls="example-collapse-text" aria-expanded={showOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
                </div>
                <div className='OptionsSection' ref={optionsSectionRef}>
                <Collapse in={showOptions === index}>
                  <div id="example-collapse-text">
                    <Button variant="dark" onClick={(event) => {setEditDishModalShow(true); setEditDishModalInfo(dish) ;event.stopPropagation()}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                      </svg>
                    </Button>
                    <Button variant="dark" onClick={(event) => {setDeleteDishModalShow(true); setDeleteDishModalInfo(dish.name) ;event.stopPropagation()}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg>
                    </Button>
                  </div>
                </Collapse>
                </div>
              </Card.ImgOverlay>
            </Card>
            </div>)
          }
        </div>
    </div>
  );
};

export default Dishes;
