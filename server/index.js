const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/contacts', (req, res) => {
  // console.log('hitting get when page loads');
  // res.status(202).send('GET Request!');
  db.getContacts((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.post('/contacts', (req, res) => {
  // console.log('hitting post', req.body);
  res.status(202).send('POST Request!');
})

app.delete('/contacts/:id', (req, res) => {
  // console.log('hitting delete', req.params.id);
  res.status(202).send('DELETE Request!');
})

app.put('/contacts/:id', (req, res) => {
  // console.log('PUT id', req.params.id)
  // console.log('PUT body', req.body);
  res.status(202).send('PUT Request!')
})

app.listen(3005, () => {
  console.log('listening on port 3005');
})