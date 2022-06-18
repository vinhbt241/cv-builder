import React from "react";
import { v4 as uuidv4 } from 'uuid';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      cityName: "",
      from: "",
      to: "",
      role: "",
      description: "",
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

    const { companyName, cityName, from, to, role, description } = this.state;

    let infoId = uuidv4();

    this.setState(prevState => ({
      infoSaved: prevState.infoSaved.concat({
        companyName: companyName,
        cityName: cityName,
        from: from,
        to: to,
        role: role,
        description: description,
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
      companyName: "",
      cityName: "",
      from: "",
      to: "",
      role: "",
      description: "",
      formOpened: false
    })
  }

  render() {
    const { formOpened, infoSaved } = this.state;

    const infoList = infoSaved.map(info => 
      <li key={info.infoId}>
        {info.companyName}
        {info.cityName} 
        {info.from}
        {info.to}
        {info.role}
        {info.description}

        <button onClick={this.removeInfo.bind(this, info.infoId)}>Delete</button>
      </li>
    );

    return(
      <div>
        <button onClick={this.openForm}>Add</button>

        {formOpened &&
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

            <button onClick={this.closeForm}>Cancel</button>
            <input type="submit" value="Save" />
          </form>
        }

        <ul>{infoList}</ul>
      </div>
    );
  }
}

export { Experience }
