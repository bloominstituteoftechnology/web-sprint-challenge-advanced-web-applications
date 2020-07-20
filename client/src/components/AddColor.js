import React, { useState } from "react";

import { AxiosCall } from "./AxiosCall";

export const User = () => {
  const [color, setColor] = useState({
    color: "",
    code: { hex: "", id: "" },
  });

  const handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosCall()
      .post("/colors", color)
      .then((res) => {
        this.setColor([...color], res.data);
        console.log(res.data);
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            name="color"
            onChange={handleChange}
            value={color.color}
          />
        </label>
        <label>
          Code: in Hexadecimal
          <input
            type="text"
            name="hex"
            onChange={handleChange}
            value={color.code.hex}
          />
        </label>
        <label>
          id:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={color.code.id}
          />
        </label>
        <button type="submit">AddColor</button>
      </form>
    </>
  );
};

export default User;
