import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';

function AddDishForm(props) {

    const Categories = props.Categories
    const dish = props.dish

    const [formData, setFormData] = useState({
      name: dish.name,
      description: dish.description,
      img: dish.img,
      have_nuts: dish.have_nuts,
      is_dairy: dish.is_dairy,
      breakfast_dish: dish.breakfast_dish,
      lunch_dish: dish.lunch_dish,
      dinner_dish: dish.dinner_dish,
      category_id: dish.category_id,
  });

  const handleInputChange = (event) => {
    const {id, value, type, checked} = event.target;
    
    if (type === 'select-one') {
      const selectedOption = value;
      setFormData((prevData) => ({
        ...prevData,
        [id]: selectedOption,
      }));
      return;
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // axios.put(`http://127.0.0.1:8000/dish/${dish.id}`, formData).then(respnonse => {
        //   console.log(respnonse.data)
        // })
        props.onClose();
    }
  return (
    <Form onSubmit={handleSubmit} style={{fontSize: 'larger', fontWeight: 'bold'}}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type ="text"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Discription</Form.Label>
        <Form.Control
        type ="text"
        placeholder="Enter name"
        value={formData.description}
        onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Image</Form.Label>
        <Form.Control
        type ="text"
        placeholder="Enter name"
        value={formData.img}
        onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category_id">
        <Form.Label>Categories</Form.Label>
        <Form.Select onChange={handleInputChange}>
          {Categories.map(category=>
          <option value={category.id}>{category.name}</option>
          )}
        </Form.Select>
      </Form.Group>

    <div className='AddDishCheckBox'>
      <div className='Alergies'>
        <Form.Group className="mb-3">
          <Form.Check 
          type="checkbox" 
          label="Have Nuts" 
          id="have_nuts"
          checked={formData.have_nuts}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="Dairy" 
            id="is_dairy"
            checked={formData.is_dairy}
            onChange={handleInputChange}
            />
        </Form.Group>
        </div>

        <div className='Time'>
        <Form.Group className="mb-3" controlId="breakfast_dish">
          <Form.Check 
            type="checkbox" 
            label="Breakfast" 
            id="breakfast_dish"
            checked={formData.breakfast_dish}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lunch_dish">
          <Form.Check 
            type="checkbox" 
            label="Lunch" 
            id="lunch_dish"
            checked={formData.lunch_dish}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dinner_dish">
         <Form.Check 
            type="checkbox" 
            label="Dinner" 
            id="dinner_dish"
            checked={formData.dinner_dish}
            onChange={handleInputChange}
            />
        </Form.Group>
        </div>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddDishForm;