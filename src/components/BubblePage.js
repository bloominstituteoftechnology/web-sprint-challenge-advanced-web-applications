import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const getData = () => {
    axiosWithAuth().get('/api/Bubbles')
        .then((res) => {
          setColorList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  },[]);

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
