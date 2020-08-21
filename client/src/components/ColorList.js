import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { fetchApi } from './fetchApi';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors[4]);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  // const [ form, setForm ] = useState({ color: "", hex: "", id: ""})

    useEffect(() => {
    fetchApi().then(res => {
      setColorToEdit(res.data)
  
    });
  }, []);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  
  

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    
  let activeColor = colors.filter(color => color.id === colorToEdit.id);
  console.log(activeColor[0]);
    
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${activeColor[0].id}`, colorToEdit)
      .then(res => {
        colors = colors.filter(color => color.id !== res.data.id);
        updateColors([...colors, res.data]);
        setEditing(false);
      })
      .catch(err=> console.log(err))
  };


  const deleteColor = color => {
    // make a delete request to delete this color
    
      axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(res => {
          updateColors(colors.filter(e => e.id !== color.id));
        })
        
      .catch(err => console.log(err));
  
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
                  X
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
            <button type="submit">Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
    );
  };


export default ColorList;
