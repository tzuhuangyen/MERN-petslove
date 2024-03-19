const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  // id: String,
  productName: { type: String, required: true },

  price: {
    type: Number,
    required: [true, 'enter price'],
    // select: false,
    //預設會顯示密碼 改為false及會隱藏
  },
  type: {
    type: String,
    required: [true, 'enter product type,beef...'],
  },
  order: {
    type: String,
    required: [true, 'enter product order,in stock...'],
  },
  description: { type: String },
});

module.exports = mongoose.model('Products', productSchema);
