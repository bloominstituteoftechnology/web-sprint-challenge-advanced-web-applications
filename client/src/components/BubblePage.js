import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchAPI } from '../utils/fetchAPI' 

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchAPI()
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, []); 

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
