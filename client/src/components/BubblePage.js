import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  const getItems = () => {
    axiosWithAuth()
        .get('/api/colors')
        .then(result => {
          setColorList(result.data)
        })
        .catch(error => console.log(error));
  };

useEffect(() => {
    getItems();
  }, []);
 

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getItems={getItems} />
      <Bubbles colors={colorList} data-testid="bubbles"/>
    </>
  );
};

export default BubblePage;
