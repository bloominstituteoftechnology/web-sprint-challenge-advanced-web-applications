import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  // ??? Did I put this useEffect in the correct place???
  useEffect(() => {
    fetchColorService()
    .then(res => {
      console.log(res)
    })
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (e) => {
    // editColor
    e.preventDefault();
    axiosWithAuth().put(`http://localhost:5000/api/colors/:id`).then(res => {
      console.log(res)
    })
  };

  const deleteColor = (e) => {
    // colorToDelete
    e.preventDefault();
    axiosWithAuth().delete(`http://localhost:5000/api/colors/123`).then(res => {
      console.log(res)
    })
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
