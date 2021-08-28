const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "FILL ME IN",
  password: "FILL ME IN",
  database: "AddressBook",
});

connection.connect();

//getContacts is already written out for you
const getContacts = (callback) => {
  const sql = "SELECT * FROM contacts";
  connection.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const postContact = (formObj, callback) => {
  //post with information to db
};

const deleteContact = (id, callback) => {
  //delete based on contact id
};

const updateContact = (id, formObj, callback) => {
  //update contact based on id and submitted information
};

module.exports = {
  getContacts,
  postContact,
  deleteContact,
  updateContact,
};
