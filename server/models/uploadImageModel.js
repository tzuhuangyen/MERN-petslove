//product model
const mongoose = require('mongoose');

const uploadImageSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//mongoDB 資料庫collection name is products
module.exports = mongoose.model('Products', uploadImageSchema);
