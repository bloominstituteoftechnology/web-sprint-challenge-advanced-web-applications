import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchColors = () => {
    return axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log('BubblePage: useEffect: DT: ', res);

        return res;
      })
      .catch(err => err);
};

export const saveEditedColor = (color) => {
    return axiosWithAuth()
      .put(`/colors/${color.id}`, color)
      .then(res => res)
      .catch(err => err);
};

export const deleteAColor = (color) => {
    return axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => res)
      .catch(err => err);
};