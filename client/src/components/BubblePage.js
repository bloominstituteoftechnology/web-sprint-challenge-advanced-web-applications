import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editing]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

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
