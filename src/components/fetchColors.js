import {axiosWithAuth} from '../utils/axiosWithAuth'

export const fetchColors = () => {
  
    axiosWithAuth().get('/colors')
    .then((res) => {
      console.log(res);
        setColorList(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
};