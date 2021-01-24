import React, { useState } from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const initialNewColor = {
  color: "",
  code: { hex: "" },
  id: Date.now(),
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(false);
  const [colorToAdd, setColorToAdd] = useState(initialNewColor);

  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const addColor = () => {
    setNewColor(true);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(window.location.reload());
  };

  const saveColor = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/colors/`, colorToAdd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(window.location.reload());
  };

  const deleteColor = (color) => {
    // make a delete request to delete this color
    // color.preventDefault();
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then((res) => {
        console.log(res);
        // history.pushState("/");
      })
      .catch((err) => {
        console.log("Error delet is: ", err);
      })
      .finally(window.location.reload());
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
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
        <button className="addColor" onClick={addColor}>
          Add A New Color
        </button>
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={(e) =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={(e) =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value },
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
      {newColor && (
        <form onSubmit={saveColor}>
          <legend>Add New Color</legend>
          <label>
            color name:
            <input
              onChange={(e) =>
                setColorToAdd({ ...colorToAdd, color: e.target.value })
              }
              value={colorToAdd.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={(e) =>
                setColorToAdd({
                  ...colorToAdd,
                  code: { hex: e.target.value },
                })
              }
              value={colorToAdd.code.hex}
            />
          </label>
          <div>
            <button type="submit">Save</button>
            <button onClick={() => newColor(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ColorList;