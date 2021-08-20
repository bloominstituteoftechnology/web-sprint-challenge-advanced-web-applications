import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (getColors) => {
    axiosWithAuth()
    .get(`/api/colors`)
    .then((res)=>{
        console.log('fetchColorsServices res:', res);
        getColors(res.data)
        console.log('this is the setColors res.data', res.data);
    })
    .catch(err => {
        console.log(err);
    })
    
}

export default fetchColorService;