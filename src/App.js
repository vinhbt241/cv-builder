import React from "react";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { General } from "./components/General";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
  
}

export default App;
