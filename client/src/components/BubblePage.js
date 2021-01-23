import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get('api/colors')
    .then((res)=> {
      setColorList(res.data);
    })
    .catch((err) => console.log(err));
  })

  return (
    <>
      <div className="App">
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
    </>
  );
};

export default BubblePage;