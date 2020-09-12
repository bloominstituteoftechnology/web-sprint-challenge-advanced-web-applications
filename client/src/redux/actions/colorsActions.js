import * as actions from '../actions/types'
import {apiAuth} from '../../utils/auth'

export const colorError = (error) => {
  return {
    type: actions.COLORS_FETCH_FAILED,
    error,
  }
}

export const deleteColor = (id) => {
  return {
    type: actions.COLORS_DELETE_SUCCESS,
    id,
  }
}

export const fetchColors = () => {
  return {
    type: actions.FETCHING_COLORS,
  }
}

export const fetchColorSuccess = (data) => {
  return {
    type: actions.COLORS_FETCH_SUCCESS,
    data,
  }
}

export const fetchColorApi = () => {
  return (dispatch) => {
    dispatch(fetchColors())
    apiAuth()
      .get('/colors')
      .then((res) => {
        dispatch(fetchColorSuccess(res.data))
      })
  }
}
