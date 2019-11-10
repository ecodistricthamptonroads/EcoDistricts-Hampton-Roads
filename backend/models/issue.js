const mongoose = require('mongoose');
const { Schema } = mongoose;

const issueSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now}
});

mongoose.model('issues', issueSchema);

