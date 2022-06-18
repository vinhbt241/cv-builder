import React from "react";
import { v4 as uuidv4 } from 'uuid';

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Name",
      email: "Email",
      phoneNumber: "Phone Number",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, phoneNumber } = this.state;
  }

  render() {
    return(
      <div id="general" className="container">
          <input 
          name="name" 
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange} />

          <div id="side-info">
            <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange} />
            <input
            name="phoneNumber"
            type="tel"
            placeholder="Phone number"
            onChange={this.handleInputChange} />
          </div>
      </div>
    );
  }
}

export { General }
