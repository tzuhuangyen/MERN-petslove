//product model
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      require: true,
    },
    filepath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//mongoDB 資料庫collection name is products
module.exports = mongoose.model('Products', ImageSchema);
