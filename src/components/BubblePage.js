import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../helpers/axiosWithAuth'; 

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

useEffect(()=> {
  //get request 
  //use auth
  //set colorlist to state 
  //catch errors
axiosWithAuth()
.get('http://localhost:5000/api')
.then(res => {
  setColorList(res.data)
})
.catch(err => {
  console.log('useEffect', err)
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

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.