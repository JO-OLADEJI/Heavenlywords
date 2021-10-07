const mongoose = require('mongoose');
const { Schema } = mongoose;

const phraseSchema = new Schema({
  addr:  String,
  phrase: String,
});

const Phrase = mongoose.model('addr-phrases', phraseSchema);
module.exports = { Phrase };