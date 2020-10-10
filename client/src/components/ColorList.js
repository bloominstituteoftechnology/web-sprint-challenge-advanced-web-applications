import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors }) => {
  console.log("colors from ColorList", colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const { id } = useParams();
  const { push } = useHistory();
  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, updateColors)
      .then((res) => {
        console.log("res from put", res);
        push(`/colors/${colors.id}`);
      })
      .catch((err) => {
        console.log("err from put", err);
      });
  };

  const deleteColor = (color) => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then((res) => {
        console.log("delete res", res);
      });
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
    </div>
  );
};

export default ColorList;
