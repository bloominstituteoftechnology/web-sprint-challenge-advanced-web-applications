import React, { useState, useEffect } from "react";
import { fetchApi } from './fetchApi'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
    useEffect(() => {
    fetchApi().then((res) => {
      console.log(res)
      setColorList(res.data)
    })
    .catch((err) => {
      console.dir(err)
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
