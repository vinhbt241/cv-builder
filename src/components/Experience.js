import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      cityName: "",
      from: "",
      to: "",
      role: "",
      description: ""
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

    const { companyName, cityName, from, to, role, description } = this.state;

    console.log("form submitted");
    console.log(companyName, cityName, from, to, role, description);
  }

  render() {
    return(
      <div>
        <h1>Experience</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company:
            <input 
            name="companyName" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            City:
            <input 
            name="cityName" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            From:
            <input 
            name="from" 
            type="text"
            placeholder="YYYY"
            onChange={this.handleInputChange} />
          </label>

          <label>
            To:
            <input 
            name="to" 
            type="text"
            placeholder="YYYY"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Role:
            <input 
            name="role" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Description of chief responsibilities::
            <input 
            name="description" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export { Experience }
