import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";
import editColorService from "../services/saveEditService";
import deleteColorService from "../services/deleteColorService";

const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  //1. When the component mounts, make an axios call to retrieve all color data and push to state.useEffect
  useEffect(()=>{
    axiosWithAuth()
    fetchColorService(setColors);
  },[editing]);//inserted "editing to prevent memory leak"

  const toggleEdit = (value) => {
    setEditing(value);
  };
  
//2. Complete toggleEdit, saveEdit, deleteColor and functions

  const saveEdit = (editColor) => {
    editColorService(editColor);
    fetchColorService(setColors);
    props.history.push('/bubbles');
    toggleEdit(false)
  };

  const deleteColor = (colorToDelete) => {
    console.log('colorToDelete Obj in BubblePage.js', colorToDelete);
    deleteColorService(colorToDelete.id);
    fetchColorService(setColors);
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
