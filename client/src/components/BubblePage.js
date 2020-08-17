import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosAuth from '../utils/axiosAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [trigger, setTrigger] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosAuth()
      .get('/colors')
      .then(res=> setColorList(res.data),setTrigger(false))
      .catch(err=> console.log(err))

  },[trigger])

  return (
    <>
    <h1>BuBBLe pAGe</h1>
      <ColorList colors={colorList} updateColors={setColorList} setTrigger={setTrigger} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
