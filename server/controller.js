//控制器函数，用于处理上传产品的请求
//先通过 express-async-handler 中间件包装了一个异步函数，以便在异步操作中正确处理错误
const expressHandler = require('express-async-handler');
const productModel = require('./models/productModel');
// 导入产品模型，用于数据库操作
const postProduct = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(500).json({ error: 'No file uploaded' });
    }
    // 从请求体中获取其他資訊 并使用这些字段创建了一个产品对象，并将其保存到数据库中
    const { price, type, order } = req.body;
    // 创建产品对象
    const productFile = productModel({
      filename: req.file.filename,
      filepath: req.file.path,
      price: price,
      type: type,
      order: order,
    });
    const saveProduct = await productFile.save();
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.log(error);
  }
});
module.exports = postProduct;
