require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./connectMongo');
connectDB();

const adminUserRoutes = require('./routes/adminUserRoutes');
// const productRoutes = require('./routes/productRoutes');
const adminProductRoutes = require('./routes/adminProductRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// This is a function that takes in 'req' and 'res' objects as parameters.
// The function is expected to return a JSON response.

// 将用户路由挂载到 /api/users 路径下
app.use('/adminUsers', adminUserRoutes);
// 将产品路由挂载到 /products 路径下
// app.use('/products', productRoutes);
// 將admin路由掛載到 /admin路徑下
app.use('/adminProducts', adminProductRoutes);

// 错误处理程序
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
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
