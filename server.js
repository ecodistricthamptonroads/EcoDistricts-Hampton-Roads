const path = require('path');
const express = require('express');

const api = require('./backend/routes');

const PORT = process.env.PORT || 8080;
const app = express();

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
