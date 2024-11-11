import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Toaster,toast } from 'sonner';
import { uploadVideoAPI } from '../Services/allAPI';
const AddVideo = ({setaddvideoRes}) => {

   const [videodetails,setVideodetails]=useState({
    caption:"",
    link:"",
    url:""

   })
   console.log(videodetails);
   
   const[invalidLink,setInvalidLink]=useState(false)

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL=(YTlink)=>{
        if(YTlink.includes('https://www.youtube.com/watch?v=')){
          const VideoID=YTlink.split("v=")[1].slice(0,11)
          console.log(VideoID);
          setVideodetails({...videodetails,url:`https://www.youtube.com/embed/${VideoID}`})
          setInvalidLink(false)
          
        }
        else{
          setVideodetails({...videodetails,url:""})
           console.log("Invalid URl");
           setInvalidLink(true)

           
        }

  }

  const handleUpload= async()=>{
     
     const {caption,link,url}=videodetails
     if(caption&&link&&url){
      const response= await uploadVideoAPI(videodetails)
      console.log(response);
      if(response.status>=200 && response.status<300)  //checking the response from the server is in 200 series http
      {
        handleClose()
        setVideodetails({...videodetails,caption:"",link:"",url:""}) //reset form values (State) 
        setaddvideoRes(response)
        toast.success("Video uploaded sucessfully")
      }
      
      
      
     }
     else{
        toast.success("Please fill the form")
     }
     
  }


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
        <Form.Control  onChange={(e)=>{
          setVideodetails({...videodetails,caption:e.target.value})
        }}   className='' type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Cover Image" className="mb-3">
        <Form.Control onChange={(e)=>{
           setVideodetails({...videodetails,link:e.target.value})
        }} type="text" placeholder="Cover Image"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Youtube Video Link">
        <Form.Control onChange={(e)=>{
             getEmbedURL(e.target.value)
        }} type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>
      {
        invalidLink&& <div className="text-danger mt-3">Invalid Youtube Link</div>
      }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} className='btn btn-success' >Upload</Button>
        </Modal.Footer>
      </Modal>

      <div>
      <Toaster position="top-center" />
    
    </div>
    </>
  )
}

export default AddVideo



// yt link: https://www.youtube.com/watch?v=v8yrZSkKxTA&t=34s

 // https://www.youtube.com/embed/v8yrZSkKxTA