import Modal from 'react-bootstrap/Modal';
import AddDishForm from '../Forms/AddDish';

function AddDishModal(props) {     
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddDishForm Categories={props.Categories} onClose={props.onClose}/>
      </Modal.Body>
    </Modal>
  );
}

export default AddDishModal;