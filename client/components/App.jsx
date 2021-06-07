import React from 'react';
import { contactList } from '../dummyContacts.js';
import AddressList from './AddressList.jsx';
import AddressForm from './AddressForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: contactList
    };
    this.postNewContact = this.postNewContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  postNewContact(formObject) {
    //post request to server with formObject as data
    axios.post('/contacts', formObject)
      .then((results) => {
        console.log('these are results', results)
      })
      .catch((error) => {
        console.error('there was an error', error)
      })
  }

  deleteContact(id) {
    //delete request to server with id of the contact we're deleting
    axios.delete(`/contacts/${id}`)
      .then((results) => {
        console.log('deleted', results);
      })
      .catch((error) => {
        console.error('there was an error', error);
      })
  }



  render() {
    const { contactList } = this.state;
    return (
      <>
        <AddressList
          contactList={contactList}
          deleteContact={this.deleteContact}
        />
        <AddressForm postNewContact={this.postNewContact}/>
      </>
    )
  }
}

export default App;
