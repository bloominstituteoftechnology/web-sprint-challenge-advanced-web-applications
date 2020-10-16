import React, { useState, useEffect } from "react";
import axios from "axios";
import Bubbles from './Bubbles'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import ColorList from "./ColorList";
import { useParams } from 'react-router-dom'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const params = useParams()
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
const getData = () => {
  axiosWithAuth()
  .get('/colors')
  .then(res => {
    console.log('get')
    console.log(res.data)
    setColorList(res.data)
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  getData(params.id)
}, [params.id])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
