import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from './utils/axiosWithAuth'
import { useParams, useHistory} from 'react-router-dom'
//import AddColor from './AddColor'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const { id } = useParams()
  const history = useHistory()

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      setEditing(false);
      updateColors(
        colors.map(color => {
          return color.id === colorToEdit.id ? res.data : color;
        })
      )
    })
    .catch(err => console.log(err));
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    //Put req API: `/api/colors/{id}
  };

  const deleteColor = (color) => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      updateColors(colors.filter(color => color.id !== res.data))
    })
    .catch(err => console.log(err))
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
      {/* <AddColor /> */}
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
