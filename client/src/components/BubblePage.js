import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const[dependency, setDependency]= useState(false);
  
  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      console.log('from BP: get successful: res', res)
      setColorList(res.data)
      setDependency(false)
    })
    .catch(err => console.error('from BP: get failed: err', err.message))
  }, [dependency])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} dependency={dependency} setDependency={setDependency}/>
      <Bubbles colors={colorList} dependency={dependency} setDependency={setDependency}/>
    </>
  );
};

export default BubblePage;
