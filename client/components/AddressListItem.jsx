import React from 'react';

class AddressListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    }
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
  }

  handleMoreInfoClick() {
    const { showInfo } = this.state;
    this.setState({
      showInfo: !showInfo
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
    } = this.props.contact;

    const { showInfo } = this.state;

    const moreInfo = showInfo ?
      <>
        <div>Email: {email}</div>
        <div>Address: {street}, {city}</div>
        <div>Notes: {notes}</div>
        <button>edit</button>
        <button>delete</button>
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
