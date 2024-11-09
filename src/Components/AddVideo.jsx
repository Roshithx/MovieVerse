import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
const AddVideo = () => {

   const [videodetails,setVideodetails]=useState({
    caption:"",
    link:"",
    url:""

   })


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
     <div className='d-flex align-items-center mt-3 '>
        <h5 className='text-white'>UPLOAD VIDEO</h5>
        <button  onClick={handleShow} className='btn '>  <i className="fa-solid fs-4 text-success fa-plus"></i></button>
     </div>


     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered

      >
        <Modal.Header className='' closeButton>
          <Modal.Title  className='' >UPLOAD VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control value={videodetails} className='' type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Cover Image" className="mb-3">
        <Form.Control type="text" placeholder="Cover Image"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Youtube Video Link">
        <Form.Control type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='btn btn-success' >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo