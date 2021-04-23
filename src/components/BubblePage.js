import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from "../helpers/fetchColors";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);

	useEffect(() => {
		fetchColors()
			.then((res) => {
				console.log(res.data);
				setColorList(res.data);
			})
			.catch((err) => {
				console.log("Error fetching", err);
			});
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
