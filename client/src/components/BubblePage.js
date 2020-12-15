import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../api/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    let auth = axiosWithAuth();
    auth
      .get("/colors")
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => {
        setRefresh(false);
      }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
