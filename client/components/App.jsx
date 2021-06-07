import React from 'react';
import AddressList from './AddressList.jsx';
import AddressForm from './AddressForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [1,2,3,4]
    };
    this.postNewContact = this.postNewContact.bind(this);
  }

  postNewContact(formObject) {
    //post request to server with formObject as data
  }

  render() {
    const { contactList } = this.state;
    return (
      <>
        <AddressList contactList={contactList} />
        <AddressForm postNewContact={this.postNewContact}/>
      </>
    )
  }
}

export default App;
