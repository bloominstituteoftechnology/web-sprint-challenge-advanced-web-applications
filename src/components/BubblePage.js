import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../api/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() =>{
    getBubbles()
  },[])

  const getBubbles = () =>{
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) =>{
      setColorList(res.data)
    })
    .catch((err) => console.log(err,"error getting bubbles"))
  }
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
