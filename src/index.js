import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";

import Tree from "./tree";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container.Provider>
        <Tree />
      </Container.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
