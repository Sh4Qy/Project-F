import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';

function AddDishForm(props) {

    const Categories = props.Categories

    const [formData, setFormData] = useState({
      name: '',
      description: '',
      image: '',
      haveNuts: false,
      isDairy: false,
      forBreakfast: false,
      forLunch: false,
      forDinner: false,
      categoryId: 1,
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
        // axios.post(`http://127.0.0.1:8000/dish/`, formData).then(respnonse => {
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
        placeholder="Enter Discription"
        value={formData.description}
        onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
        type ="text"
        placeholder="Enter Image"
        value={formData.image}
        onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoryId">
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
          id="haveNuts"
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="Dairy" 
            id="isDairy"
            onChange={handleInputChange}
            />
        </Form.Group>
        </div>

        <div className='Time'>
        <Form.Group className="mb-3" controlId="forBreakfast">
          <Form.Check 
            type="checkbox" 
            label="Breakfast" 
            id="forBreakfast"
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forLunch">
          <Form.Check 
            type="checkbox" 
            label="Lunch" 
            id="forLunch"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forDinner">
         <Form.Check 
            type="checkbox" 
            label="Dinner" 
            id="forDinner"
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