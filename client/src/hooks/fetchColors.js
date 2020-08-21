import {axiosWithAuth} from '../utils/axiosWithAuth'


export const fetchColors = () => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.warn("GET ERROR: "+ err)
    })
  }