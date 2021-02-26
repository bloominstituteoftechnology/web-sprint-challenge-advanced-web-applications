import { axiosWithAuth } from "../Axios/AxiosWithAuth"


 const getBubbles = () => {
   return axiosWithAuth()
      .get("/colors")
      .then((res) => {
        return res
      })
  };

export default getBubbles
