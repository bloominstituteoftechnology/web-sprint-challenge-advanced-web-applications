import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

import App from "./App";
const { worker } = require("./mocks/browser");

worker.start();

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /> </Router>, rootElement);
