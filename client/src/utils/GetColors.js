import { axiosWithAuth } from "./axiosWithAuth";

export const GetColors = (setColorList) => {
  axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      // Set token in local storage
      console.log(res);
      setColorList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
