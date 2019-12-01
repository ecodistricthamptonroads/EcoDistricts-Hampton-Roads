const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const fileupload = require('express-fileupload');
const cookieSession = require('cookie-session');

let url = 'mongodb://localhost:27017/hampton';
mongoose.connect(url);

require('./backend/models');
require('./backend/services');
const keys = require('./backend/keys');
const api = require('./backend/routes');
//const email = mongoose.model('email', { email: String, unique:true, required: true });
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true // parse things from qs
  })
);
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000, // 1 hour
    keys: [keys.cookieKey]
  })
);

//authentication
app.use(passport.initialize()); //lets you use passport
app.use(passport.session()); // lets you do req.user
app.use(fileupload());

//const base = new email({ email: 'edhamptonroads@gmail.com' });
//base.save().then(() => console.log('edhamptonroads@gmail.com saved'));

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
