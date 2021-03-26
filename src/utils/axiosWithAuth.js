import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://school-in-the-cloud-tt16.herokuapp.com/",
		headers: {
			Authorization: token,
		},
	});
};

export default axiosWithAuth