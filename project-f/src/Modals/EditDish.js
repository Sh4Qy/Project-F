import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditDishForm from '../Forms/EditDish';

function EditDishModal(props) {     
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
            Edit Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditDishForm onClose={props.onClose}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditDishModal;