import AxiosWithAuth from './AxiosWithAuth';

export const FakeAPI=()=>{
    return(
        AxiosWithAuth()
        .get('/api/colors')
        .then(res=>
            {console.log(res)
            return res})
        .catch(err=>console.log(err))
    )
}