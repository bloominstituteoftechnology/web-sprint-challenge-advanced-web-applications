import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchColors = (url) => {
    return axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log('BubblePage: useEffect: DT: ', res);

        return res;
      })
      .catch(err => err);
};