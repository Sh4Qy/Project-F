import React from 'react';
import Modal from 'react-modal';
import FormComponent from './Form';
import { useState } from 'react';

Modal.setAppElement('#root');


const Dishes = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Dishes</h2>
      <p>This is the Dishes page.</p>
      <button type="button" class="btn btn-primary" onClick={openModal}>Open Form</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '600px',
            height: '400px',
            margin: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
          },
        }}
      >
        <FormComponent onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Dishes;
