import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  btnText: string;
  btnVariant: string;
  modalTitle: string;
  modalText: string;
  modalCloseButton: boolean;
};

const Confirmation = ({
  btnText,
  btnVariant = 'primary',
  modalTitle,
  modalText,
  modalCloseButton = true,
}: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant={btnVariant} onClick={handleShow}>
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={modalCloseButton}>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Confirmation;
