import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ConditionsForm(props) {

    const Categories = props.Categories

    const [chooseTimeShow, setChooseTimeShow] = useState(true)

    const [formData, setFormData] = useState({
      have_nuts: false,
      is_dairy: false,
      breakfast_dish: false,
      lunch_dish: false,
      dinner_dish: false,
      category_id: 'All',
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
    
    else if (id === 'turn_on_time'){
      setChooseTimeShow(!chooseTimeShow)
      setFormData({
        have_nuts: formData.have_nuts,
        is_dairy: formData.is_dairy,
        breakfast_dish: false,
        lunch_dish: false,
        dinner_dish: false,
        category_id: formData.category_id,
    })
      console.log(chooseTimeShow)
      return;
    }

    else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: checked
      }));
    }
  };

  function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        axios.post('http://127.0.0.1:8000/dish/choosefood', formData).then(respnonse => {
          console.log(respnonse.data)
        })
    }
  return (
    <Form onSubmit={handleSubmit} className='ChoosingForm' encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="category_id">
        <Form.Label>Categories</Form.Label>
        <Form.Select onChange={handleInputChange}>
          <option value={'All'}>All</option>
          {Categories.map(category=>
          <option value={category.id}>{category.name}</option>
          )}
        </Form.Select>
      </Form.Group>

      <div className='ChoosingAlergies'>
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

          <hr/>

        <Form.Group className="mb-3" controlId="turn_on_time">
          <Form.Check 
            type="switch" 
            label="Choose Time" 
            onChange={handleInputChange}
            />
        </Form.Group>

        <div className='ChoosingTime'>
        <Form.Group className="mb-3" controlId="breakfast_dish">
          <Form.Check 
            type="checkbox" 
            label="Breakfast" 
            id="breakfast_dish"
            onChange={handleInputChange}
            disabled={chooseTimeShow}
            checked={chooseTimeShow ? false : formData.breakfast_dish}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lunch_dish">
          <Form.Check 
            type="checkbox" 
            label="Lunch" 
            id="lunch_dish"
            onChange={handleInputChange}
            disabled={chooseTimeShow}
            checked={chooseTimeShow ? false : formData.lunch_dish}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dinner_dish">
         <Form.Check 
            type="checkbox" 
            label="Dinner" 
            id="dinner_dish"
            onChange={handleInputChange}
            disabled={chooseTimeShow}
            checked={chooseTimeShow ? false : formData.dinner_dish}
            />
        </Form.Group>
        </div>
      <Button variant="primary" type="submit">
        Go
      </Button>
    </Form>
  );
}

export default ConditionsForm;