import React, { useState, useEffect } from "react";
// import axios from "axios";
import {axiosWithAuth} from './axiosWithAuth'


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {authColors} from './authColors';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  const getColors=()=>{
    console.log("Updating...");
    authColors()
      .then(res=>{
        setColorList(res.data);
        console.log('Color list successful');
      })
      .catch(err=>{
        console.log("Error getting colors: ", err)
        return err;
      });

  }


  // const getColors=()=>{
  //   console.log("Updating...");
  //   axiosWithAuth()
  //     .get('http://localhost:5000/api/colors')
  //     .then(res=>{
  //       setColorList(res.data);
  //       console.log('Color list successful');
  //     })
  //     .catch(err=>{
  //       console.log("Error getting colors: ", err)
  //     })
  // }
  useEffect(()=>{
    console.log("Loading colors...");
    getColors();
  },[]);
  return (
    <>
      <ColorList 
        colors={colorList} 
        // updateColors={setColorList} 
        updateColors={getColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
