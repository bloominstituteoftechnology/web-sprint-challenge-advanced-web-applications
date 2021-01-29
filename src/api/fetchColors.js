import axiosWithAuth from '../helpers/axiosWithAuth';

export const fetchColors = () =>{

        axiosWithAuth().get('/colors')
          .then((res) =>{
              console.log(res)
            return res;
          })
          .catch((err) =>{
              return err
          })
}