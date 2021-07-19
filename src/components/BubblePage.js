import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import {axiosWithAuth} from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService()
        .then( res => setColors( res.data ) )
        .catch( err => console.log(err) )
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = editColor => {
    return colors.map(color => {
      if ( color.id === editColor.id ) {
        axiosWithAuth()
            .put(`/colors/${editColor.id}`, editColor)
            .then( res => {
                setColors( colors.map( color => {
                  if ( color.id === Number( res.data.id ) ) {
                    return res.data
                  } else {
                    return color
                  }
                }))
                setEditing(false)
                }
            )
            .catch( err => console.log(err) )
      } else {
        return color
      }
    })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
        .then( res => {
            setColors( colors.filter( color => Number( color.id ) != Number( res.data )))
        })
        .catch( err => console.log(err) )
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
