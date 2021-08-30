import React from "react";
import { contactList } from "../dummyContacts.js";
import AddressList from "./AddressList.js";
import AddressForm from "./AddressForm.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: contactList,
    };
    this.postNewContact = this.postNewContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.getAllContacts = this.getAllContacts.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  componentDidMount() {
    this.getAllContacts();
  }

  getAllContacts() {
    axios
      .get("/contacts")
      .then((results) => {
        console.log("here are the get results", results);
        // this.setState({
        //   contactList: results.data,
        // })
      })
      .catch((error) => {
        console.error("oops there was an error", error);
      });
  }

  postNewContact(formObject) {
    //post request to server with formObject as data
    axios
      .post("/contacts", formObject)
      .then((results) => {
        console.log("these are results", results);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

  deleteContact(id) {
    //delete request to server with id of the contact we're deleting
    axios
      .delete(`/contacts/${id}`)
      .then((results) => {
        console.log("deleted", results);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

  updateContact(id, changesObj) {
    //update request to server with id and changes object of contact we're updating
    axios
      .put(`/contacts/${id}`, changesObj)
      .then((results) => {
        console.log("updated", results);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

  render() {
    const { contactList } = this.state;
    return (
      <>
        <h1> ADDRESS BOOK </h1>
        <div className="address-list">
          <AddressList
            contactList={contactList}
            deleteContact={this.deleteContact}
            updateContact={this.updateContact}
          />
        </div>
        <AddressForm
          className="address-form"
          postNewContact={this.postNewContact}
        />
      </>
    );
  }
}

export default App;
