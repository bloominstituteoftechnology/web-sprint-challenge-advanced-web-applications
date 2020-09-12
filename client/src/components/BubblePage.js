import React, { useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = ({ colorList, setColorList }) => {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then((res) => {
        console.log('axiosWithAuth RESPONSE: ', res);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log('axiosWithAuth ERROR: ', err);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
