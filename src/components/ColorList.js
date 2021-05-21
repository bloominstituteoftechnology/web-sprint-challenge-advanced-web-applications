import React, { useState } from "react";
import axios from "axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios
    .get("http://localhost:5000/api/colors", formValues)
    .then((res) => {
      window.localStorage.setItem('token', res.data.payload);
      // push("/bubblepage");
    })
    .catch((err) => console.log(err.message));
};

  };

  const deleteColor = color => {
    axios.delete(`http://localhost:5000/api/colors/123}`)
		.then(res=>{
				setBubblePage(res.data);
		})
		.catch(err=>{
				console.log(err.response);
		})
	};
    
  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );


export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.