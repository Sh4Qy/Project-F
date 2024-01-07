import Modal from 'react-bootstrap/Modal';
import AddCategoryForm from '../Forms/AddCategory';

function AddCategoryModal(props) {     
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
            Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddCategoryForm onClose={props.onClose} sleep={props.sleep} refresh={props.refresh}/>
      </Modal.Body>
    </Modal>
  );
}

export default AddCategoryModal;