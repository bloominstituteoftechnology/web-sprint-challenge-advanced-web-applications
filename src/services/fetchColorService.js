import { axiosWithAuth } from "../helpers/axiosWithAuth";

const fetchColorService = () => {
	return axiosWithAuth()
		.get("/colors")
		.then((res) => res)
		.catch((err) => err);
};

export default fetchColorService;
