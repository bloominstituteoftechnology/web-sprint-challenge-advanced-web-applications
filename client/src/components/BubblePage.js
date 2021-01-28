import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchBubbles } from "./fetchBubbles";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    fetchBubbles()
      .then(res => {
        // res.data
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
