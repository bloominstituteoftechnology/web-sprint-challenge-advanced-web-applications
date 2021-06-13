import React, { useEffect, useState } from "react";
import fetchColorService from '../services/fetchColorService';

import Color from './Color';
import EditMenu from './EditMenu';

const ColorList = (props) => {
  const { colors, editing, toggleEdit, saveEdit, deleteColor } = props;
  const [ editColor, setEditColor] = useState({ color: "", code: { hex: "" }});
  const [addColor, setAddColor] = useState(false);

  useEffect(() => {
    fetchColorService()
    .then(res => {
      setEditColor(res.data)
    })
    .catch((err) => console.log(err));
  }, []);
  console.log(colors);


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <button onClick={() => setAddColor(!addColor)}>Add Color</button>
      <ul>
        {colors.map(color => <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)}
      </ul>
      
      {editing && <EditMenu editColor={editColor} setEditColor={setEditColor} toggleEdit={toggleEdit} saveEdit={saveEdit}/>}
    </div>
  );
};

export default ColorList;