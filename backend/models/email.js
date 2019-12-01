const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmailSchema = new Schema({
  email: { type: String, required: true, unique: true }
});

mongoose.model('emails', EmailSchema);
