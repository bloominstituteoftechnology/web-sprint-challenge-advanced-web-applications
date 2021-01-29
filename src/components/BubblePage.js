import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth';
import { fetchColorList } from '../fetchData/fetchColorData'
import BubblesForm from '../components/BubblesForm'


const BubblePage = () => {

  const [colorList, setColorList] = useState([]);

  const getListData = () => {
    fetchColorList()
      .then((req => {
        setColorList(req.data);
      }))
      .catch(err => {
        console.log(err);
      })
  }

  const postColor = (color) => {
    axiosWithAuth()
      .post('/colors', color)
      .then(req => {
        setColorList(req.data)
      })
      .catch(err => {
        console.log(err);
    })
  }

  useEffect(() => {
    getListData()
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColorList={getListData} />
      <Bubbles colors={colorList} />
      <BubblesForm postColor={postColor}></BubblesForm>
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
