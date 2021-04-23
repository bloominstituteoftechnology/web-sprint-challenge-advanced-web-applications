import { axiosWithAuth } from "./axiosWithAuth";
import axios from "axios";

export const fetchColors = () => {
	return axiosWithAuth()
		.get("http://localhost:5000/api/colors")
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.log("Error fetching colors", err);
			return err;
		});
};
