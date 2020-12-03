const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

mongoose.model('survey', surveySchema);
