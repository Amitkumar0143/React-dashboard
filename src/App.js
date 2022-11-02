import "./App.css";
import React from "react";
import { Sidebar } from "./component/sidebar";
import { MainDash } from "./component/mainDash/mainDash";

function App() {
  return (
    <div className="App">
      <div className="appglass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
