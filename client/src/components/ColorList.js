import React, { useState } from "react";
import axios from "axios";
import { axiosAuth } from "../components/utils/axiosAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [add, setAdd] = useState(false)

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    editing ?
      axiosAuth().put(`/colors/${colorToEdit.id}`, colorToEdit)
        .then(res => {
          console.log(res)
          updateColors(colors.map(col => col.id === colorToEdit.id ? colorToEdit : col))
          setEditing(false)
        })
      :
      axiosAuth().post(`/colors`, colorToEdit)
        .then(res => {
          updateColors([...colors, colorToEdit])
          setColorToEdit(initialColor)
          setAdd(false)
        })
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosAuth().delete(`/colors/${color.id}`)
      .then(res => {
        console.log(res)
        updateColors(colors.filter(col => col.id !== color.id))
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
      {(editing || add) && (
        <form onSubmit={saveEdit}>
          <legend>{editing ? 'edit' : 'add'} color</legend>
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
            <button onClick={() => { setEditing(false); setAdd(false) }}>cancel</button>
          </div>
        </form>
      )}
      {!add && <button onClick={e => {
        setAdd(true)
        setColorToEdit(initialColor)
      }}>Add Color</button>}
      <div className="spacer" />
      {/* stretch - build another form here to add a color 
      */}

    </div>
  );
};

export default ColorList;