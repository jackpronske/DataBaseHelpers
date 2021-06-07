import React from 'react';
import AddressList from './AddressList.jsx';
import AddressForm from './AddressForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [1,2,3,4]
    };
  }

  render() {
    const { contactList } = this.state;
    return (
      <>
        <AddressList contactList={contactList} />
        <AddressForm />
      < />
    )
  }
}

export default App;
