const mongoose = require("mongoose");

const cricketschema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  team: {
    type: String,
    require: true,
  },
  win: {
    type: Number,
    require: true,
  },
});

// making of collection
const Cricket = new mongoose.model("Cricket-collection", cricketschema);

module.exports = Cricket;
