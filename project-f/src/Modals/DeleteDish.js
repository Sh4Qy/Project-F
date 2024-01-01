import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteDishModal(props) {     
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
            Are you sure you want to delete this dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='DeleteDishModalBody'>
        <Button variant='success'>Yes</Button>
        <Button variant='danger'>No</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteDishModal;