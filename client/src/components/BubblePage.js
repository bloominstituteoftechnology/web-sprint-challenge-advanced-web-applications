import React, { useState, useEffect } from "react";
import { AxiosCall } from "./AxiosCall";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddColor from "./AddColor";
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  /*  export class ServerData extends Component {
    state = {
      info: [],
     
    };
 */
  const getData = () => {
    AxiosCall()
      .get("/colors")
      .then((res) => {
        console.log(res.data);
        setColorList({
          info: res.data,
        });
      })

      .catch((err) => console.log({ err }));
  };

  // useEffect() {
  getData();
  // }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
