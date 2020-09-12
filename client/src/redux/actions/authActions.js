import * as actions from './types'
import axios from 'axios'

export const login = (data) => {
  return {
    type: actions.LOGIN_SUCCESS,
    data,
  }
}

export const loginError = (error) => {
  return {
    type: actions.LOGIN_FAILED,
    error,
  }
}

export const logout = () => {
  return {
    type: actions.LOGOUT,
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logout())
    localStorage.removeItem('token')
  }
}

export const getLoginToken = (data, props) => {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/api/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        dispatch(login(res.data.payload))
        props.push('/')
      })
      .catch((error) => dispatch(loginError(error.message)))
  }
}
