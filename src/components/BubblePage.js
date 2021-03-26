import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth.js'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    //Task List:
    //1. Make an axios call to retrieve all color data and push to state on mounting.
    axiosWithAuth().get('/colors')
    .then((res)=>{
        setColorList(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};


export default BubblePage;