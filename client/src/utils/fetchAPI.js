import { axiosWithAuth } from './axiosWithAuth'; 

export function fetchAPI() {
    return axiosWithAuth()
    .post('/api/colors')
      .then(res => {
        return res
      })
      .catch(err => console.log(err.message))
}

