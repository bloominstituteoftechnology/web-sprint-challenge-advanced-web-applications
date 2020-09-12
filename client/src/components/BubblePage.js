import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWIthAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

    const getData=()=>{
      axiosWithAuth()
      .get("/api/colors")
      .then((res)=>{
        console.log("colorsList",res.data);
        setColorList(res.data);
      })
      .catch((err)=>{
        console.log("error in bubblepage",err);
      });
     
    };
    useEffect(()=>{
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
