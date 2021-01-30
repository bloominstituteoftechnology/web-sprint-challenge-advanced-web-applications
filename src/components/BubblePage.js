import React, { useEffect, useState } from "react";
import { fetchColors } from "../api/fetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchColors()
      .then(res => {
        console.log(res)
        setColorList(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);



  return (
    <>
      <ColorList colors={colorList} setColorList={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
