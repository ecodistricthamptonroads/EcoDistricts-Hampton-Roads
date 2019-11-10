const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now}
});

mongoose.model('news', newsSchema);

