import { axiosWithAuth } from "./axiosWithAuth";

export const getColors = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => console.log(`Getting colors - ${res}`))
    .catch((err) => console.log(`Getting colors error - ${err.response}`));
};
