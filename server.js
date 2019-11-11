const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let url = "mongodb://localhost:27017/hampton";
mongoose.connect(url);

require('./backend/models');

const api = require('./backend/routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true // parse things from qs
  })
);

//backend routing
app.use('/api', api);

//frontend routing
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 Backend on port ${PORT}.`);
});
