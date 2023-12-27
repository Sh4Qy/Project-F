import {React, useState  } from 'react';
import MyVerticallyCenteredModal from './Modals/HomeModal';
import { Button } from 'react-bootstrap';
const HomePage = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default HomePage;
