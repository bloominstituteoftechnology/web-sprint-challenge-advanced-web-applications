import React, { useState } from "react";
import { AxiosCall } from "./AxiosCall";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddColor from "./AddColor";
const BubblePage = () => {
  const [colorList, setColorList] = useState({ color: [] });
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  AxiosCall()
    .get("/colors")
    .then((res) => {
      console.log(res.data);
      setColorList(...colorList, {
        color: res.data,
      });
    })

    .catch((err) => console.log({ err }));

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <AddColor />
    </>
  );
};

export default BubblePage;
