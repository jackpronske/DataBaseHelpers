import React from "react";
import AddressListItem from "./AddressListItem.js";

const AddressList = (props) => {
  return props.contactList.map((contact) => {
    return (
      <AddressListItem
        contact={contact}
        deleteContact={props.deleteContact}
        updateContact={props.updateContact}
        key={contact.id}
      />
    );
  });
};

export default AddressList;
