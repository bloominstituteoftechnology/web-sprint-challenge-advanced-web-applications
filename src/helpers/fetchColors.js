import { axiosWithAuth } from './axiosWithAuth';

export const fetchColors = () => {

    return axiosWithAuth()
        .get('/colors')
        .then((res) => res)
        .catch((err) => err);
};