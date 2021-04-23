import React, { useState } from "react"
import EditMenu from "./EditMenu"
import Color from "./Color"
import axios from 'axios';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, props }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`,colorToEdit)
    .then((res) =>{
      setEditing(false);
      updateColors(
        colors.map(color =>{
          return color.id === colorToEdit.id ? res.data :color;
        })
      )
    })


  };

  const deleteColor = color => {
    axios
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then((res) =>{
      updateColors(
        colors.filter((colorItem) =>{
          return colorItem.id !== color.id
        })
      )
    })
    .catch((err) =>{
      console.log(err.message, "deleteColor error")
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
};

export default ColorList;
