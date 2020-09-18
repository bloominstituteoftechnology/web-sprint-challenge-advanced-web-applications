import React, { useState, useEffect } from "react";
import { GetColors } from "../utils/GetColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    GetColors(setColorList);
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={GetColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
