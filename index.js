const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let uppercaseName = name.toUpperCase();
  res.send(uppercaseName);
  //res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ', ' + year;
  res.send(formattedDate);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greetingMsg = 'Namaste, ' + name + '!';
  res.send(greetingMsg);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let fullAddress = street + ', ' + city + ', ' + state;
  res.send(fullAddress);
});

app.get('/email', (req, res) => {
  let userName = req.query.userName;
  let domain = req.query.domain;
  let email = userName + '@' + domain;
  res.send(email);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
