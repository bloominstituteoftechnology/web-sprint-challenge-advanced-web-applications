import React, { useState } from "react";
import { axiosWithAuth } from "../Axios/AxiosWithAuth"
import EditMenu from "./EditMenu";


const initialColor = {
  color: "",
  code: { hex: "" },
};

export const ColorList = ({ colors, updateColors }) => {
  

  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);


  


  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`,colorToEdit )
      .then((res) => {
        console.log(res)
        const newState = colors.map(color =>{
          if (color.id ===res.data.id){
            return colorToEdit
          }else{
            return color
          }
        })
       updateColors(newState)
       setEditing(false)
        
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteColor = (color) => {
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then((res) => {
        console.log(res)
        const filteredColor = colors.filter(color =>Number(color.id) !==Number(res.data));
        updateColors(filteredColor)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul datatest-id="ul">
        {
          colors.map((color) => (
            <li  key={color.color} onClick={() => setColorToEdit(color)}>
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
      {/* {editing && ( */}
        <EditMenu
          colorToEdit={colorToEdit}
          saveEdit={saveEdit}
          setColorToEdit={setColorToEdit}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.