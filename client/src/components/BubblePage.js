import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../util/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  let colors = colorList;
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=>{getColors()},[]);


  const getColors = () => {
      axiosWithAuth()
        .get("/api/colors")
        .then(res => {
          // console.log("GET Response: ", res);
          setColorList(res.data);
        })
        .catch(err => console.log(err))
  }
  

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors = {getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
