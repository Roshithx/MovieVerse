import React, { useEffect, useState } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { Toaster, toast } from 'sonner';
import { addCategory, deleteCategory, getCategory } from '../Services/allAPI';

const Categories = () => {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState("");
    const [categoryCard, setCategoryCard] = useState([]);

    useEffect(() => {
        getCategoryCard();
    }, []);

    const getCategoryCard = async () => {
        const res = await getCategory();
        if (res.status >= 200 && res.status < 300) {
            setCategoryCard(res.data);
        }
    };

    const handleDelete = async (categoryID) => {
        await deleteCategory(categoryID);
        getCategoryCard();
    };

    const videodrop = (e, CID) => {
        const videoID = e.dataTransfer.getData("vID");
        console.log(`Video ID ${videoID} dropped in category ${CID}`);
        e.preventDefault(); // Prevent default behavior
    };

    const dragCategory = (e) => {
        e.preventDefault();
    };

    const handleClose = () => {
        setShow(false);
        setCategory(""); // Clear category input when modal closes
    };
    const handleShow = () => setShow(true);

    const handleUpload = async () => {
        if (category) {
            const res = await addCategory({ category, allvideos: [] });
            if (res.status >= 200 && res.status < 300) {
                toast.success(`${category} Category Added`);
                handleClose();
                getCategoryCard();
            }
        } else {
            toast.warning("Please fill the form");
        }
    };

    return (
        <>
            <div className='d-flex align-items-center mt-3'>
                <h5 className='text-white'>ADD GENRE</h5>
                <button onClick={handleShow} className='btn'>
                    <i className="fa-solid fs-4 text-success fa-plus"></i>
                </button>
            </div>

            <div className="container-fluid mt-3">
                {categoryCard.length > 0 ? (
                    categoryCard.map((item) => (
                        <div
                            key={item?.id}
                            onDragOver={(e) => dragCategory(e)}
                            onDrop={(e) => videodrop(e, item.id)}
                            className="border rounded p-3 mb-2"
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>{item?.category}</h5>
                                <button onClick={() => handleDelete(item?.id)} className='btn btn-success'>
                                    Remove<i className="fa-solid fa-trash ms-2"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-white'>No Data Found</p>
                )}
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Genre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Movie Genre" className="mb-3">
                        <Form.Control
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            type="text"
                            placeholder="Movie Genre"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpload} variant="primary">
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <Toaster position="top-center" />
        </>
    );
};

export default Categories;
