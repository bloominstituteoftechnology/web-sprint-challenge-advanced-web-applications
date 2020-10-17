import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getC = () => {
      axiosWithAuth()
      .get(`/api/colors`)
        .then(res => {
          setColorList(res.data)
        })
        .catch(error => {
          console.log(error.res)
        })    
  }

  useEffect(() => {
    getC()
  },[])




  return (
    <>
      <ColorList colors={colorList} getC = {getC} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
