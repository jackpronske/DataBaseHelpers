import React from 'react';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, () => {
      console.log('changed');
    })
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('did this work');
      }}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        ></input>
        <input type="submit" ></input>
      </form>
    )
  }
}

export default AddressForm;
