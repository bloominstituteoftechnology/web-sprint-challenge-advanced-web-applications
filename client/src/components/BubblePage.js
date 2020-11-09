import React, { useState, useEffect } from "react";
// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./AxiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
 const fetchColors=()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res=>setColorList(res.data))
    .catch(err=>console.log(err))
 }

  useEffect(()=>{
    fetchColors();
  },[])
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={fetchColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
