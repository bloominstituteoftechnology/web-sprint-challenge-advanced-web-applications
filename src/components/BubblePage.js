import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // editColorService(editColor)
    // setEditing(false)
    // let newTest = setColors(colors.filter(color => color.id !== editColor))
    // console.log(newTest)
    axiosWithAuth()
        .put(`/api/colors/${editColor.id}`, editColor)
            .then((res) => {
                console.log(res)
                setColors(colors, res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
  
  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/api/colors/${colorToDelete.id}`)
        .then((res) => {
          setColors(colors.filter(color => color.id !== colorToDelete.id))
        })
        .catch((err) => {
          console.log(err)
        })
  };

  // useEffect(() => {
  //   const newColors = async() => {
  //     const result = await fetchColorService()
  //     setColors(result)
  //   }
  //   newColors() 
  //   console.log("COLORS", newColors())
  // }, []);

  useEffect(() => {
    fetchColorService().then((res) => {
    setColors(res)
    })
  }, []);

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
//2. Complete saveEdit, deleteColor functions
