import axiosWithAuth from "../helpers/axiosWithAuth";

const editColorService = (saveEditedColor) =>{
    const {id} = saveEditedColor;
    axiosWithAuth()
    .put(`api/colors/${id}`, saveEditedColor)
}

export default editColorService;