import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {
    axiosWithAuth()
    .get("/api/colors")
    .then((response) => {
      setColorList(response.data)
    })
    .catch((errors) => {
      console.log(errors);
    })
  }



  return (
    <>
    <div>
      <ul>
        {colorList.map((color, i) => (
          <li data-testid="bubbles" key={i} value={color}>{colorList.color}</li>
        ))}
      </ul>
    </div>
    <ColorList colors={colorList} updateColors={setColorList} />
    <Bubbles colors={colorList} />
  </>
);
};

export default BubblePage;
