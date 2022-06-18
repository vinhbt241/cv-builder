import React from "react";
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
      </div>
    );
  }
  
}

export default App;
