import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    axiosWithAuth()
        .get('/api/colors')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
};

export default fetchColorService;


// In `services/fetchColorServices.js`, build out fetchColorService function 
// to make a GET request to fetch the color data for your bubbles.