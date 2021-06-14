import React, { useEffect, useState } from "react";
import axios from 'axios'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';


const BubblePage = () => {
  
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

 useEffect(() => {

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {

    const editSave = {
      method: 'PUT',
      headers: { 
        'Authorization': 'token',
}
  };
  fetch(`http://localhost:5000/api/colors/:id`, editColor)
      .then(res => res.json())
      .then(data => setColors(data.id));
  };

  const deleteColor = (colorToDelete) => {
   const colorDelete = {
      method: 'DELETE',
      headers: { 
          'Authorization': 'token',
}};
      fetch(`http://localhost:5000/api/colors/123`, colorToDelete)
        .then(() => setEditing('Delete successful'));
}

  return ( 
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );}, []);
};
export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
