import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        console.log("bubblepage data", res.data);
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  }, [editing]);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        editing={editing}
        setEditing={setEditing}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
