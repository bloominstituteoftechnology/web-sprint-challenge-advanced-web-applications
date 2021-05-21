import React, { useEffect, useState } from "react";
import { fetchBubbles } from "../helpers/fetchBubbles";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log('in bubblepage')


  useEffect(() =>{
    fetchBubbles()
    .then(res => {
      console.log(res)
      setColorList(res.data)
      
    })
    .catch( err => console.log(err))
  }, [])

  return (
    <div className="container">

      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
