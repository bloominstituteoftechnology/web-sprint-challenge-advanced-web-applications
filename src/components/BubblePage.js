import React, { useEffect, useState } from "react";
import axios from 'axios';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { Link } from "react-router-dom";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() =>{
    getBubbles()
  },[])

  const getBubbles = () =>{
    axios
    .get("http://localhost:5000/api/colors")
    .then((res) =>{
      setColorList(res.data)
    })
    .catch((err) => console.log(err,"error getting bubbles"))
  }
  return (
    <>



      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <div className="logout"><Link to="/"> Logout</Link></div>
    </>
  );
};
export default BubblePage;
