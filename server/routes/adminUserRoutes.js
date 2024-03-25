const express = require('express');
const router = express.Router();
const UserModel = require('../models/usersModel');
const CartModel = require('../models/cartModel');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

// const validator = require('validator');
const jwt = require('jsonwebtoken');
function generateToken(user) {
  const payload = {
    userId: user._id,
    username: user.username,
    password: user.password,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '72h' });
  return token;
}
//test
// router.get('/', (req, res) => {
//   console.log('Handling GET request to mongoDB for /');
//   sendStatus('hello');
// });
//find/get all users
router.get('/', async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
    console.log('Handling GET request to mongoDB for /users');
    console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//admin find/get by ID
router.get('/user/:id', async (req, res) => {
  try {
    const data = await UserModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post /signup 註冊功能
router.post('/signup', async (req, res) => {
  console.log('Received registration request:', req.body);
  try {
    // 處理註冊的邏輯 擷取用戶輸入的資料
    const { username, password } = req.body;

    // 检查是否已存在相同用户名的用户
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    // 將用戶輸入的密碼加密
    const hashedPassword = await bcrypt.hash(password, 10);
    //當新用戶註冊（new）新增時 輸入資料時使用schema來規範
    // const newUser = new UserModel({
    //   username,
    //   password: hashedPassword,
    // });
    //新增newUser後儲存到資料庫中
    // const dataToSave = await newUser.save();
    // console.log('User registered successfully:', dataToSave); // 添加此行

    //.create
    const newUser = await UserModel.create({
      username: username,
      password: hashedPassword,
    });
    console.log('User registered successfully:', username); // 添加此行
    res.status(200).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error.errors); // 添加此行
    res.status(400).json({ message: error.message });
  }
});

// Post /login登入功能
router.post('/login', async (req, res) => {
  // 從 POST 請求的 body 中取得使用者提供的資訊
  const { username, password } = req.body;
  console.log('Received login request:', username); // 输出收到的用户名

  try {
    // 在 users 陣列中查找是否存在符合提供的使用者名稱和密碼的帳戶
    const user = await UserModel.findOne({ username });

    if (!user) {
      console.log('User not found or incorrect password:', username); // 用户不存在或密码不正确
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // 检查用户提供的未哈希密码与数据库中的哈希密码是否匹配
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // 如果用户名和密码都匹配，则登录成功
    console.log('User logged in successfully:', username); // 登录成功
    // 登录成功，生成 JWT 令牌并返回给客户端
    const token = generateToken(user); // 生成 JWT 令牌
    console.log('token:', token); // 输出生成的 token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error); // 输出错误信息

    res.status(500).json({ message: error.message });
  }
});

// 用戶登戶後获取用户信息和购物车数据
router.get('/user/profile', async (req, res) => {
  try {
    // 从请求头中获取访问令牌
    const token = req.headers.authorization.split(' ')[1];
    // 解码令牌以获取用户ID
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;

    // 根据用户ID查找用户信息
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 根据用户ID查找购物车数据
    const cart = await CartModel.findOne({ userId: userId }).populate(
      'items.productId'
    );

    // 返回用户信息和购物车数据
    res.status(200).json({ user: user, cart: cart });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//patch / update by id
router.patch('/update/:id', async (req, res) => {
  try {
    console.log('Received PATCH request:', req.body); // 记录请求体内容
    const token = req.headers.authorization.split(' ')[1]; // 从请求头中获取令牌
    console.log('Token:', token); // 记录令牌内容
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // 验证令牌
    if (!decodedToken || !decodedToken.userId) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // 获取用户ID
    const userId = decodedToken.userId; // 从路径参数中获取用户ID
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: 'New password is required' });
    }
    // 更新数据库中的密码
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updateData = { password: hashedPassword };
    const options = { new: true };
    const result = await UserModel.findByIdAndUpdate(
      userId,
      updateData,
      options
    );

    res.status(200).json({ message: 'Password updated successfully' });
    console.log(result);
  } catch (error) {
    console.error('Error handling PATCH request:', error); // 记录错误信息
    res.status(500).json({ message: error.message });
  }
});

//Delete user by id
//only admin can delete other user account by request

module.exports = router;
