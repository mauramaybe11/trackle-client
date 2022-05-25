import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

function IndexAllLog ({ user, msgAlert }) {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    axios({
      url: `${apiUrl}/logsall/`,
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
    logsJSX = logs.map((log) => {
      return (
        <div key={log.id} style={{ justifyContent: 'center', textAlign: 'center' }} className='index' >
          <h1>{log.word}</h1>
          <p>Guesses {log.guesses}</p>
          <p>Date Word Guessed {log.date_guessed}</p>
          <p>User: {user.email}</p>
        </div>
      )
    })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center', fontSize: '80px' }}>Trackle</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '50px'
          }}>
          {logsJSX}
        </ul>
      </div>
    </>
  )
}
export default IndexAllLog
