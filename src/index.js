import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components";
import DataProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
