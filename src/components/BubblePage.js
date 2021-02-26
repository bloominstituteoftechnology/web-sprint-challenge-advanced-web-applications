import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { fetchColors } from "./../utils/fetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    fetchColors().then((res) => {
      setColorList(res.data);
    });
    // axiosWithAuth()
    //   .get(`http://localhost:5000/api/colors`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setColorList(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

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
