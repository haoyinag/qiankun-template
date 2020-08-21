/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, start } from "qiankun";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:1111",
    container: "#microContainer",
    activeRule: "/react",
  },
  {
    name: "vue app",
    // entry: { scripts: ["//localhost:7100/main.js"] },
    entry: "//localhost:2222",
    container: "#microContainer",
    activeRule: "/vue",
  },
]);
start();
