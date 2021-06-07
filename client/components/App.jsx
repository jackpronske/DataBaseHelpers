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
    this.getAllContacts = this.getAllContacts.bind(this);
  }

  componentDidMount() {
    this.getAllContacts();
  }

  getAllContacts() {
    axios.get('/contacts')
      .then((results) => {
        console.log('here are the get results', results)
      })
      .catch((error) => {
        console.error('oops there was an error', error)
      })
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
        //can either call a get request to retrieve refreshed data here, or handle that on the server side on the success of the deletion of the current id
        console.log('deleted', results);
      })
      .catch((error) => {
        console.error('there was an error', error);
      })
  }

  updateContact(id, changesObj) {
    axios.put(`/contacts/${id}`, changesObj)
      .then((results) => {
        //can either call a get request to retrieve refreshed data here, or handle that on the server side on the success of the updating of the current id
        console.log('updated', results);
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
