import * as actions from '../actions/types'
import {apiAuth} from '../../utils/auth'

export const colorError = (error) => {
  return {
    type: actions.COLORS_FETCH_FAILED,
    error,
  }
}
export const toggleFavoriteColor = (id) => {
  return {
    type: actions.ADD_FAVORITE_TOGGLE,
    id,
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

export const changeColorSuccess = (data) => {
  return {
    type: actions.COLORS_UPDATE_SUCCESS,
    data,
  }
}

export const addNewColor = (data) => {
  return {
    type: actions.ADD_NEW_COLOR,
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

export const deleteColorApi = (id) => {
  return (dispatch) => {
    apiAuth()
      .delete(`/colors/${id}`)
      .then((res) => {
        console.log(res)
        dispatch(deleteColor(id))
      })
  }
}

export const updateColorApi = (data) => {
  return (dispatch) => {
    apiAuth()
      .put(`/colors/${data.id}`, data)
      .then((res) => {
        console.log(res)
        dispatch(changeColorSuccess(res.data))
      })
  }
}

export const addNewColorApi = (data) => {
  return (dispatch) => {
    apiAuth()
      .post(`/colors/`, data)
      .then((res) => {
        console.log(res)
        dispatch(addNewColor(res.data))
      })
  }
}
