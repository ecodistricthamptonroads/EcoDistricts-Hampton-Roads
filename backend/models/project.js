const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: false },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

mongoose.model('projects', projectSchema);
