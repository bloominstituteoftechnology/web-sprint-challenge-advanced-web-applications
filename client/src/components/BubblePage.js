import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

class BubblePage extends React.Component {

  // const [colorList, setColorList] = useState([]);

  state = {
    error: '',
    isLoading: false,
    colorList: []
  }
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  setColorList = updatedColors => {
    this.setState({
      ...this.state,
      colorList: updatedColors
    })
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isLoading: true
    })
    axiosWithAuth()
      .get(`/colors`)
      .then(res => {
        this.setState({
          ...this.state,
          colorList: res.data,
          isLoading: false,
          error: ''
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          isLoading: false,
          error: `${err.response.status} ${err.response.statusText}`
        })
      })
  }

  render() {
    return (
      <>
        <ColorList colors={this.state.colorList} updateColors={this.setColorList} />
        <Bubbles colors={this.state.colorList} />
      </>
    );
  }
};

export default BubblePage;
