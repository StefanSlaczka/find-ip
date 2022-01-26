import React from "react";
import ReactDOM from "react-dom";
//these 4 files are needed to improt bootstrap and fully work

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";



import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
