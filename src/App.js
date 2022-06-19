import React from "react";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { General } from "./components/General";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div id="app">
        <h1>CV Builder</h1>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
  
}

export default App;
