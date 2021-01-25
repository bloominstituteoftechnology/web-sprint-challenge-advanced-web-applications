import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState(null);
  const [refresh, setRefresh] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    AxiosWithAuth().get("/colors")
    .then(res => {
      setColorList(res.data)})
    .catch(error => console.error(error));
  }, [refresh]);

  return (
    <>
    { colorList ?
    <>
      <ColorList colors={colorList} updateColors={setColorList} refresh={refresh} setRefresh={setRefresh} />
      <Bubbles colors={colorList} />
    </>
  : <h1>Loading...</h1>}
  </>
  );
};

export default BubblePage;
