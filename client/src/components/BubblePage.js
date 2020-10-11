import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../api/axiosWithAuth';
import { useParams } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
useEffect(() => {
  axiosWithAuth()
  .get('/colors')
  .then((res) => {
      console.log(res)
      setColorList(res.data)
  })
  .catch((err) => {
      console.log(err)
  
  })
    console.log(colorList);
}, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
