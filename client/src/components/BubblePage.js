import React, { useState, useEffect } from "react";

import { fetchColors } from '../api/getData';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    fetchColors()
      .then(res => {
        console.log('BubblePage: useEffect: DT: ', res);

        setColorList(res.data);
      })
      .catch(err => console.error('BubblePage: useEffect: DT: Error: ', err));
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
