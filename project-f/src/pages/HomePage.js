import { React, useState } from 'react';
import ConditionsForm from '../Forms/Conditions';
import ChosenDishModal from '../Modals/ChosenDishModal';

const HomePage = (props) => {
    
  const {fetchDishes, fetchCategories} = props;

  const [chosenDishModalShow, setChosenDishModalShow] = useState(false)


    return (
      <div className='ChoosingPage'>

        {/* <ChosenDishModal         
        show={chosenDishModalShow}
        onHide={() => setChosenDishModalShow(false)}
        /> */}
        
        <ConditionsForm Categories={fetchCategories}/>
      </div>
    );
};

export default HomePage;
