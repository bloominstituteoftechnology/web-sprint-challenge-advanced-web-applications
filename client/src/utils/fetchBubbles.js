import axios from "axios";

export const fetchBubbles = () => {
  return axios
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
