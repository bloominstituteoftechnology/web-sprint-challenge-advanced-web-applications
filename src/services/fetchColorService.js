import { axiosWithAuth } from '../helpers/axiosWithAuth';

export const fetchColorService = () => {
    return axiosWithAuth()
        .get('/colors')
        .then( res => res )
        .catch( err => err )
}