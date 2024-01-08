import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddDishForm(props) {

    const Categories = props.Categories

    const [uploadFile, setUploadFile] = useState(null)
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      img: '',
      have_nuts: false,
      is_dairy: false,
      breakfast_dish: false,
      lunch_dish: false,
      dinner_dish: false,
      category_id: 1,
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
    
    else {
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
    }
  };

  async function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        console.log(uploadFile)
        const formDataObject = new FormData();
        formDataObject.append('file', uploadFile)
        axios.post(`http://127.0.0.1:8000/dish/upload`, formDataObject, {headers: { 'Content-Type': 'multipart/form-data' }}).then(respnonse => {
          console.log(respnonse.data)
        })
        axios.post(`http://127.0.0.1:8000/dish/`, formData).then(respnonse => {
          console.log(respnonse.data)
        })
        props.onClose();
        await props.sleep(50)
        props.refresh();
    }
  return (
    <Form onSubmit={handleSubmit} className='Form' encType='multipart/form-data'>
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
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="Dairy" 
            id="is_dairy"
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
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lunch_dish">
          <Form.Check 
            type="checkbox" 
            label="Lunch" 
            id="lunch_dish"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dinner_dish">
         <Form.Check 
            type="checkbox" 
            label="Dinner" 
            id="dinner_dish"
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