import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap'
import { addToCategory, deleteCategories, getAVideo, getAllCategories, updateCategories } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {

  const [categoryName, setCategoryName] = useState("")
  const [allcategories, setAllCategories] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName, allVideos: []
      }
      // make api call
      const response = await addToCategory(body)
      console.log(response);
      if (response.status = 200 && response.status < 300) {
        // hide modal
        handleClose()
        // reset state
        setCategoryName()
      } else {
        toast.error("something went wrong")
      }
    }
    else {
      toast.warning("provide category name")
    }

  }

  const getCategories = async () => {
    const { data } = await getAllCategories()
    setAllCategories(data);

  }
  console.log(allcategories);

  useEffect(() => {
    getCategories()
  }, [])

  const handledelete = async (id) => {
    await deleteCategories(id)
    getCategories()
  }

  const onDragOver = (e) => {
    console.log("video drag over category");
    e.preventDefault()

  }

  const videDrop = async (e, categoryId) => {
    console.log("video drop inside category id:" + categoryId)
    const videoId = e.dataTransfer.getData('videoid')
    console.log('video card id:', videoId);
    //get a video deatils
    const { data } = await getAVideo(videoId)
    console.log(data)

    //get category details

    const selectedcategory = allcategories?.find(items => items.id === categoryId)
    selectedcategory.allVideos.push(data)
    console.log(selectedcategory);

    //make api call to get update category
    await updateCategories(categoryId, selectedcategory)
    getCategories()
  }



  return (

    <>
      <div className='d-grid ms-3'>
        <button style={{width:'300px'}} className='btn btn-info' onClick={handleShow}>Add to Category</button>

      </div>
      {
        allcategories ? allcategories?.map((item) => (
          <div className='mt-5 mb-3 border rounded p-3 text-white' droppable onDragOver={(e) => onDragOver(e)} onDrop={(e) => videDrop(e, item?.id)}>
            <div className='  d-flex justify-content-between align-items-center'>
              <h6>{item?.categoryName}</h6>
              <button className='btn' onClick={() => handledelete(item?.id)}>Delete</button>
            </div>
            <Row style={{width:'300px'}}>
              {
                item?.allVideos &&
                item?.allVideos.map(
                  Card => (
                    <Col md={12}>
                      <VideoCard displayData={Card} />
                    </Col>  
                  )
                )
              }

            </Row>
          </div>
        )) : <p>Nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Video Name</Form.Label>
              <Form.Control type="email" placeholder="Enter category name" onChange={(e) => setCategoryName(e.target.value)} />

            </Form.Group>


          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
      />



    </>
  )
}

export default Category