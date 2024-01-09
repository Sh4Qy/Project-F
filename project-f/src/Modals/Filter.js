import Modal from 'react-bootstrap/Modal';
import FilterForm from '../Forms/Filter';

function FilterModal(props) {     
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Filter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FilterForm onClose={props.onClose} Categories={props.Categories}/>
      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;