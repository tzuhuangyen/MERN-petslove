require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');
// const fs = require('fs');
const connectDB = require('./connectMongo');
connectDB();
const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');

// 获取默认连接
// const database = mongoose.connection;
// 监听数据库连接成功事件
// database.on('connected', () => {
//   console.log('databaseOn connected 成功 successfully');
// });
// 监听数据库连接失败事件
// database.on('error', (error) => {
//   console.log('MongoDB connection error:', error);
// });

// database.once('connected', () => {
//   console.log('DatabaseOnce 连接成功 Connected');
// });

app.use(express.json());
app.use(cors());
// 日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// 将用户路由挂载到 /api/users 路径下
app.use('/users', userRoutes);

// 将产品路由挂载到 /products 路径下
// app.use('/products', productRoutes);

// 错误处理程序
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});
// 404 错误处理程序
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that! 404 错误处理程序");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Yen's Server Started at Server is running on http://localhost:${PORT}`
  );
});
