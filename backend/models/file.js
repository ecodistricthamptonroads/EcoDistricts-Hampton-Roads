const mongoose = require('mongoose');
const { Schema } = mongoose;

const FileSchema = new Schema({
  fileName: { type: String, required: true }
});

mongoose.model('files', FileSchema);
