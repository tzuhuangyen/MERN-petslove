require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./connectMongo');
connectDB();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
// 日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// This is a function that takes in 'req' and 'res' objects as parameters.
// The function is expected to return a JSON response.
app.get('/api/config', (req, res) => {
  // The 'backendUrl' variable is assigned the value of the URL
  // where the backend server is hosted.
  const backendUrl = 'https://petslove-mern.onrender.com';
  // The 'res.json()' method is used to send a JSON response to the client.
  // Here, the JSON response contains the 'backendUrl' variable.
  res.json({ backendUrl });
});
// 将用户路由挂载到 /api/users 路径下
app.use('/users', userRoutes);
// 将产品路由挂载到 /products 路径下
app.use('/products', productRoutes);
// 將admin路由掛載到 /admin路徑下
app.use('/admin', adminRoutes);

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
