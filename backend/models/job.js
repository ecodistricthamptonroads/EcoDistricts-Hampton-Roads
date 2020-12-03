const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  industry: { type: String, required: true },
  link: { type: String, required: true },
  career: { type: String, required: true },
  jobType: { type: String, required: true },
  postDate: { type: Date, default: Date.now() },
  draft: { type: Boolean, required: true }
});

mongoose.model('jobs', jobSchema);
