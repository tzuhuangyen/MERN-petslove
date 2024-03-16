//connect MongoDB
const mongoose = require('mongoose');
require('dotenv').config();

// 将环境变量中的 DATABASE_URL 存储在 mongoString 变量中
const mongoString =
  process.env.MONGODB_CONNECT_URL || 'mongodb://localhost:27017';

//backend port 使用 mongoose.connect() 连接到 MongoDB 数据库
const connectDB = async () => {
  try {
    await mongoose.connect(mongoString);
    console.log('Backend connectDB successfully');
  } catch (error) {
    console.log('Connect failed ' + error.message);
  }
};

module.exports = connectDB;
