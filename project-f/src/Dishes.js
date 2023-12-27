import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import AddDishModal from './Modals/AddDish';
import ShowDishModal from './Modals/ShowDish';
import EditDishModal from './Modals/EditDish';

const Dishes = () => {

  const [addDishModalShow, setaddDishModalShow] = useState(false);
  const [editDishModalShow, setEditDishModalShow] = useState(false);
  const [showDishModalShow, setShowDishModalShow] = useState(false);


  return (
    <div className='DishPage'>
      <div className='DishPageActions'>
      <Button variant="primary" onClick={() => setaddDishModalShow(true)}>
        Add Dish
      </Button>

      <Button variant="primary" onClick={() => setEditDishModalShow(true)}>
        Edit Dish
      </Button>
      </div>
      <AddDishModal
        show={addDishModalShow}
        onHide={() => setaddDishModalShow(false)}
        onClose={() => setaddDishModalShow(false)}
      />

      <EditDishModal
        show={editDishModalShow}
        onHide={() => setEditDishModalShow(false)}
        onClose={() => setEditDishModalShow(false)}
      />

      <ShowDishModal
          show={showDishModalShow}
          onHide={() => setShowDishModalShow(false)}
      />

        <div className='DishList'>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
          <div className='Card' onClick={() => setShowDishModalShow(true)}>
          <Card className="bg-dark text-white">
            <Card.Img src="/salad.jpeg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Salad</Card.Title>
            </Card.ImgOverlay>
          </Card>
          </div>
        </div>
    </div>
  );
};

export default Dishes;
