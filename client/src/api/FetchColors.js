import axiosWithAuth from "../utils/axiosWithAuth";

export const FetchColors = () => {
  return axiosWithAuth()
    .get("/colors")
    .then(res => res)
    .catch(err => err);
};