import React from 'react';
import AddressListItem from './AddressListItem.jsx';

const AddressList = (props) => {
  return (
    props.contactList.map((contact, i) => {
      return (
        <AddressListItem contact={contact} key={i} />
      )
    })
  )
};

export default AddressList;
