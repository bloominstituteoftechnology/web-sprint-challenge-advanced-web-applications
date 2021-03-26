import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/colors")

			.catch((err) => console.log("this is the prob", err));
	}, []);
	console.log("colors", colorList);

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
