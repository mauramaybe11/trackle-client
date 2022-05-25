
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import { Redirect, Link, withRouter } from 'react-router-dom'

function ShowLog ({ user, match, msgAlert }) {
  const [log, setLog] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    axios({
      url: `${apiUrl}/logs/${match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token ${user.token}`
      }
      // pass in, fire request, send me the arrays, filter this list for users =
      // filter => resource === user id
      // new array meet conditions
      // pass that array to map
    })
      .then((res) => {
        console.log(res.data.log)
        setLog(res.data.log)
      })
      .then(() => {
        msgAlert({
          heading: 'Your Wordle log',
          message: 'Nice Games!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Oops',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])
  const destroy = () => {
    axios({
      url: `${apiUrl}/logs/${match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => {
        msgAlert({
          heading: 'Deleted',
          message: 'Tracked Wordle Deleted',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'It\'s not going anywhere!',
          message: 'Delete error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  if (!log) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return (
      <Redirect
        to={{ pathname: '/logs', state: { msg: 'You successfully deleted your Wordle log' } }}
      />
    )
  }

  return (
    <>
      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
        <h1>Your Wordle Log</h1>
        <h2>Word: {log.word}</h2>
        <p>Number of Guesses:{log.guesses}</p>
        <p>Date Word Was Guessed:{log.date_guessed}</p>
        <p>Log Created:{log.created_at.substring(0, 10)}</p>
        <p>Log Updated:{log.updated_at.substring(0, 10)}</p>
        <Button variant='primary' style={{ display: 'flex', justifyContent: '' }} onClick={handleShow}>DeleteLog</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button variant='primary' onClick={destroy}>Delete</Button>
          </Modal.Footer>
        </Modal>

        <Link to={'/logs/' + match.params.id + '/edit'}>
          <Button style={{ marginLeft: '5px' }}>Edit log</Button>
        </Link>
      </div>
    </>
  )
}

export default withRouter(ShowLog)
