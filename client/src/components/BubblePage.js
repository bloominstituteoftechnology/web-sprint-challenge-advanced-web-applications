import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { fetchColorsApi } from '../api/fetchColorsApi'


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => {
    console.log("step one")
    fetchColorsApi()
    .then(res => {
      console.log("step two")
      setColorList(res.data)
    })
    .catch(err => {
      console.error("Failure from inside the get request")
    })
  }

  useEffect(() => {
    getColors()
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
