import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import axios from "axios";
import {axiosWithAuth} from './utils/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const { id } = useParams()
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  const getColorList = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getColorList();
  }, [colorList]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
