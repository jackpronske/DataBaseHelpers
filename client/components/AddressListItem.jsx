import React from 'react';
import UpdateContactForm from './UpdateContactForm.jsx';

class AddressListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showEdit: true,
      id: this.props.contact.id,
    }
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
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
    const { showEdit } = this.state;
   this.setState({
     showEdit: !showEdit
   });
  }

  handleUpdateSubmit(newContactObj) {
    const { showEdit, id } = this.state;
    //sends a update request to the app, which sends to server
    console.log('got to this', newContactObj, this.state.id);
    const { updateContact } = this.props;
    updateContact(id, newContactObj);

    //changes showEdit back to normal, should update with new information
    this.setState({
      showEdit: !showEdit
    })
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

    const { showInfo, showEdit } = this.state;

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

    const currentDisplay =  showEdit ?
      <>
        <div onClick={this.handleMoreInfoClick}>{firstName} {lastName}</div>
        {moreInfo}
      </>
      : <UpdateContactForm
          contact={this.props.contact}
          handleUpdateSubmit={this.handleUpdateSubmit}
        />;

    return (
      <>
      {currentDisplay}
      </>
    )
  }
}

export default AddressListItem;
