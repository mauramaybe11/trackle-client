import apiUrl from '../apiConfig'
import axios from 'axios'

export const createLog = (data, user) => {
  console.log(data)
  return axios.post(apiUrl + '/logs/', data, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
