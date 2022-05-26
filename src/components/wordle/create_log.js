import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const LogCreate = ({ user, msgAlert }) => {
  const [log, setLog] = useState({ game: 'wordle', word: '', guesses: '', date_guessed: '' })
  const [createdLogId, setCreatedLogId] = useState(null)

  const handleChange = event => {
    event.persist()
    setLog(log => ({ ...log, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/logs/`,
      method: 'POST',
      headers: {
        Authorization: `Token ${user.token}`
      },
      data: { log }
    })
      .then(res => setCreatedLogId(res.data.log.id))
      .then(() =>
        msgAlert({
          heading: 'Log Success',
          message: 'Nice wordle log!',
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Oops',
          message: 'Upload fail:' + error.message,
          variant: 'danger'
        })
      })
  }

  if (createdLogId) {
    return <Redirect to={`/logs/${createdLogId}`} />
  }

  return (
    <>
      <img className='slug-log' src="https://i.imgur.com/yZMRobl.png" />
      <Form className='edit' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Word</Form.Label>
          <Form.Control
            required
            value={log.word}
            name="word"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of Guesses</Form.Label>
          <Form.Select
            required
            name="guesses"
            value={log.guesses}
            onChange={handleChange}
          >
            <option value="Enter Selection">Choose from Drop Down</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Date Guessed</Form.Label>
          <Form.Control
            required
            name="date_guessed"
            value={log.date_guessed}
            type="date"
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  )
}

export default LogCreate
