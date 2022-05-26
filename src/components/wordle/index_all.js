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
          heading: 'Everyone\'s Wordles',
          message: 'Check those Words out!',
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
        <div key={log.id} className='index-all' style={{ justifyContent: 'center', textAlign: 'center' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <img className="slug-index" src="https://i.imgur.com/b9Iq9f8.png"/>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column-reverse',
              gap: '50px'
            }}>
            {logsJSX}
          </ul>
        </div>
      </div>
    </>
  )
}
export default IndexAllLog
