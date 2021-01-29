import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import EditMenu from "../components/EditMenu";

const initialColor = {
	color: "",
	code: { hex: "" },
};

const ColorList = ({ colors, updateColors }) => {
	const [editing, setEditing] = useState(false);
	const [colorToEdit, setColorToEdit] = useState(initialColor);
	//This id const is purely for aesthetics in the HTTP requests.
	const id = `${colorToEdit.id}`;

	const editColor = (color) => {
		setEditing(true);
		setColorToEdit(color);
	};

	const saveEdit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/colors/${id}`, colorToEdit)
			.then((res) => {
				updateColors(
					colors.map((color) => (color.id === res.data.id ? res.data : color))
				);
			})
			.catch((err) => console.log("ERROR: ", err));
	};

	const deleteColor = (color) => {
		const colorId = 0;
		axiosWithAuth()
			.delete(`/colors/${id}`)
			.then((res) => {
				const newColors = colors.filter(
					(color) => Number(color.id) !== Number(res.data)
				);
				updateColors(newColors);
			})
			.catch((err) => console.log("ERROR:", err));
	};

	return (
		<div className="colors-wrap">
			<p>colors</p>
			<ul>
				{colors.map((color) => (
					<li key={color.color} onClick={() => editColor(color)}>
						<span>
							<span
								className="delete"
								onClick={(e) => {
									e.stopPropagation();
									deleteColor(color);
								}}
							>
								x
							</span>{" "}
							{color.color}
						</span>
						<div
							className="color-box"
							style={{ backgroundColor: color.code.hex }}
						/>
					</li>
				))}
			</ul>
			{editing && (
				<EditMenu
					colorToEdit={colorToEdit}
					saveEdit={saveEdit}
					setColorToEdit={setColorToEdit}
					setEditing={setEditing}
				/>
			)}
		</div>
	);
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.
