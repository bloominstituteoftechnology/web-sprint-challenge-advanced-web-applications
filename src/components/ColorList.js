import React, { useState } from "react";
import  {axiosWithAuth}  from './utlis/axiosWithAuth'
import Color from "./Color"
import EditMenu from "./EditMenu"
import axios from "axios"

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

   const saveEdit = (urlBase , updatedData) => {


   axios
   .put(`http://localhost:5000/api/${urlBase}colors/:id`,updatedData)
   .then(response => console.log(response))
   .catch(err => console.log(err));

   };

   const deleteColor = color => {

    axiosWithAuth()
    .delete(`/color/${color}`)
    .then( res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err)
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

// Task List:
// 1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
// 2. Complete the deleteColor functions by making a delete request for deleting colors.