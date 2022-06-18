import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNumber: ""
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

    console.log("form submitted");
    console.log(name, email, phoneNumber);
  }

  render() {
    return(
      <div>
        <h1>General</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
            name="name" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Email:
            <input 
            name="email" 
            type="email"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Phone Number:
            <input 
            name="phoneNumber" 
            type="tel"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export { General }
