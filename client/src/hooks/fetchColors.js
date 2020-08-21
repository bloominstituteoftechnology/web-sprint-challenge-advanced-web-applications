import {axiosWithAuth} from '../utils/axiosWithAuth'


export const fetchColors = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      return res
    })
    .catch(err => {
      console.warn("GET ERROR: "+ err)
    })
  }