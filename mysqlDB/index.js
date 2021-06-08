const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'AddressBook'
});

connection.connect(() => {
  console.log('successful connection mysql database');
});

const getContacts = (callback) => {
  connection.query('SELECT * FROM contacts', (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const postContact = (formObj, callback) => {
  //post with information to db
}

const deleteContact = (id, callback) => {
  //delete based on contact id
}

const updateContact = (id, formObj, callback) => {
  //update contact based on id and submitted information
}

module.exports = {
  getContacts,
  postContact,
  deleteContact,
  updateContact
};