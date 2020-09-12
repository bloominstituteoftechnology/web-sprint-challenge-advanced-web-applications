import { axiosWithAuth } from "../utils/axiosWithAuth";

export function FetchAPI() {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.dir(err));
}
