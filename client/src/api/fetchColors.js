import axios from 'axios';

const fetchColors = () => {
    axios
      .get('http://localhost:5000/api/colors')
      .then((res) => {
        setColorList(res.data)
        console.log('here is the response', res.data)

      })
      .catch((err) => console.log(err))
};

export default fetchColors;