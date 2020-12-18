import React, { useState, useEffect } from "react";
import axios from "axios";

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

  componentDidMount() {
    this.setState({
      ...this.state,
      isLoading: true
    })
    axios
      .get(`http://localhost:5000/api/colors`, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
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
    console.log(this.state);
    return (
      <>
        <ColorList colors={this.state.colorList} updateColors={this.setState} />
        <Bubbles colors={this.state.colorList} />
      </>
    );
  }
};

export default BubblePage;
