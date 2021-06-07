import React from 'react';

const AddressListItem = ({ contact }) => {
  return (
    <div>{contact.firstName} {contact.lastName}</div>
  )
}

export default AddressListItem;
