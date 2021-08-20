import axiosWithAuth from "../helpers/axiosWithAuth";

const deleteColorService = (colorToDeleteID) =>{
    console.log('colorToDeleteID is:', colorToDeleteID);
    axiosWithAuth()
    .delete(`api/colors/${colorToDeleteID}`)
}

export default deleteColorService;