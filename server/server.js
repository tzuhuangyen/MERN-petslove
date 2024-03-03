require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

// const fs = require('fs');
// const ProductModel = require('./models/productModel'); // 假设您有一个名为 productModel 的产品模型
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./connectMongo');

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

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
// 读取用户 JSON 文件内容
// fs.readFile('users.json', 'utf8', (err, userData) => {
//   if (err) {
//     console.error('Error reading users JSON file:', err);
//     return;
//   }

//   try {
//     // 将用户 JSON 字符串解析为 JavaScript 对象
//     const usersData = JSON.parse(userData);

//     // 将用户数据插入到 MongoDB 中的 users 集合中
//     UserModel.insertMany(usersData, (err, userDocs) => {
//       if (err) {
//         console.error('Error inserting users data into MongoDB:', err);
//       } else {
//         console.log('Users data inserted successfully:', userDocs);
//       }

//       // 断开与 MongoDB 的连接
//       mongoose.disconnect();
//     });
//   } catch (parseError) {
//     console.error('Error parsing users JSON file:', parseError);
//   }
// });

// 读取产品 JSON 文件内容
// fs.readFile('products.json', 'utf8', (err, productData) => {
//   if (err) {
//     console.error('Error reading products JSON file:', err);
//     return;
//   }

//   try {
//     // 将产品 JSON 字符串解析为 JavaScript 对象
//     const productsData = JSON.parse(productData);

//     // 将产品数据插入到 MongoDB 中的 products 集合中
//     ProductModel.insertMany(productsData, (err, productDocs) => {
//       if (err) {
//         console.error('Error inserting products data into MongoDB:', err);
//       } else {
//         console.log('Products data inserted successfully:', productDocs);
//       }

//       // 断开与 MongoDB 的连接
//       mongoose.disconnect();
//     });
//   } catch (parseError) {
//     console.error('Error parsing products JSON file:', parseError);
//   }
// });

// 将用户路由挂载到 /api/users 路径下
app.use('/api', userRoutes);
// 日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// 引入产品路由
// const productsRouter = require('./routes/productsRoutes');
// 将产品路由挂载到 /api/products 路径下
// app.use('/api/products', productsRouter);
//get / welcome page test
app.get('/', (req, res) => {
  res.status(200).json({ mssg: 'Hello Yen test "/" is working !' });
  console.log('Get request to /users');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 错误处理程序
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Yen's Server Started at Server is running on http://localhost:${PORT}`
  );
});
