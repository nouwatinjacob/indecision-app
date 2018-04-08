import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleModalClose}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      { props.selectedOption && <p>{ props.selectedOption }</p> }
      <button
        onClick={props.handleModalClose}
      >
        Okay
      </button>
    </Modal>
);

export default OptionModal;