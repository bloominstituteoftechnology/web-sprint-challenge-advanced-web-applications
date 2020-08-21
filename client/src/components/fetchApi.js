import  axiosWithAuth  from '../utils/axiosWithAuth';

export async function fetchApi() {

    try {
        const res = await axiosWithAuth()
            .get('/api/colors');
        return res.data;
    }
    catch (err) {
        return console.log(err);
    }

}