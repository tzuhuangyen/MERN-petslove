const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Products', imageSchema);
