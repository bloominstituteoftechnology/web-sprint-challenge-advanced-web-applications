import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosAuth } from "./utils/axiosAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [newColor, setNewColor] = useState([false])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  useEffect(() => {
    axiosAuth()
    .get('colors')
    .then(res => {
      setColorList(res.data)
      setNewColor(false)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [newColor])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setNewColor={setNewColor}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
