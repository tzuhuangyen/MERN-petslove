//usersModel此檔案用來設定當用戶輸入時的規則
const mongoose = require('mongoose');
const cartSchema = require('./cartModel'); // 引入 cartItemSchema

const bcrypt = require('bcrypt');
// 假设 UserModel Schema 包含一个名为 password 的字段

//先設定Schema規則
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'enter email'],
    },
    password: {
      type: String,
      required: [true, 'enter password'],
      minlength: 5,
      // select: false,
      //預設會顯示密碼 改為false及會隱藏
    },
    cart: [cartSchema], // 用户购物车中包含的商品列表
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    //elect: false,前台不會顯示
  },
  {
    versionKey: false,
    //timestamps: true // 加上timestamps 會自動加上createdAt跟updatedAt
  }
);
//可以在options地方 versionKey可以選擇隱藏版本號
//可以在options地方加上客製collection名稱

// 將用戶輸入的密碼加密後 保存到資料庫中
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const match = await bcrypt.compare(candidatePassword, this.password);
    return match;
  } catch (error) {
    throw new Error(error);
  }
};

//test
// const User = mongoose.model('User', userSchema);
// const testUser = new User({
//   username: 'test',
//   password: '00000',
// });
// testUser
//   .save()
//   .then(() => {
//     console.log('User saved');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 將寫好的 userSchema 模型export出去
module.exports = mongoose.model('User', userSchema);
//第一個參數是'User 是collection名稱 第二個參數userSchema是schema的設置
//collection會自動改成小寫並會加上s
//import 到userRoutes> const UserModel = require('../models/usersModel');
