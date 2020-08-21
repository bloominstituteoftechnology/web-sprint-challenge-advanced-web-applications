import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth'; 

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .post('/api/colors')
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
