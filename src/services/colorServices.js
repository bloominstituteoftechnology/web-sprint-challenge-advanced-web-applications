import axiosWithAuth from '../helpers/axiosWithAuth';

export const editColorService = (id) => {
    return axiosWithAuth()
        .put(`/api/colors/${id}`, id)
            .then((res) => {
                console.log(res)
                return(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
}

export const deleteColorService = (id) => {
    return axiosWithAuth()
        .delete(`/api/colors/${id}`)
            .then((res) => {
                console.log(res)
                return(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
}