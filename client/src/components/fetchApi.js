import { axiosWithAuth } from './axiosWithAuth'

export function fetchApi(){
    return (
    axiosWithAuth()
    .get('/api/colors')
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((err) => console.dir(err))
    )
}