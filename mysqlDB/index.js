const mysql = require("mysql");

/* ====== Write out your Schema.sql first before trying to connect to the database! ====== */
const connection = mysql.createConnection({
  host: "localhost",
  user: "FILL_ME_IN",
  password: "FILL_ME_IN",
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
