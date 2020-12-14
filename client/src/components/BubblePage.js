import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth"
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {


  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(true)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => setColorList(res.data))
    .catch(err => console.log(err.response))
    .finally(() => setRefresh(false))
  }

  useEffect(() => {
    getColors();
  }, [refresh])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors} setRefresh={setRefresh}/>
      <Bubbles colors={colorList}/>
    </>
  );
};

export default BubblePage;
