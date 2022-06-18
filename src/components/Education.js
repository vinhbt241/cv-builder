import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      from: "",
      to: "",
      degree: "",
      grade: 0.0
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

    const { schoolName, from, to, degree, grade } = this.state;

    console.log("form submitted");
    console.log(schoolName, from, to, degree, grade)
  }

  render() {
    return(
      <div>
        <h1>Education</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of University or School:
            <input 
            name="schoolName" 
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
            Qualification/Degree:
            <input 
            name="degree" 
            type="text"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <label>
            Grade:
            <input 
            name="grade" 
            type="number"
            step="0.1"
            placeholder="Enter here"
            onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export { Education }
