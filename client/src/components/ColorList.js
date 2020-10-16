import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { history, useHistory } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors, edit, updateEdit }) => {
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const history = useHistory();

  const editColor = (color) => {
    console.log("editing", color);
    updateEdit(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log(colorToEdit);
    axiosWithAuth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        console.log(res.data);
        updateColors([...colors, res.data]);
        updateEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const deleteColor = (color) => {
    console.log("delete", color);
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then((res) => {
        updateEdit(true);
        console.log(res);
        updateEdit(false);
      })
      .catch((err) => console.log(err));
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
      </ul>
      {edit && (
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
            <button onClick={() => updateEdit(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
