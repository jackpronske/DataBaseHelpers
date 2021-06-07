import React from 'react';

class AddressListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      id: this.props.contact.id,
    }
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleMoreInfoClick() {
    const { showInfo } = this.state;
    this.setState({
      showInfo: !showInfo,
    });
  }

  handleDeleteClick() {
    const { id } = this.state;
    const { deleteContact } = this.props;
    deleteContact(id);
  }

  handleUpdateClick() {
    //this should open up a form that you can update all the fields for the current contact

    //another component? I can probably reuse the submit form, but instead of posting, I send a patch to update the current contact based on id
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      notes,
    } = this.props.contact;

    const { showInfo } = this.state;

    const moreInfo = showInfo ?
      <>
        <div>Email: {email}</div>
        <div>Address: {street}, {city}</div>
        <div>Notes: {notes}</div>
        {/* this would be where the update form would populate after clicking the update button below */}
        <button onClick={this.handleUpdateClick}>edit</button>
        <button onClick={this.handleDeleteClick} >delete</button>
      </>
      : null;

    return (
      <>
        <div onClick={this.handleMoreInfoClick}>{firstName} {lastName}</div>
        {moreInfo}
      </>
    )
  }
}

export default AddressListItem;
