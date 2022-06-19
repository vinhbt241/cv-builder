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
      <div>
        <h1>CV Builder</h1>
        <div id="app">
          <General />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
  
}

export default App;
