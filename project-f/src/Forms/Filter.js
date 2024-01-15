import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FilterForm(props) {

  const {Categories, setWitchCategoryFilter, witchCategoryFilter, filterData, setFilterData} = props;

  const handleInputChange = (event) => {
    const {id, value, type, checked} = event.target;
    
    if (type === 'select-one') {
      setWitchCategoryFilter(value)
      return;
    }
    
    setFilterData((prevData) => {
      const updatedData = { ...prevData };
    
      updatedData[id] = checked;
    
      if (!checked && Object.keys(updatedData).length !== 0) {
        delete updatedData[id];
      }
    
      return updatedData;
    });
  };

  return (
    <Form className='FilterForm'>
      <Form.Group className="mb-3" controlId="category_id">
        <Form.Select onChange={handleInputChange} className='SelectCategories' value={witchCategoryFilter}>
          <option value={'All'}>All</option>
          {Categories.map(category=>
          <option value={category.id}>{category.name}</option>
          )}
        </Form.Select>
      </Form.Group>

      <hr/>


      <div className='Alergies'>
        <Form.Group className="mb-3">
          <Form.Check 
          type="checkbox" 
          label="Have Nuts" 
          id="have_nuts"
          checked={filterData.have_nuts}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="Dairy" 
            id="is_dairy"
            checked={filterData.is_dairy}
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
            checked={filterData.breakfast_dish}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lunch_dish">
          <Form.Check 
            type="checkbox" 
            label="Lunch" 
            id="lunch_dish"
            checked={filterData.lunch_dish}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dinner_dish">
         <Form.Check 
            type="checkbox" 
            label="Dinner" 
            id="dinner_dish"
            checked={filterData.dinner_dish}
            onChange={handleInputChange}
            />
        </Form.Group>
        </div>
        
      <div className='FilterFormButtons'>
      <Button variant="primary" onClick={()=>
      {setFilterData({});
       setWitchCategoryFilter('All')}}>
        Reset
      </Button>
      </div>
    </Form>
  );
}

export default FilterForm;