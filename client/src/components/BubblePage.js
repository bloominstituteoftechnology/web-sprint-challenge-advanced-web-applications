import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  componentDidMount() {
  this.fetchColors(this.state.colorList);
  console.log("App: Component is mounted.");
  }

  fetchColors = () => {
    axios
    .get(`/api/colors`)
    .then((res) => {
     console.log(res);
     this.setState({
      colorList: res.data
     });
     
   })
   .catch((err) => console.log("error: ", err));
}

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
