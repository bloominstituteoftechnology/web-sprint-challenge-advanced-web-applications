import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);

	const getColor = () => {
		axiosWithAuth()
			.get("/colors")
			.then((res) => {
				setColorList(res.data);
			})
			.catch((err) => console.log("ERROR: ", err));
	};

	useEffect(() => {
		getColor();
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
