import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddDishForm(props) {

    const Categories = props.Categories
    const dish = props.dish

    const [uploadFile, setUploadFile] = useState(null)
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
    const {id, value, type, checked, files} = event.target;
    
    if (type === 'select-one') {
      const selectedOption = value;
      setFormData((prevData) => ({
        ...prevData,
        [id]: selectedOption,
      }));
      return;
    }

    else if (type === 'file') {
      const file = files[0];
      setUploadFile(file);
      setFormData((prevData) => ({
        ...prevData,
        [id]:file.name
      }))
      return;
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        console.log(dish.id)
        if (uploadFile !== null) {
        const formDataObject = new FormData();
        formDataObject.append('file', uploadFile)
        axios.post(`http://127.0.0.1:8000/dish/upload`, formDataObject, {headers: { 'Content-Type': 'multipart/form-data' }}).then(respnonse => {
          console.log(respnonse.data)
        })}
        axios.put(`http://127.0.0.1:8000/dish/${dish.id}`, formData).then(respnonse => {
          console.log(respnonse.data)
        })
        props.onClose();
        await props.sleep(50)
        props.refresh();
    }
  return (
    <Form onSubmit={handleSubmit} className='Form'>
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

      <Form.Group controlId="img" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="file"
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