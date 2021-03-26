import React, { useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';

import {axiosWithAuth} from '../helpers/axiosWithAuth'
import EditMenu from './EditMenu';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const { id } = useParams;

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${id}`,colorToEdit)
    .then(res => {
      //return an array that has all the colors 
      //if color id === edit id then push the edit id
      console.log('SaveEdit: ', res.data)
      updateColors( colors.map(color => {
        if(color.id !== res.data.id){
          return color
        }
        else{return res.data}
      }))
      setEditing(false)
      console.log(colors)
    })
    .catch(err => {
      console.log(err)
    })
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${id}`)
    .then(res => {
      console.log('del: ', Number(id))
      //filters out only the color that was deleted
      updateColors(colors.filter(newColor => newColor.id !== color.id))
    })
    .catch(err => {
      console.log(err)
    })

  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
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
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.