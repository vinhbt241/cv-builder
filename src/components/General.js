import React from "react";
import { v4 as uuidv4 } from 'uuid';

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
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

    const { name, email, phoneNumber } = this.state;

    let infoId = uuidv4();

    this.setState(prevState => ({
      infoSaved: prevState.infoSaved.concat({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
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
      name: "",
      email: "",
      phoneNumber: "",
      formOpened: false
    })
  }

  render() {
    const { formOpened, infoSaved } = this.state;

    const infoList = infoSaved.map(info => 
      <li key={info.infoId}>
        {info.name}
        {info.email} 
        {info.phoneNumber}

        <button onClick={this.removeInfo.bind(this, info.infoId)}>Delete</button>
      </li>
    );

    return(
      <div>
        <button onClick={this.openForm}>Add</button>

        {formOpened &&
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

            <button onClick={this.closeForm}>Cancel</button>
            <input type="submit" value="Save" />
          </form>
        }

        <ul>{infoList}</ul>
      </div>
    );
  }
}

export { General }
