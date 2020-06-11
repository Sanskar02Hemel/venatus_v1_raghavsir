const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pastEventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Pastevent', pastEventSchema);
