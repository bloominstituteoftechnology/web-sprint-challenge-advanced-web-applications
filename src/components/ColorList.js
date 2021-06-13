import React, { useEffect, useState } from "react";
import { fetchColors } from "../helpers/fetchColors";

import Color from './Color';
import EditMenu from './EditMenu';

const ColorList = (props) => {
  const { colors, editing, toggleEdit, saveEdit, deleteColor } = props;
  const [ editColor, setEditColor] = useState({ color: "", code: { hex: "" }});

  useEffect(() => {
    fetchColors()
    .then(res => {
      setEditColor(res.data)
    })
    .catch((err) => console.log(err));
  }, []);
  console.log(colors);

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {/* {colors.map(color => <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)} */}
      </ul>
      
      {editing && <EditMenu editColor={editColor} setEditColor={setEditColor} toggleEdit={toggleEdit} saveEdit={saveEdit}/>}
    </div>
  );
};

export default ColorList;