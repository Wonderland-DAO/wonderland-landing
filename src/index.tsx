import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Snowflakes from "magic-snowflakes";

const snowflakes = new Snowflakes({
    color: "#fff", // Default: "#5ECDEF"
    count: 30, // 100 snowflakes. Default: 50
    rotation: true, // Default: true
    speed: 0.8, // The property affects the speed of falling. Default: 1
    wind: true, // Without wind. Default: true
    zIndex: 1, // Default: 9999
});

snowflakes.start();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
