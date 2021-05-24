
import React, { useState,useEffect} from "react";
 import { axiosWithAuth } from './utlis/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);


   useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then( res => {
        setColorList(res.data)
      })
      .catch( err => {
        console.log(err)
       })
   }, [])



  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      
<ul>
{colorList.map(event => (
<li key={event.color}></li> 
))}
</ul>


    </div>
  );
};

export default BubblePage;

//Task List:
// [!] When the component mounts, make an axios call to retrieve all color data
// [!] colors mustpush to state.
