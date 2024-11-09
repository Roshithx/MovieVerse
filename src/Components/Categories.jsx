import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
const Categories = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
          <div className='d-flex align-items-center mt-3 '>
        <h5 className='text-white'>ADD GENRE</h5>
        <button  onClick={handleShow} className='btn '>  <i className="fa-solid fs-4 text-success fa-plus"></i></button>
     </div>

     <div className="container-fluid mt-3">
        <div className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between align-items-center">
                <h5>All Genres</h5>
                <button className='btn btn-success '> Remove<i className="fa-solid fa-trash ms-2"></i> </button> 
            </div>
        </div>
     </div>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Categories