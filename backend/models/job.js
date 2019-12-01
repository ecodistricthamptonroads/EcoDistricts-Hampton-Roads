const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  responsibilities: { type: String, required: true },
  requirements: { type: String, required: true }
});

mongoose.model('jobs', jobSchema);
