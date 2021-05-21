import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import createAxiosClientWithAuth from './../helpers/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const axiosClient = createAxiosClientWithAuth();
    
    axiosClient
      .get("/colors")
      .then( res => {
          console.log(res)
          setColorList(res.data)   
      })
      .catch(err => console.log(err))
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
