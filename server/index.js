const express = require("express");
const path = require("path");
const mysqldb = require("../mysqlDB");
// const mongodb = require('../mongoDB');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

//get endpoint is already written out for you
app.get("/contacts", (req, res) => {
  //currently set for mysqldb, make sure to change the method when switching to mongodb
  // mysqldb.getContacts((err, results) => {
  //   if (err) {
  //     res.status(400).send(err);
  //   } else {
  //     res.status(200).send(results);
  //   }
  // });
  res.send("info");
});

app.post("/contacts", (req, res) => {
  // console.log('hitting post', req.body);
  res.status(200).send("POST Request!");
});

app.delete("/contacts/:id", (req, res) => {
  // console.log('hitting delete', req.params.id);
  res.status(200).send("DELETE Request!");
});

app.put("/contacts/:id", (req, res) => {
  // console.log('PUT id', req.params.id)
  // console.log('PUT body', req.body);
  res.status(200).send("PUT Request!");
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
