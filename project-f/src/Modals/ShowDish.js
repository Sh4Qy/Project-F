import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowDishModal(props) {
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
          Amazing Salad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Bar's favorit dish!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowDishModal;