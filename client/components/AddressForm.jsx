import React from 'react';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      notes: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { postNewContact } = this.props;
    postNewContact(this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      notes,
    } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Street:
          <input
            type="text"
            name="street"
            value={street}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Notes:
          <input
            type="text"
            name="notes"
            value={notes}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <input type="submit" value="Add Contact"></input>
      </form>
    )
  }
}

export default AddressForm;
