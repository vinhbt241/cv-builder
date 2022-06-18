import React from "react";
import { v4 as uuidv4 } from 'uuid';

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      from: "",
      to: "",
      degree: "",
      grade: 0.0,
      formOpened: false,
      infoSaved: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.removeInfo = this.removeInfo.bind(this);
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

    let infoId = uuidv4();

    this.setState(prevState => ({
      infoSaved: prevState.infoSaved.concat({
        schoolName: schoolName,
        from: from,
        to: to,
        degree: degree, 
        grade: grade,
        infoId: infoId
      })
    }));

    this.closeForm();
  }

  removeInfo(infoId) {
    this.setState(prevState => ({
      infoSaved: prevState.infoSaved.filter(info => info.infoId !== infoId)
    }));
  }

  openForm() {
    this.setState({
      formOpened: true
    })
  }

  closeForm() {
    this.setState({
      schoolName: "",
      from: "",
      to: "",
      degree: "",
      grade: 0.0,
      formOpened: false
    })
  }

  render() {
    const { formOpened, infoSaved } = this.state;

    const infoList = infoSaved.map(info => 
      <li key={info.infoId}>
        {info.schoolName}
        {info.from}
        {info.to}
        {info.degree}
        {info.grade}

        <button onClick={this.removeInfo.bind(this, info.infoId)}>Delete</button>
      </li>
    );

    return(
      <div className="container" id="education">
        <h2>Education</h2>

        { formOpened &&
          <form onSubmit={this.handleSubmit}>
            <label>
              Name of University or School
              <input 
              name="schoolName" 
              type="text"
              placeholder="Enter here"
              onChange={this.handleInputChange} />
            </label>

            <div className="duration">
              <label>
                From
                <input
                name="from"
                type="text"
                placeholder="YYYY"
                onChange={this.handleInputChange} />
              </label>
              <label>
                To
                <input
                name="to"
                type="text"
                placeholder="YYYY"
                onChange={this.handleInputChange} />
              </label>
            </div>

            <label>
              Qualification/Degree
              <input 
              name="degree" 
              type="text"
              placeholder="Enter here"
              onChange={this.handleInputChange} />
            </label>

            <label>
              Grade
              <input 
              name="grade" 
              type="number"
              step="0.1"
              placeholder="Enter here"
              onChange={this.handleInputChange} />
            </label>

            <div className="center">
              <button onClick={this.closeForm}>Cancel</button>
              <input type="submit" value="Save" />
            </div>
          </form>

        }

        <ul>{infoList}</ul>
        
        { !formOpened && <button onClick={this.openForm} className="toggle-form">Add</button>}
      </div>
    );
  }
}

export { Education }
