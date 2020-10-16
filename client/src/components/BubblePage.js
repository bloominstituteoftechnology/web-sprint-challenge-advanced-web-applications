import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from './axiosWithAuth'


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=>{
    console.log("Color list requested");
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res=>{
        setColorList(res.data);
        console.log('Color list successful');
      })
      .catch(err=>{
        console.log("Error getting colors: ", err)
      })
  },[]);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
