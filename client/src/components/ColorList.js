import React, { useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import Axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, getC }) => {
  console.log(colors);
  

  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);


  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  
  };
  console.log(colorToEdit)
  const saveEdit = e => {
    e.preventDefault()
    axiosWithAuth()
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
        const newcolor = colors.map(color => {
            if (color.id === res.id){
                return res.data
            }
            else {
                return color
            }
          })
          updateColors(newcolor)
          getC()
        })
    .catch(error => {
      console.log(error)
    })
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    console.log(color.id)
    axiosWithAuth()
    .delete(`/api/colors/${color.id}`)
    .then(res => {
      const newColors = colors.filter(item => {
        return item.id !== res.data
      })
      updateColors(newColors)
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="colors-wrap" >
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)} data-testid = 'color-list'>
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
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
