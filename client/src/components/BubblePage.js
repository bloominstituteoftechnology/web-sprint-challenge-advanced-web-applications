import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([{
    color: "",
    code: {
    hex: ""
  },
    id: ""}] );

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get("api/colors")
    .then((res) => {
      setColorList(res.data)
      console.log("Color API Working", res)
    })
    .catch((err) => {
      console.log("BubblePage Get Axios Not Working", err)
    })
  },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
