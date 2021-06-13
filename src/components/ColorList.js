import React, { useEffect, useState } from "react";
import fetchColorService from "../services/fetchColorService";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Color from "./Color";
import EditMenu from "./EditMenu";

const ColorList = (props) => {
	const { colors, editing, toggleEdit, saveEdit, updateColors } = props;
	const [addColor, setAddColor] = useState(false);
	const [editColor, setEditColor] = useState({ color: "", code: { hex: "" } });

	useEffect(() => {
		fetchColorService()
			.then((res) => {
				setEditColor(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(colors);

	// const handleDelete = (colorToDelete) => {
	//   colorToDelete.preventDefault()
	//   axiosWithAuth().delete('/colors/${form.id}')
	// };

	return (
		<div className="colors-wrap">
			<p>colors</p>
			<button onClick={() => setAddColor(!addColor)}>Add Color</button>
			{/* <button onClick={handleDelete}>Delete</button> */}
			<ul>
				{/* {colors.map(color => <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)} DONT NEED THIS ANYMORE! MIGHT BE MISSING A STEP...*/}
				{colors.map((color) => (
					<Color
						key={color.id}
						setEditColor={setEditColor}
						color={color}
						toggleEdit={toggleEdit}
						deleteColor={updateColors}
					/>
				))}
			</ul>

			{editing && (
				<EditMenu
					editColor={editColor}
					setEditColor={setEditColor}
					toggleEdit={toggleEdit}
					saveEdit={saveEdit}
				/>
			)}
		</div>
	);
};

export default ColorList;
