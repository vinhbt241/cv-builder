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

    console.log("form submitted");
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);
  }

  render() {
    return(
      <div id="general">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
            name="name" 
            type="text"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Email:
            <input 
            name="email" 
            type="email"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Phone Number:
            <input 
            name="phoneNumber" 
            type="tel"
            onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Next Page" />
        </form>
      </div>
    );
  }
}

export { General }
