import { axiosWithAuth } from '../helpers/axiosWithAuth';

export const fetchBubbles = () => {
  return axiosWithAuth()
  .get('http://localhost:5000/api')
  .then(res => {
      return res
  })
  .catch(err => {
    console.log('useEffect', err)
    return err; 
  });
};
