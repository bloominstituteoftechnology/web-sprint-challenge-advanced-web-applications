import axiosWithAuth from './axiosWithAuth';

const fetchApi = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then((res) => {
        return res
    })
    .catch((err) => console.log(err))
}

export default fetchApi;