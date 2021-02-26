import React, { useEffect, useState } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosWithAuth } from "../Axios/AxiosWithAuth";


const BubblePage = (props) => {
	const [colorList, setColorList] = useState([]);
    
  useEffect(() => {

    const getBubbles = () => {
      axiosWithAuth()
        .get("/colors")
        .then((res) => {
          console.log(res.data)
          setColorList(res.data)
        })
        .catch((error) => console.log(error));
    };
    getBubbles();
  
  }, []);
  


	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
