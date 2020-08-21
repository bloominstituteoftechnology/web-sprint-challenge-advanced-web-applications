import axiosWithAuth from "../utils/axiosWithAuth"

export const fetchColorsApi = () => {
    return axiosWithAuth
    .get(
        ("/api/colors")
    )
    .then(res => {
        console.log(res.data)
        return res
    })
    .catch(err => {
        console.error("api error")
    })
}