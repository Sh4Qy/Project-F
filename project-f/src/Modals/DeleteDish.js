import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteDishModal(props) {     

  const dish = props.info

  async function deleteDish() {
    axios.delete(`http://127.0.0.1:8000/dish/${dish.id}`).then(respnonse => {
      console.log(respnonse.data)
    })
    props.onClose();
    await props.sleep(50)
    props.refresh();
  }
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
        <Button variant='success' onClick={deleteDish}>Yes</Button>
        <Button variant='danger' onClick={props.onHide}>No</Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteDishModal;