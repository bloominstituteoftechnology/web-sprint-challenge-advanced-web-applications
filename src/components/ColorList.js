import React, { useState} from "react";
import EditMenu from './EditMenu';
import {axiosWithAuth} from '../helpers/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, setColorList }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      setColorList(
        colors.map((color) => {
          if (color.id === res.data.id) {
            return res.data;
          } else {
            return color;
          }
        })
      );
    // go somewhere else
    })
    .catch(err => {
      console.log('error from saveEdit', err)
    })
  };

  const deleteColor = color => {
      axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${colorToEdit.id}`)
      .then(res => {
        setColorList(colors.filter((color => color.id !== res.data)));
        })
      .catch(err => {
        console.log('error from deleteColor', err)
      })
}
  //need to update your react application, filter
  // pass setter function where API call is, rebuild bubbles data
  // LOOK AT END OF WALK THROUGH from last night!

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li data-testid="color" key={color.color} onClick={() => editColor(color)}>
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