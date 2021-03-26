import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  //fetches colors on loading of page!
  useEffect(() => {
    axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then(res => {
      console.log('colors: ',res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  //By the way I hope you're having a great day!
  
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
