import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { deleteVideoCard, storeHistory } from "../Services/allAPI";
const VideoCard = ({ videodetails,setdeletevideoResponse }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const{caption,url}=videodetails
    const Sysdate=new Date()
    const timeStamp=Sysdate.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const storevideo={caption,url,timeStamp}
   const res = await storeHistory(storevideo)
  

  };

  const removeVideo=async(videoID)=>{
    const res= await deleteVideoCard(videoID)
     setdeletevideoResponse(res?.data)
  } 

  const videodrag=(e,videoID)=>{
    console.log(`Dragging${videoID}`);
    e.dataTransfer.setData("id",videoID)
    
  }


  return (
    <>
      <div className="">
        <Card draggable={true} onDragStart={(e)=>videodrag(e,videodetails?.id)} style={{ width: "16rem" }}>
          <Card.Img
            onClick={handleShow}
            height={200}
            variant="top"
            src={videodetails?.link}
          />
          <Card.Body>
            <Card.Title className="fs-6 text-center">{videodetails?.caption}</Card.Title>
            <div className="text-center">
              <button onClick={()=>removeVideo(videodetails?.id)}  className="btn btn-success mt-3">
                Remove<i className="fa-solid fa-trash ms-2"></i>
              </button>
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
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="535"
            src={videodetails?.url}
            title="Caption"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
