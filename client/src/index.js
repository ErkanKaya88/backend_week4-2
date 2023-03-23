import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import PostContextProvider from "../src/contexts/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);


reportWebVitals();
