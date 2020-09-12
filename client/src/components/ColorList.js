import React, { useState, useEffect } from "react";
// import axios from "axios";
import { axiosWithAuth } from './utils/axiosWithAuth';


const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(initialColor);

  useEffect(() => {}, [colors]);
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const addSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('api/colors', newColor)
    .then((res) => {
      updateColors(res.data);
    })
    .catch((err) => console.log(err))
    .finally(setNewColor(initialColor));
  }

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`api/colors/${colorToEdit.id}`, colorToEdit)
    .then((res) => {
      setEditing(false);
      updateColors(
        colors.map((colorItem) => {
          if (colorItem.id === colorToEdit.id){
            return colorToEdit;
          } else {
            return colorItem;
          }
        })
      );
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    .delete(`api/colors/${color.id}`)
    .then((res) => {
      updateColors(
        colors.filter((colorItem) => {
          return colorItem.id !== color.id;
        })
      )
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li data-testid = 'color' key={color.color} onClick={() => editColor(color)}>
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

      <h2>Add New Color</h2>
      <form onSubmit = {addSubmit}>
        <label>
          color name:
          <input
          onChange = {(e) => 
          setNewColor({ ...newColor, color: e.target.value})
        }
        value = {newColor.color}
          />
        </label>
        <label>
          hex code:
          <input
          onChange = {(e) => 
          setNewColor({
            ...newColor,
            code: {hex: e.target.value},
          })
        }
        value = {newColor.code.hex}
          />
        </label>
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  );
};

export default ColorList;
