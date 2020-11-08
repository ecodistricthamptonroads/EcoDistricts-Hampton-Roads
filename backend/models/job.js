const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  industry: { type: String, required: true },
  draft: { type: Boolean, required: true }
});

// title: {type: String, required: true}
// body {String, true}
// company {String, true}
// location {String, true}
// post-date {Datetime, true}
// salary {Number, true}
// employment-types {String, true}
// career {String, true}
// industy {String, false}
// end-date {Datetime, true}
// apply-link {String, true}

mongoose.model('jobs', jobSchema);
