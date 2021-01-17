const mongoose = require ('mongoose');

const JokeSchema = new mongoose.Schema (
  {
    headline: {type: String, required: true},
    punchline: {type: String, required: false},
    type: {type: String, enum: ['question', 'oneliner'], required: true},
    why: {type: String, required: false},
    revision: {type: Number, required: true, default: 0},
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual for joke URLs
JokeSchema.virtual ('url').get (() => {
  return `joke/${this._id}`;
});

// Export the model
module.exports = new mongoose.model ('Joke', JokeSchema);

// https://stackoverflow.com/questions/28357965/mongoose-auto-increment
