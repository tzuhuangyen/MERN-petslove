const mongoose = require('mongoose');
const UserModel = require('../models/usersModel');
const ProductModel = require('../models/productModel');
//先設定Schema規則
//cartItemSchema
//定义了购物车中每个商品项的结构
//每个购物车项包含一个产品ID（referring to the Product model）和数量
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductModel', // 參考 Product 模型
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  total: {
    type: Number,
    required: true,
    default: 0, // 默认为0
  },
});

//cartModel
//定义了整个购物车的结构，包含一个用户ID（referring to the User model）和一个购物车项数组
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});
exports = mongoose.model('Cart', cartSchema);
