import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getColors();
  }, [editing]);

  const getColors = () => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        edit={editing}
        updateEdit={setEditing}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
