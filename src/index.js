import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import "react-toastify/dist/ReactToastify.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* <input
type="file"
name="file"
onChange={this.handleFileUpload}
/> */
