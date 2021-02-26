import { axiosWithAuth } from "./axiosWithAuth";

export const fetchColors = () => {
  axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
