import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./index.css"

// define component to be placed in div with id root
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'))