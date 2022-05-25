import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function IndexLog ({ user, msgAlert }) {
  const [logs, setLogs] = useState([])
  const [average, setAverage] = useState(null)

  useEffect(() => {
    axios({
      url: `${apiUrl}/logs/`,
      method: 'GET',
      headers: {
        Authorization: `Token ${user.token}`
      }
      // pass in, fire request, send me the arrays, filter this list for users =
      // filter => resource === user id
      // new array meet conditions
      // pass that array to map
    }).then((res) => {
      setLogs(res.data.logs)
      let sum = 0
      res.data.logs.forEach(log => {
        sum += log.guesses
        console.log(res.data.logs.length)
      })
      const avg = sum / res.data.logs.length
      console.log(avg)
      setAverage(avg)
    })
      .then(() => {
        msgAlert({
          heading: 'Your Wordles',
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

  let logsJSX
  if (logs) {
    console.log(logs)
    logsJSX = logs.map((log) => {
      return (
        <div key={log.id} style={{ justifyContent: 'center', textAlign: 'center' }} className='index' >
          <h1>{log.word}</h1>
          <p>Guesses {log.guesses}</p>
          <p>Date Word Guessed {log.date_guessed}</p>
          <p>Log Created:{log.created_at.substring(0, 10)}</p>
          <p>Log Updated:{log.updated_at.substring(0, 10)}</p>
          <Link to={`/logs/${log.id}`}>
            <Button className='btn btn-primary'>Select Log</Button>
          </Link>
        </div>
      )
    })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center', fontSize: '80px' }}>Trackle</h3>
      <h4 style={{ textAlign: 'center' }}>Your Guessing Average: {average.substring(0, 2)}</h4>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', flexDirection: 'column-reverse', gap: '50px' }}>
          {logsJSX}
        </ul>
      </div>
    </>
  )
}
export default IndexLog
