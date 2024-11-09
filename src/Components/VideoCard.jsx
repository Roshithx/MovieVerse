import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
const VideoCard = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
    <Card  style={{ width: '16rem' }}>
      <Card.Img onClick={handleShow} height={200} variant="top" src="https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg" />
      <Card.Body>
        <Card.Title className='fs-6 text-center'>Caption</Card.Title>
        <div className='text-center'>
        <button className='btn btn-success mt-3'> Remove<i className="fa-solid fa-trash ms-2"></i> </button> 
        </div>
      
         
          
      </Card.Body>
    </Card>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="535" src="https://www.youtube.com/embed/v8yrZSkKxTA" title="Caption" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  )
}

export default VideoCard