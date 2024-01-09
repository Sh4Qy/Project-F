import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FilterForm(props) {

    const Categories = props.Categories

    const [formData, setFormData] = useState({
        have_nuts: false,
        is_dairy: false,
        breakfast_dish: false,
        lunch_dish: false,
        dinner_dish: false,
    });

    const [witchCategory, setWitchCategory] = useState('')

  const handleInputChange = (event) => {
    const {id, value, type, checked} = event.target;
    
    if (type === 'select-one') {
      setWitchCategory(value)
      return;
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  };

  return (
    <Form className='FilterForm'>
      <Form.Group className="mb-3" controlId="category_id">
        <Form.Select onChange={handleInputChange} className='SelectCategories' value={witchCategory}>
          <option value={''}>All</option>
          {Categories.map(category=>
          <option value={category.id}>{category.name}</option>
          )}
        </Form.Select>
      </Form.Group>

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

        <hr/>

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
      <div className='FilterFormButtons'>
      <Button variant="primary" onClick={console.log(formData)}>
        Search
      </Button>
      <Button variant="primary" onClick={()=>
      {setFormData({
        have_nuts: false,
        is_dairy: false,
        breakfast_dish: false,
        lunch_dish: false,
        dinner_dish: false,
        });
       setWitchCategory('')}}>
        Reset
      </Button>
      </div>
    </Form>
  );
}

export default FilterForm;