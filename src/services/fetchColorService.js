import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColors) => {
    axiosWithAuth()
    .get(`/api/colors`)
    .then((res)=>{
        // console.log('fetchColorsServices res:', res);
        setColors(res.data)
        // console.log('this is the setColors res.data', res.data);
    })
    .catch(err => {
        console.log(err);
    })
    
}

export default fetchColorService;
