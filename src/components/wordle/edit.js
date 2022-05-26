
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect, withRouter } from 'react-router-dom'

function EditLog ({ user, match, msgAlert }) {
  //   const [selected, setSelected] = useState({})
  const [log, setLog] = useState({ game: 'wordle', word: '', guesses: '', date_guessed: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/logs/${match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
      .then((res) => {
        setLog(res.data.log)
      })
  }, [])
  const onChange = (event) => {
    event.persist()
    setLog((log) => ({ ...log, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/logs/${match.params.id}/`,
      method: 'PATCH',
      data: { log },
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
      .then(() => setUpdated(true))
      .catch((error) => {
        msgAlert({
          heading: 'Oops',
          message: 'Update error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  if (!log) {
    return <p>Loading...</p>
  }

  if (updated) {
    return (
      <Redirect
        to={{ pathname: '/logs', state: { msg: 'You successfully updated your Meme' } }}
      />
    )
  }
  return (
    <>
      <Form className="edit" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Word</Form.Label>
          <Form.Control
            required
            defaultValue={log.word}
            name="word"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of Guesses</Form.Label>
          <Form.Select
            required
            name="guesses"
            value={log.guesses}
            onChange={onChange}
          >
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
            defaultValue={log.date_guessed}
            type="date"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  )
}

export default withRouter(EditLog)
