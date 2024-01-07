import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddCategoryForm(props) {

    const [uploadFile, setUploadFile] = useState(null)
    const [formData, setFormData] = useState({
      name: '',
      img: '',
  });

  const handleInputChange = (event) => {
    const {id, value, type, files} = event.target;
    
    if (type === 'file') {
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
      [id]: value,
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
        axios.post(`http://127.0.0.1:8000/category/`, formData).then(respnonse => {
          console.log(respnonse.data)
        })
        props.onClose();
        await props.sleep(50)
        props.refresh();
    }
  return (
    <Form onSubmit={handleSubmit} style={{fontSize: 'larger', fontWeight: 'bold'}} encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type ="text"
        placeholder="Enter name"
        value={formData.name}
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddCategoryForm;