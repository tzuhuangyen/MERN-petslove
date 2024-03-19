// 在后端路由处理程序中发送环境变量给客户端
app.get('/api/config', (req, res) => {
  res.json({
    backendUrl:
      process.env.REACT_APP_BACKEND_URL || 'https://petslove-mern.onrender.com',
  });
});
