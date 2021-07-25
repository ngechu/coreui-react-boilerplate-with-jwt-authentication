import { BASE_URL, CLIENT_ID, REACT_APP_USERNAME, REACT_APP_PASSWORD } from '../configs'
import axios from 'axios'
import formurlencoded from 'form-urlencoded'

//Login user
export const loginUser = async (data) => {
  return axios.post(`${BASE_URL}/api/v1/oauth/token/`, formurlencoded(data), {
    auth: {
      username: `${REACT_APP_USERNAME}`,
      password: `${REACT_APP_PASSWORD}`,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

//Register user

// Fetch user information

export const fetchUserInfo = () => {
  return axios.get(`${BASE_URL}/api/v1/users/current-user`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  })
}
