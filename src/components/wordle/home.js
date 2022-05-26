import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
function Home () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className='title'>Trackle</h1>
        <Button className='modal-home-button' onClick={handleShow}>What even is Trackle?</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='modal-home' closeButton>
            <Modal.Title className='modal-home-header'>Trackle is a Wordle Tracking App</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-home'>Trackle allows for you to track your everyday wordle score. You can view the average number of guesses that it takes for you to guess your words. </Modal.Body>
          <Modal.Footer className='modal-home'>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <img className="slug" src="https://i.imgur.com/6SsXfBk.png"/>
      </div>
    </>
  )
}
export default Home
