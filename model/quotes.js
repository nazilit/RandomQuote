const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
});

module.exports = mongoose.model("Quote", quoteSchema);
