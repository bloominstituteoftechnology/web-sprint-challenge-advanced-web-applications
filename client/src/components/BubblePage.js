import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [colorState, setColorState] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((response) => {
        setColorList(response.data);
        setColorState(false);
      })
      .catch((errors) => console.log(errors));
  }, [colorState]);

  return (
    <>
      <ColorList
        data-testid="bubbles"
        colors={colorList}
        updateColors={setColorList}
        setColorState={setColorState}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
