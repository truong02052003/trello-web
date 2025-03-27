import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = (props) => {
    const { title, content, show, onActive,onClose } = props;

    return (
        <>

            <Modal show={show} onHide={() => onActive('close')}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                     <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                    <Button variant="primary" onClick={() => onActive('confirm')}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModal;