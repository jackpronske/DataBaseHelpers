import React from 'react';

class UpdateContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.contact.id,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email,
      street: this.props.contact.street,
      city: this.props.contact.city,
      notes: this.props.contact.notes,
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
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      notes,
    } = this.state;

    const { handleUpdateSubmit } = this.props;

    handleUpdateSubmit({
      firstName,
      lastName,
      email,
      street,
      city,
      notes
    });
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

        <input type="submit" value="Update Contact"></input>
      </form>
    )
  }
}

export default UpdateContactForm;