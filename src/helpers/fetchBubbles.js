import {axiosWithAuth} from '../helpers/axiosWithAuth'

export const fetchBubbles = () => {
    return axiosWithAuth()
    .get('/bubblePage')
    .then(res => res)
    .catch (err => err)
  }