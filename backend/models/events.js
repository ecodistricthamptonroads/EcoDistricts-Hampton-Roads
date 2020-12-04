const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: false }
});

mongoose.model('events', newsSchema);
