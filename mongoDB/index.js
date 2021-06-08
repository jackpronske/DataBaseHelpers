const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successful connection mongo database');
});

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  street: String,
  city: String,
  notes: String
});

const Contact = mongoose.model('Contact', contactSchema);

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
  //use mongoose to post a model into the database
}

const deleteContactMongo = (id, callback) => {
  //use mongoose to delete a model based on the passed in ID
}

const updateContactMongo = (id, newFormObj, callback) => {
  //use mongoose to update an existing contact by ID, using the new form obj
}

module.exports = {
  getContactsMongo,
  postContactMongo,
  deleteContactMongo,
  updateContactMongo
}