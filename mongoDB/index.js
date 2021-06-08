const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/AddressBook', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successful connection mongo database');
});

const contactSchema = new mongoose.Schema({
  //FILL ME IN
});

const Contact = mongoose.model('Contact', contactSchema);


//getContactsMongo is already written out for you
const getContactsMongo = (callback) => {
  Contact.find({})
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      callback(err);
    })
}

const postContactMongo = (formObj, callback) => {
  //post with information to db
}

const deleteContactMongo = (id, callback) => {
  //delete based on contact id
}

const updateContactMongo = (id, newFormObj, callback) => {
  //update contact based on id and submitted information
}

module.exports = {
  getContactsMongo,
  postContactMongo,
  deleteContactMongo,
  updateContactMongo
}