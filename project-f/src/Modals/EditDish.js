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
        <EditDishForm onClose={props.onClose} dish={props.info} Categories={props.Categories} sleep={props.sleep} refresh={props.refresh}/>
      </Modal.Body>
    </Modal>
  );
}

export default EditDishModal;